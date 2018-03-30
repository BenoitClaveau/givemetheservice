"use strict";

const http = require("http");
const GiveMeTheService = require('../../lib/givemetheservice');

let giveme = new GiveMeTheService({});
await giveme.inject("app", "./applicationservice");
giveme.get('/', "app", "getHelloWorld");

giveme.load().then(() => {
    http.createServer((request, response) => {
        return giveme.invoke(request, response).catch(error => {
            console.log(error);
        });
    }).listen(1337, "127.0.0.1");
}).catch(error => {
    console.log(error);
});