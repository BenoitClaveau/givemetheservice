/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */
 
"use strict";

class StringService {

    static dashToCamelCase(text) {
		if (!text) return text;
    	return text.toLowerCase().replace(/-(.)/g, (match, group1) => {
        	return group1.toUpperCase();
    	});
	}

	static camelCaseToDash(text) {
		if (!text) return text;
    	return text.replace(/([a-z|0-9])([A-Z])/g, '$1-$2').toLowerCase();
	}

	static capitalizeFirstLetter(text) {
		if (!text) return text;
		if (!text.length) return text;
		text = text.toLowerCase();
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
}

exports = module.exports = StringService;