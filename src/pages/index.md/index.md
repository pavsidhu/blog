---
title: "How I Built My Blog Using Gatsby and Netlify"
date: "2018-04-20"
path: "/how-i-built-my-blog-using-gatsby-and-netlify"
---

# Can you name a more iconic duo?

If I had to single out the best programming experience I’ve ever had, it’s building this blog. I remember years ago when I uploaded my first website, I built it using plain HTML and CSS and uploaded it to some random host.

These days tools like Gatsby and Netlify make the development process so simple that you can focus on building your application rather than thinking about boilerplate, code etc. Let me explain how.

## Gatsby

---

Gatsby is a static site generator that uses React. This means you can build a website like normal, however Gatsby will compile your website down to a simple static website, meaning you don’t need a server to build your website on every request. How cool is that?

Builds on React workflow- component based, may have a learning curve if you’ve not used React before, but if you have you’ll be right at home

My favourite method for writing documents is Markdown. There’s a Gatsby plugin that will read Markdown files and convert them to HTML during the build process. This plugin works like magic straight out of the box.

In order to get access to data that your site uses, Gatsby uses GraphQL.

Example here

As you can see, accessing data is fairly straightforward if you understand GraphQL. Unfortunately thinks adds a lead ING curve for newcommers
https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark

Graphql

Remark

Docs are some of the best written — though there’s a lot of wiring so skip the things that don’t apply to you.

So fast — issue with flash of unstyled content but upgraded to latest Gatsby version fixed this

## Netlify

Easy to upload

Hooks into GitHub

Automatic build

Simple interface

Handles domains

Free

Open source — in case they shut down, you’re covered

Only needed to follow one blog post — usually after following a tutorial it’s difficult or never works

CDN

## TL;DR

Gatsby and Netlify is the easiest way to publish a static website. Period.

---

This post was originally published on my blog: How I Built My Blog Using Gatsby and Netlify
Thanks for reading, please give some 👏 if you found this useful! I’d love to hear your thoughts in the comments below.