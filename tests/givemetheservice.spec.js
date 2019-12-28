/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const GiveMeTheService = require("../lib/givemetheservice");

describe("givemetheservice", () => {
    
    it("load", async () => {
        const giveme = new GiveMeTheService({ dirname: __dirname });
        await giveme.load();
        await giveme.unload();
    }).timeout(5000);
});