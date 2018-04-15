---
title: "Validating Forms in React Native"
date: "2017-02-12"
path: "/validating-forms-in-react-native"
---

As I’m in the midst of building a React Native app for my exam studying tool, [Revisify](http://revisify.com), I needed to find an elegant solution to validating forms. One of my favourite advantages of using React Native is that there are plenty of Javascript libraries already out there to help speed up your development, one of them being [validate.js](http://validatejs.org), which helps you to… validate your forms!

## How Validate.js Works

Validate.js requires you to have a variable to hold your field validation rules such as presence checks, length checks etc. You can also create async and custom validators. Here is a basic example of what your rules could look like.

```javascript
const validation = {
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
}

export default validation
```

The structure is pretty self-explanatory other than you may have noticed that for all the error messages, I put `^` before them. The reason for this is because for some reason when you validate a field and there is an error, the error message will return the field name and the error message together such as Password Your password must be at least 5 characters. It’s a bit odd as to why this happens but my regex solution removes the field name from the error message.

## My Wrapper to Validate Fields

I created a wrapper since I found that I would reuse a lot of the code between different forms. The function below takes the field name and its value and return the error message if there is one.

```javascript
import validation from 'validation.js'

export default function validate(fieldName, value) {
  // Validate.js validates your values as an object
  // e.g. var form = {email: 'email@example.com'}
  // Line 8-9 creates an object based on the field name and field value
  var formValues = {}
  formValues[fieldName] = value

  // Line 13-14 creates an temporary form with the validation fields
  // e.g. var formFields = {
  //                        email: {
  //                         presence: {
  //                          message: 'Email is blank'
  //                         }
  //                       }
  var formFields = {}
  formFields[fieldName] = validation[field]

  // The formValues and validated against the formFields
  // the variable result hold the error messages of the field
  const result = validatejs(formValues, formFields)

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0]
  }

  return null
}
```

## My Custom TextInput Component

Since I want every single TextInput to have validation, it would make sense to create a custom component which contained a TextInput and an error message. Here is a stripped down version:

```javascript
import React from 'react'
import { View, TextInput, Text } from 'react-native'

const TextField = props => (
  <View>
    <TextInput />
    props.error ? <Text>{props.error}</Text> : null
  </View>
)

export default TextField
```

## An Example Form

The example below demonstrates how I validate forms in practice. I keep all the TextField values and error messages in the state. Every time the TextField is blurred, the value entered is validated and the error message in the state is updated.

When the button to send off the form is pressed, it calls a function to validate all the fields. If there are no errors, then the form can be submitted.

```javascript
import React, { Component } from 'react'
import { View, Button } from 'react-native'

import TextField from 'textfield'
import validation from 'validation'
import validate from 'validation_wrapper'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    }
  }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError,
    })

    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }

  render() {
    return (
      <View>
        <TextField
          onChangeText={value => this.setState({ email: value.trim() })}
          onBlur={() => {
            this.setState({
              emailError: validate('email', this.state.email),
            })
          }}
          error={this.state.emailError}
        />

        <TextField
          onChangeText={value => this.setState({ password: value.trim() })}
          onBlur={() => {
            this.setState({
              passwordError: validate('password', this.state.password),
            })
          }}
          error={this.state.passwordError}
          secureTextEntry={true}
        />

        <Button title="Register" onPress={this.validateRegister} />
      </View>
    )
  }
}
```

There you have it! That’s how I validate forms using React Native, I hope this helped.
