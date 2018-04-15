---
title: "My React Native App Setup"
date: "2017-02-05"
path: "/my-react-native-app-setup"
---

2017 will mark a huge milestone for me because I will release my first app for iOS and Android. My strong passion for programming, improving education and helping others led to the release of my website, Revisify, a free to use study tool for students. After 2 years of maturing the website, I plan on delivering the same experience on mobile.

I want to document my process of building the Revisify app so that others who are building their first React Native app too will be able to refer to my process. If you’re interested in why I chose React Native over traditional development, [I talk about it here](https://blog.revisify.com/5-reasons-why-i-chose-react-native-over-traditional-app-development-3de18e208b8a#.m0wqbypjm) however in this post I will be showing you the libraries that I am using to build the Revisify app.

## Data management: Redux, Redux-Saga

The most popular library for implementing the [Flux](https://facebook.github.io/flux/) application architecture is currently [Redux](http://redux.js.org/) (If you don’t understand Flux and Redux you can [read about it here](https://blog.revisify.com/using-redux-with-react-native-9d07381507fe#.oku5fl6xp)). I started learning [Reflux](https://github.com/reflux/refluxjs) but moved over to Redux as the official documentation is excellent and the development of other libraries such as [Reflux](https://github.com/reflux/refluxjs) is slowing down.

Redux does not have the functionality to pull data from an API so there are libraries to help you do that. I began using [Redux-Thunk](https://github.com/gaearon/redux-thunk) since it was easier to understand than the alternative [Redux-Saga](https://github.com/redux-saga/redux-saga) however I switched over to using Sagas for multiple reasons. It was clear from starting to use Redux-Thunk that it would quickly become a mess to manage and test, especially since my app relies heavily on API calls. Redux-Saga has kept my code organised and easy to understand as well as made it simple to test. Unless your app barely relies on an API I would recommend taking the time to learn Sagas.

## Forms: Validate.js

Most if not all apps have forms somewhere which is why it’s important to validate the inputted data. When looking around for a React Native solution I didn’t find anything. Thankfully one of the advantages of React Native is that apps are programmed in Javascript, meaning that there are already libraries that help you to do a load of stuff. One of those libraries is [validate.js](https://validatejs.org/) (it only takes up a tiny 4.56KB). Validate.js simply allows you to define validation rules and error messages to different fields in your form. I plan on writing a post in the future to outline my process of implementing it into a React Native app.

## Testing: Jest

I really love [Jest](https://facebook.github.io/jest/) due to its simplicity and ease of understanding. Jest works by creating a ‘snapshot’ of your components. If you update the component and generate a new snapshot of it, Jest will compare the old and new versions and ask you if the changes are intended or not. Like React Native, Jest is also built my Facebook, so there is [good documentation](https://facebook.github.io/jest/docs/tutorial-react-native.html#content) for implementing it into your app.

## Conclusion

Something which I have learnt from building the Revisify website is that it is important to use the right tools and libraries when initially building your application since you’ll have to use it for a long time. If you want to make your development easier use the right tools at the beginning. Your future self will love you for it.
