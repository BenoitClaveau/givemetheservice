/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const GiveMeTheService = require("../../index");

require("process").on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

describe("Repository", () => {
    
    it("keys", async () => {
        let giveme = new GiveMeTheService({ dirname: __dirname, config: {} });
        await giveme.load();
        const repositoryFactory = await giveme.resolve("repository-factory");
        let repository = repositoryFactory.create(__dirname);
        var properties = Object.keys(repository);
        expect(properties.length).to.be(0);
    });
});