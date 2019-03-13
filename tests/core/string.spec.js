/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
"use strict";

const expect = require("expect.js");
const {
    camelCaseToDash,
    dashToCamelCase,
    capitalizeFirstLetter
} = require('../../lib/string');

describe("StringUtils", () => {

    it("camelCaseToDash", () => {
        let res = camelCaseToDash("$testModel");
        expect(res).to.be("$test-model");
    });

    it("camelCaseToDash", () => {
        let res = camelCaseToDash("oauth2Model");
        expect(res).to.be("oauth2-model");
    });

    it("camelCaseToDash", () => {
        let res = dashToCamelCase("test-model");
        expect(res).to.be("testModel");
    });

    it("camelCaseToDash", () => {
        let res = dashToCamelCase("oauth2-model");
        expect(res).to.be("oauth2Model");
    });

    it("capitalizeFirstLetter", () => {
        let res = capitalizeFirstLetter("oauth2 model");
        expect(res).to.be("Oauth2 model");
    });

    it("capitalizeFirstLetter", () => {
        let res = capitalizeFirstLetter("");
        expect(res).to.be("");
    });

    it("capitalizeFirstLetter property", () => {
        let res = capitalizeFirstLetter("mon texte");
        expect(res).to.be("Mon texte");
    });
});
