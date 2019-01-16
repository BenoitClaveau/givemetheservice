/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
const path = require("path");
const Injector = require(`./injector`);

class GiveMeTheService {

    constructor(options = {}) {
        this.root = path.dirname(require.main.filename); // execution folder
        if (options.dirname) this.root = options.dirname;
        
        let injector = this.injector = new Injector();
        injector.inject("giveme", this);
        injector.inject("injector", this.injector);
    };

    async load() {
        await this.importAll();
        await this.createAll();
        await this.mountAll();
    }

    async importAll() {
        await this.injector.importAll();
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
};

exports = module.exports = GiveMeTheService;
