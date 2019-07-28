---
sidebarDepth: 3
sidebar: auto
---

# Guide

## Setup

### Using create-rapin-app

With help npx:

```bash
yarn create rapin-app <project-name>
```

or with yarn

```bash
npx create-rapin-app <project-name>
```

To run in developer mode use the command:
```bash
yarn run dev
```

To run in production use the command:
```bash
yarn start
```


## Envirouments

### PORT
 - Type: String
 - Default: 3000

Allows you to specify the port on which the API is located.

### HTTP_SERVER
 - Type: String
 - Default: http://localhost/
 
Url where the API is located.

### BASE_URL
 - Type: String
 - Default: "/"

Suffix in url.

## Config file

### style
In this section, you can set the stylesheet engine. Currently only postcss is available.

### template
In this section, you can set the template engine. Currently Twig, Pug and Mustache is availables.

### storage
In this section, you can specify the path to the storage folder.

### cache
In this section, you can specify the way the cache is kept and the lifetime of the cache. Currently only the file method is available.

### log
In this section you can specify the location of the file for storing logs.

### mail
In this section, you can specify settings for sending mail through the class [mail](/api/#mail).

### plugins
In this section, you can connect plugins.


## Controller

### Create new controller

## Model

### Create new model

## View

### Stylesheet
### Template

## Plugin

### Create new plugin