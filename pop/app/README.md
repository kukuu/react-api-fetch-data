

# React, Redux and Saas build.

To get started, first install all the necessary dependencies.
```
> npm install
```

Run an initial webpack build
```
> webpack
```

Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3050/](http://localhost:3050/)

> Each folder has some notes on architectural direction and development


## The "Store"

This is a big JavaScript object, and stores all your applications states/data

## Reducers

Take in Actions and updates parts of the application state. Reducers return data. 
Updated data gets despatched to the store.


## Provider

Makes Store available to all Containers

## Containers

Fetch apps state data, and use it to render components. Apps state becomes component props.

## Components

Whenever application state changes, components are re-rendered.

## Actions

Changes made to the application state. An object with 2 keys. Type and paylaod

Editing in the development environment comes with live reload!


# Calorie Converter

A separate BMI application  (  /calorie-convertet/) is also provided in Vanilla JavaScript. This is only a guide to how much 
calories is recommended based on age, height and weight! Debatable --)