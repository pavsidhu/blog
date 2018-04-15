---
title: "🐳 Docker: An Explanation for Beginners"
date: "2017-08-12"
path: "/docker-an-explanation-for-beginners"
---

During the 6 years I’ve been programming, I’ve discovered a pattern when learning something new. At first what you’re learning feels impossible to understand. It isn’t until afterwards, you realise it wasn’t actually that difficult all along. Docker is no exception of this pattern.

In this post, I aim to answer all the questions I had when first learning Docker. Please note that this isn’t a technical tutorial as such, it’s an explanation of the world of Docker. If it’s a tutorial that you’re after I’ve linked a couple of my favourites at the end of this article.

## What’s the problem that Docker aims to solve?

While Docker solves a lot of things, its main selling point is that it improves consistency.

When a group of people are working on the same application, there can be inconsistencies with operating systems and setups. This can lead to a bunch of different issues.

There may even be inconsistencies when running your application on your own computer and on your production server.

All these issues take you away from solving the actual problem, which is building your application.

## So, how does Docker solve this?

Docker has a thing they call containers. They are like Linux virtual machines but they are very efficient and use fewer resources. Your application can be run inside its own isolated container with a consistent environment.

A container which includes your application can be run on Windows, MacOS or Linux. This removes any of the quirks that come with developers having different operating systems and setups on their computer.

Docker’s ability to keep a consistent environment makes your application very portable.

## But where do I get these containers?

Docker has a place where you are able to download containers called Docker Hub.

While you can create your own container from scratch the likelihood of you needing to is low. By downloading a container which already has already been setup, you can start building your application sooner.

A few examples of containers that you can download from Docker Hub include [Node.js](https://hub.docker.com/_/node/), [MySQL](https://hub.docker.com/_/mysql/) or even [Ubuntu](https://hub.docker.com/_/ubuntu/).

## How do I add my app to the container?

Once you’ve found the container that you want, you’ll want to be able to customise it to add your application, setup dependencies and more. This is where a Dockerfile comes in.

A Dockerfile, in short, explains how you want Docker to set up your container when it first loads. This is how a basic Dockerfile for a Node.js application might look like:

```text
# Use the official Node.js runtime as a base image
FROM node:alpine

# Set the directory of my web application to /app
WORKDIR /app

# Copy over my project’s directory into the container /app folder
Add . /app

# Install all the dependencies for my web application
RUN yarn install

# Make the port 3000 accessible outside of Docker
EXPOSE 3000

# Execute the command yarn start
CMD ["yarn", "start"]
```

This Dockerfile will now run whenever an instance of the container is being built. Yet to create a container you need to create a Docker image. Once you create the image, you can use it to create as many containers as you wish.

## So I need only a single container for my whole app?

While you can do this, it’s best practice to isolate parts of your application into different containers.

For example, a web application that requires a Python web server and a database should have two containers rather than one. The first should be for your Python server and the second for your database.

Why? It makes your application more modular. If your application grows in the future or has random spikes in traffic, you can spin up several Python server instances to share the load.

## Can’t it get difficult managing different containers at the same time?

Yup. That’s why Docker created another tool called Docker Compose. It allows you to specify the configuration of Docker containers that rely on each other in one file. A Docker Compose file (docker-compose.yml) may look something like this:

```text
version: '2'
services:
  server:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
  database:
    image: "mariadb:10.3"
    environment:
      - MYSQL_ROOT_PASSWORD=MyPassword
      - MYSQL_DATABASE=MyDatabase
    ports:
      - "3306:3306"
```

As you might see, we’ve created two services (or containers), one named server and another named database. I’ve specified the ports, environment variables and other information.

Once you’ve set up the docker-compose.yml file it becomes easier to manage a group of containers for a single application.

## What else is there that I should know?

* **Kitematic:** This is a program that allows you to manage containers through a visual interface. I would recommend you use this in the beginning since setting up containers in the command line can be overwhelming.

* **Docker Swarm:** When your application grows, you might want to have several containers that handle your traffic. Docker Swarm makes it easier to manage groups of containers (called clusters) at a time. This is something you should consider implementing in the future.

## Further reading

Here are a couple of the resources that I found useful when learning Docker myself:

The Docker docs of course, though I found them to be intimidating for beginners. [Get Started, Part 1: Orientation and setup](https://docs.docker.com/get-started)

DigitalOcean has some brilliant resources. Their getting started guide goes into some more detail and has all the technical info too:
[How To Install and Use Docker: Getting Started | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-getting-started)
