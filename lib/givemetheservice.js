/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
const Injector = require(`./injector`);

class GiveMeTheService {

    constructor() {
        let injector = this.injector = new Injector();
        injector.inject("giveme", this);
        injector.inject("injector", this.injector);
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
