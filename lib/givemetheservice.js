/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";
const path = require("path");
const Injector = require(`./injector`);
const { Error } = require("oups");

class GiveMeTheService {
    constructor(options = {}) {
        options.config = options.config || "./giveme.json";
        
        this.root = path.dirname(require.main.filename); //execution folder
        if (options.dirname) this.root = options.dirname;
        
        this.config = typeof options.config == "object" ? options.config : require(path.resolve(this.root, options.config))

        let injector = this.injector = new Injector();
        injector.inject("giveme", this);
        injector.inject("config", this.config);
        injector.inject("injector", this.injector);
        injector.inject("string", `${__dirname}/services/string`);
        injector.inject("fs", `${__dirname}/services/fs`);
        injector.inject("event", `${__dirname}/services/event`);
        injector.inject("json", `${__dirname}/services/json`);
        injector.inject("json-stream", `${__dirname}/services/json-stream`);
        injector.inject("qjimp", `${__dirname}/services/qjimp`);
        injector.inject("client", `${__dirname}/services/client`);
        injector.inject("walk", `${__dirname}/services/walk`);
        injector.inject("crypto", `${__dirname}/services/crypto`);
        injector.inject("password", `${__dirname}/services/password`);
        injector.inject("repository-factory", `${__dirname}/services/repository-factory`);
        injector.inject("services-loader", `${__dirname}/loaders/services`);
    };

    async load() {
        await this.injector.load();
    }

    async unload() {
        await this.injector.unload();
    }

    inject(name, location, options) {
        return this.injector.inject(name, location, options);
    };

    async resolve(name) {
        return await this.injector.resolve(name);
    };


};

exports = module.exports = GiveMeTheService;
