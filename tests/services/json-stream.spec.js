/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const GiveMeTheService = require("../../index");
const fs = require("fs");
const { FromArray } = require("../../index");

require("process").on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

describe("json-stream", () => {

    it("parse array", async () => {
        let giveme = new GiveMeTheService({ dirname: __dirname, config: {}});
        await giveme.load();
        const $json = await giveme.resolve("json-stream");

        fs.createReadStream(`${__dirname}/../data/npm.array.json`)
            .pipe($json.parse()).on("data", chunk => {
                expect(chunk).property("id");
                expect(chunk).property("key");
            });
    }).timeout(5000)

    it("parse object", async () => {
        let giveme = new GiveMeTheService({ dirname: __dirname, config: {} });
        await giveme.load();
        const $json = await giveme.resolve("json-stream");

        fs.createReadStream(`${__dirname}/../data/npm.object.json`)
            .pipe($json.parse()).on("data", chunk => {
                expect(chunk.offset).to.be(0);
                expect(chunk.rows.length).to.be(4028);
                expect(chunk.total_rows).to.be(4028);
            });
    }).timeout(5000)
});