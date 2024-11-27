'use strict';

const iface = {
    m1: x => [x],
        m2: function (x, y) {
    return [x, y];
},
    m3(x, y, z) {
    return [x, y, z];
}
};

const methods = (iface) => {
    const   keys = [];
    for(const key in iface) {
        if (typeof iface[key] === 'function') {
            keys.push(key , iface[key].length);
        }
    }
    return keys;

};

module.exports = { methods };