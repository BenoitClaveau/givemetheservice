/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = require("./lib/givemetheservice");
module.exports.Client = require("./lib/services/client");
module.exports.Crypto = require("./lib/services/crypto");
module.exports.Event = require("./lib/services/event");
module.exports.FS = require("./lib/services/fs");
module.exports.JsonStream = require("./lib/services/json-stream");
module.exports.Json = require("./lib/services/json");
module.exports.Password = require("./lib/services/password");
module.exports.QJimp = require("./lib/services/qjimp");
module.exports.RepositoryFactory = require("./lib/services/repository-factory");
module.exports.String = require("./lib/services/string");
module.exports.Walk = require("./lib/services/walk");