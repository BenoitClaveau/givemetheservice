/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const GiveMeTheService = require("../../lib/givemetheservice");

describe("ServicesLoader", () => {
    
    it("load", async () => {
        let giveme = new GiveMeTheService({ dirname: __dirname, config: { services: "./services.json" }});
        await giveme.load();
        let injector = await giveme.resolve("injector");
        expect(Object.entries(injector.container).length).to.be(16);
    });
});
