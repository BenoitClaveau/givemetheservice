/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
const process = require("process");
const Injector = require(`./injector`);

class GiveMeTheService {

    constructor(options = {}) {
        let root = process.cwd(); // execution folder
        if (options.dirname) root = options.dirname;
        
        const injector = this.injector = new Injector({ root });
        injector.inject("giveme", this);
        injector.inject("injector", this.injector);
    };

    async load() {
        await this.createAll();
        await this.mountAll();
    }

    async createAll() {
        await this.injector.createAll();
    }

    async mountAll() {
        await this.injector.mountAll();
    }

    async unload() {
        await this.injector.unloadAll();
    }

    inject(name, location, options) {
        return this.injector.inject(name, location, options);
    };

    async resolve(name, options) {
        return await this.injector.resolve(name, options);
    };

    contains(name) {
        return this.injector.contains(name);
    };
};

exports = module.exports = GiveMeTheService;
