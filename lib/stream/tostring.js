/*!
 * giveme
 * Copyright(c) 2018 Benoît Claveau <benoit.claveau@gmail.com>
 * MIT Licensed
 */

"use strict";

/* exemple
return stream.pipe(new ToBuffer()).then(items => {
    expect(item.length).to.be(0);
});
*/

const ToArray = require("./toarray");

class ToString extends ToArray {
    constructor() {
        super();
    };

    onFinish(resolve, reject) {
        resolve(Buffer.concat(this._data).toString());
    };
};

exports = module.exports = ToString;