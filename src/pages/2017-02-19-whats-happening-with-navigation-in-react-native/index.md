---
title: "What’s Happening with Navigation in React Native?"
date: "2017-02-19"
path: "/whats-happening-with-navigation-in-react-native"
---

When I began learning React Native the docs and developers said that to handle navigation between scenes in your app you should use [Navigator](https://facebook.github.io/react-native/docs/navigator.html) and a depreciated component, [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html), was no longer recommended. After I began using Navigator, I found out about another component, [NavigationExperimental](https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental), which was being developed to replace Navigator. After seeing a [post](https://www.reddit.com/r/reactnative/comments/5ufr1h/why_is_navigation_in_react_native_such_a_big_mess/) on the React Native subreddit and then doing some digging, I found out that Navigator and NavigationExperimental will be depreciated in favour of one last library [React-Navigation](https://reactnavigation.org/). It’s all a bit of a mess but I will clear everything up from what I’ve found while building my app.

## NavigatorIOS

The first solution to navigation in React Native was NavigatorIOS. As the name suggests, it only works on iOS, since it was built before React Native supported Android. While it uses the native navigation bar in iOS, NavigatorIOS has multiple bugs which have not been fixed and the lack of customisation of the appearance of the navigation bar can be difficult to style the app the way you would like. I can’t imagine anyone wanting to use this for a new project.

## Navigator

Navigator was built to replace NavigatorIOS. Since it isn’t native and uses Javascript, it is supported on iOS and Android. It is more customisable than NavigatorIOS, but animations are slower since it isn’t native. [The docs still use Navigator](https://facebook.github.io/react-native/docs/using-navigators.html) to introduce new developers to React Native however, it is being depreciated, so if you plan on building an app or have just begun, it isn’t recommended.

## NavigationExperimental

NavigationExperimental was developed to add several improvements the Navigator. Since using Navigator can lead to code being messy and difficult to understand, NavigationExperimental uses single directional data flow to navigate through scenes (basically it supports [Flux](https://facebook.github.io/flux/)). It also keeps the navigation code separate from the view logic. The only issue with NavigationExperimental is that while you get more control, the setup and usage is a bit more difficult. Like NavigatorIOS and Navigator, NavigationExperimental is being [depreciated](https://github.com/facebook/react-native/wiki/Roadmap).

## React Navigation

The new recommended solution is [React Navigation](https://reactnavigation.org/) which hopes to overcome the issues of the previous solutions. React Navigation is special because not only does it support iOS and Android, but it also works on the web. I moved from using Navigator to React Navigation and it is an incredible library. It is very flexible and removes the difficulties in managing tabs, navigation stacks and navigation draws. Unlike NavigationExperimental, it is easy to get started with (it took me 15 minutes to understand) and requires less logic since it’s done by the library. It also has support for deep linking.

Navigation in React Native has been a mess, but the developers in the community are doing a great job at finalising a long-term solution with React Navigation. I’ve been using it in my app for a few days and I’m pleased with its simplicity and performance. It’s currently in its 5th beta but seems stable. I look forward to seeing happens to the library in the future.

**TL;DR:** NavigatorIOS, Navigator and NavigationExperimental are all depreciated. The official and best solution to use is React Navigation.
