---
title: "Using Redux with React Native"
date: "2017-01-30"
path: "/using-redux-with-react-native"
---

I’m in the middle of developing a React Native app — Revisify. Originally starting as a website to help students prepare for their exams, I’m currently moving the experience over to mobile. As this is my first React Native app, getting my head around new ideas has been challenging. The hardest thing for me since I started has been understanding Flux and Redux. Since React Native and Redux are fairly young (about 2 years old), there is not a lot of resources on the subject, so today I’ll give you my thoughts on implementing Redux into your application.

### What is Flux/Redux?

[Flux](https://facebook.github.io/flux/) is a pattern which Facebook created to manage the data of an application. Flux is **not** a library, it’s just an idea.

[Redux](http://redux.js.org) is one of many Javascript libraries that help you create applications using the Flux architecture.

### Why should you use Flux in the first place?

When learning about Redux, I didn’t understand why I should use it. To make it straightforward for you here’s a few reasons why you may want to use Redux:

* It makes managing data and understanding data flow in your application much easier since data can only be send one way (unidirectional) rather than being like a mess, like spaghetti.

* Data that needs to be accessed in multiple parts of your application such as the user’s details can be stored easily in one place

If your app is very basic, you probably don’t need Redux, it all depends on your app and it’s features. Hopefully, by the end of this post, you’ll be able to understand whether Redux is for you.

### How does Redux work?

Redux has one big object that contains all the data you choose to store called the **state**. The state for a note taking app could look like this:

```javascript
{
 user: {
   name: 'John Smith',
   age: 22,
   email: 'john_smith1@gmail.com',
 },
 notes: [
   'remember to take the washing out',
   'pick up some apples on the way home',
   'give Jane a call'
 ]
}
```

You can see that there is information about the user using the app such as his name and also a list of notes that have been created. I like to think of the the state as a database.

One thing which confused me was the fact that Redux state and React components state were 2 different things, just with a different name. Remember the Redux state is a way to store data whereas a React component’s state has nothing to do with Redux and simply keeps track of data which can change within a component.

To manage the data in the Redux state, we have 3 things: actions, reducers and stores.

* **Actions** can be sent when a user presses a button, load an app, etc. They can contain information that you want to add to the state.

* **Reducers** listen for actions. When it hears that an action has been sent to it, it updates the state.

* **The Store** holds the Redux state and allows access and modifications to it. It’s the middleman between actions and reducers.

To explain what each of these does, let’s pretend we have an app with a button and a counter. Every time the user presses the button, the counter goes up by one. So if we were to build this app using Redux here is how it would work.

1.  The user presses the button, sending (or better known as ‘dispatching’) an action

```javascript
class App extends Component {
  render() {
    return (
      // this.props.count comes from the Redux state
      <Text>{this.props.count}</Text>

      // This.props.addToCounter() is a function to update the counter
      <Button onPress={() => this.props.addToCounter()}>
        Click Me!
      </Button>
    )
  }
}

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
  return {
    addToCounter: () => dispatch(addToCounter())
  }
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
```

2.  When `this.props.addToCounter()` is called, it calls the action below:

```javascript
// We specify the name of the action as a variable
const ADD_TO_COUNTER = 'ADD_TO_COUNTER'

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function addToCounter() {
  return {
    type: ADD_TO_COUNTER,
  }
}
```

3.  A reducer hears the action `ADD_TO_COUNTER` has been sent and adds 1 to the value of `counter` in the state

```javascript
import {ADD_TO_COUNTER} from './actions'

// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  counter: 0
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  switch (action.type) {
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
```

4.  As the state has been updated, the value of ‘this.props.counter’ in the React component is automatically updated to show that the button has been pressed.

It’s quite straightforward once you get the hang of it. One thing I did not mention was the store. The store is something you setup and not need to worry about after. Here is how you should implement it:

```javascript
import reducer from './reducer'

// This connects the reducer to the store
export default function configureStore() {
  let store = createStore(reducer)

  return store
}
```

As I said before, the store ties together actions and reducers. When you send an action using `this.props.addToCounter()` you’re actually calling `dispatch(addToCounter())` (this is because we set this up in `mapDispatchToProps())`. The dispatch function comes from the store behind the scenes. The reducer is used when creating the store as you can see in the above code snippet.

The last thing you need to do now is include the store into your application:

```javascript
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import App from './app'

import configureStore from './store.js'
const store = configureStore()

class MyCounterApp extends Component {
  render() {
    return (
      // <Provider> allows us to access the store for dispatching actions and receiving data from
      // the state in it's children i.e. <App/>
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MyCounterApp', () => MyCounterApp)
```

And there you have it! There is a lot more to talk about such as containers vs components, keeping the state available in storage and retrieving data to and from an API using Redux but that I think that would be a lot of content to digest at once, I will leave that for another post.
