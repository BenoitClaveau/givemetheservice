/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const Injector = require('../lib/injector');

describe("injector", () => {
    it("inject & resolve", async () => {
        const injector = new Injector({ root: __dirname });
        await injector.inject("info", `${__dirname}/services/info.es6`);
        const info = await injector.resolve("info");

        expect(info).to.be.ok();
        expect(info.whoiam()).to.be("I'm Info service.");
    });

    it("inject & load", async () => {
        const injector = new Injector({ root: __dirname });
        await injector.inject("info", `${__dirname}/services/info.es6`);
        await injector.createAll();
        await injector.mountAll();

        let info = await injector.resolve("info");
        expect(info).to.be.ok();
        expect(info.whoiam()).to.be("I'm Info service.");
    });

    it("inject & load", async () => {
        const injector = new Injector({ root: __dirname });
        await injector.inject("info", `${__dirname}/services/info.mount.es6`);
        await injector.createAll();
        await injector.mountAll();

        let info = await injector.resolve("info");
        expect(info).to.be.ok();
        expect(info.whoiam()).to.be("I'm Info service.");
    });

    it("try to inject es5", async () => {
        const injector = new Injector({ root: __dirname });
        await injector.inject("info", "./services/info.es5");
        await injector.createAll();
        await injector.mountAll();

        let info = await injector.resolve("info");
        expect(info instanceof require(`${__dirname}/services/info.es5`)).to.be(true);
    });

    it("try to inject cyclic reference", async () => {
        try {
            const injector = new Injector({ root: __dirname });
            await injector.inject("info1", `${__dirname}/services/info1`);
            await injector.inject("info2", `${__dirname}/services/info2`);
            await injector.createAll();
            await injector.mountAll();
            throw new Error("Fail.");
        }
        catch (error) {
            expect(error.template).to.be("Cyclic reference for service ${service} in ${location}.");
        }
    });

    it("try to inject non exisiting module", async () => {
        try {
            const injector = new Injector({ root: __dirname });
            injector.inject("dummy", `${__dirname}/services/dummy`);
            await injector.createAll();
            await injector.mountAll();
            throw new Error("Fail.");
        }
        catch (error) {
            expect(error.template).to.be("Error on require ${location}.");
        }
    });
});