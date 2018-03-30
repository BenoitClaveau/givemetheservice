# Give Me The Service

Give me the service is a ES6 dependency injection container for OOP.

 [![NPM][npm-image]][npm-url]
 [![Build Status][travis-image]][travis-url]
 [![Coverage Status][coveralls-image]][coveralls-url]
 [![NPM Download][npm-image-download]][npm-url]
 [![Dependencies Status][david-dm-image]][david-dm-url]

```shell
npm install givemetheservice --save
```

# Features

  * [Services](#services) 
  * [Dependency injection](#di)
  * [Configuration](#config)
  
## Services
<a name="service"/>

Develop your own service in a separate file. Your don't need to instanciate it. GiveMeTheService [DI](#di) do that job. If you use another service just inject it in your constructor.

> What is the main avantage to use DI ?
>
> You could easily override any service. Unit testing will be easy.

```giveme.json
{
    "services": [
        { "name": "<alias>", "location": "<module name|filepath>"},
        { "name": "request", "location": "request"},
        { "name": "service", "location": "./service"}
    ]
}
```

<a name="di"/>
## Dependency injection

Just declare the service name in your constructor.
Injected services are created as singleton.

```services/user.js
class UserService {
    constructor(config)
```

GiveMeTheService will create your service with its dependencies.

### Lifecycle

1. inject
1. create()
1. mount()
1. unmount()

<a name="config"/>
## giveme.json

GiveMeTheService can be configure via giveme.json. 
  
## Test

To run our tests, clone the Qwebs repo and install the dependencies.

```bash
$ git clone https://github.com/BenoitClaveau/givemetheservice --depth 1
$ cd givemetheservice
$ npm install
$ cd tests
$ node.exe "../node_modules/mocha/bin/mocha" .
```

[npm-image]: https://img.shields.io/npm/v/givemetheservice.svg
[npm-image-download]: https://img.shields.io/npm/dm/givemetheservice.svg
[npm-url]: https://npmjs.org/package/givemetheservice
[travis-image]: https://travis-ci.org/BenoitClaveau/givemetheservice.svg?branch=master
[travis-url]: https://travis-ci.org/BenoitClaveau/givemetheservice
[coveralls-image]: https://coveralls.io/repos/BenoitClaveau/givemetheservice/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/BenoitClaveau/givemetheservice?branch=master
[david-dm-image]: https://david-dm.org/BenoitClaveau/givemetheservice/status.svg
[david-dm-url]: https://david-dm.org/BenoitClaveau/givemetheservice
