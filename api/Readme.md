---
sidebarDepth: 3
sidebar: auto
---
# Api

## Context

In each controller or model, you can access auxiliary classes through property this.$context. There you can find the classes below.

### load

For load controllers, models, views. configs and languages

### cache

Class to work with cache

### config

Class for getting and setting configs

### crypto

Class for provides cryptographic functionality

### error

Class for working with errors

### file

Class for processing received files

### image

Class for working with images

### language

Class for receiving translations

### log

Class to work with logs

### mail

Class for sending mail through the package "nodemailer"

### pagination

Class for creating pagination from the list of item

### request

Class for retrieving request data

### response

Class for setting data for respons

### style

Class to work with styles


## Config file

All basic settings are in the file rapin.config.ts. This file allows editing default setting and adding plugins. 

### style
In this section, you can set the stylesheet engine. Currently only postcss is available.

```js
style: {
  engine: 'postcss'
}
```
### template
In this section, you can set the template engine. Currently Twig, Pug and Mustache is availables.

```js
template: {
  engine: 'twig'
}
```
### storage
In this section, you can specify the path to the storage folder.
```js
storage: 'path/to/folder'

```

### cache
In this section, you can specify the way the cache is kept and the lifetime of the cache. Currently only the file method is available.

```js
cache: {
  engine: 'file',
  expire: 3600
}

```
### log
In this section you can specify the location of the file for storing logs.
```js
log: {
  filename: 'error.log'
},
```
### mail
In this section, you can specify settings for sending mail through the class [mail](/api/#mail).
```js
mail: {
  service: 'gmail',
  user: 'test@test.com',
  password: ''
}
```
### plugins
In this section, you can connect plugins.

```js

plugins: ['@rapin/typeorm', '@rapin/typeorm-auth', ...]

```