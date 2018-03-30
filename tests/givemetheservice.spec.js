/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const GiveMeTheService = require("../lib/givemetheservice");

require("process").on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

describe("givemetheservice", () => {
    
    it("load", async () => {
        const giveme = new GiveMeTheService({ dirname: __dirname });
        await giveme.load();
        const qjimp = await giveme.resolve("qjimp");
        await giveme.unload();

    }).timeout(5000);
});