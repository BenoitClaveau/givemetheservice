/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

const { UndefinedError } = require("oups");
const path = require("path");

class ServicesLoader {

    constructor(giveme, fs, config) {
        if (!giveme) throw new UndefinedError("givemetheservice");
        if (!fs) throw new UndefinedError("fs");
        if (!config) throw new UndefinedError("config");
        this.giveme = giveme;
        this.fs = fs;
        this.config = config;
        this.services = [];
        
        if (config.services == null || /false/ig.test(config.services)) return;

        let services = [];
        if (typeof config.services == "string") {   // config.services contains an relative path to a file.json.
            const absolute = path.resolve(giveme.root, config.services);
            const dir = path.dirname(absolute);
            this.relative = path.relative(giveme.root, dir);
            const file = fs.loadSync(config.services);
            if (!file) return;
            services = file.services;
        }
        else if (typeof config.services == "object") { // config.services contains on object that descrive services.
            this.relative = "./";
            services = config.services;
        }
        else throw new Error("Unsupported type.");

        for (let e of services) {
            const location = e.location[0] == "." ? path.resolve(giveme.root, this.relative, e.location) : e.location;
            const service = giveme.inject(e.name, location, e.options);
            this.services.push(service);
        }
    }

    async mount() {
        const { services } = this;
        for (let service of services)
            await service.import();

        for (let service of services)
            await service.create();

        for (let service of services)
            await service.mount();
    };
};

exports = module.exports = ServicesLoader;
