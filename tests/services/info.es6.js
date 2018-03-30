/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

class InfoService {
	constructor() {	
	};
	
	whoiam() {
		return "I'm Info service.";
	};

	helloworld() {
		return "Hello world.";
	};
}

exports = module.exports = InfoService;