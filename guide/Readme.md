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
 - type: String

Allows you to specify the port on which the API is located. Default - 3000.

### HTTP_SERVER
 - type: String
 
Url where the API is located. Default - http://localhost/

### BASE_URL
 - type: String

Suffix in url. Default - "/".

## Config file

All basic settings are in the file rapin.config.ts. This file allows editing default setting and adding plugins. 

### style
In this section, you can set the stylesheet engine. Currently only postcss is available.

```bash
style: {
  engine: 'postcss'
}
```
### template
In this section, you can set the template engine. Currently Twig, Pug and Mustache is availables.

```bash
template: {
  engine: 'twig'
}
```
### storage
In this section, you can specify the path to the storage folder.
```bash
storage: 'path/to/folder'

```

### cache
In this section, you can specify the way the cache is kept and the lifetime of the cache. Currently only the file method is available.

```bash
cache: {
  engine: 'file',
  expire: 3600
}

```
### log
In this section you can specify the location of the file for storing logs.
```bash
log: {
  filename: 'error.log'
},
```
### mail
In this section, you can specify settings for sending mail through the class [mail](/api/#mail).
```bash
mail: {
  service: 'gmail',
  user: 'test@test.com',
  password: ''
}
```
### plugins
In this section, you can connect plugins.

```bash

plugins: ['@rapin/typeorm', '@rapin/typeorm-auth', ...]

```