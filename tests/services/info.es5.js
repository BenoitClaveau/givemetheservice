/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

function InfoService() {
}

InfoService.prototype.whoiam = function() {
	return "I'm Info service.";
};

InfoService.prototype.getInfo = function(request, response) {
	return {
		whoiam: this.whoiam()
	};
};

InfoService.prototype.getMessage = function(request, response) {
	return {
		text: "hello world"
	};
};

exports = module.exports = InfoService;