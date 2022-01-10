const gamma = require('./gamma.js');
const epsylon = require('./epsylon.js');

module.exports = (input) => {
    const g = parseInt(gamma(input), 2);
    const e = parseInt(epsylon(gamma(input)), 2);
    return g * e;
}


