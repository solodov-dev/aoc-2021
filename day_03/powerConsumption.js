const gamma = require('./gamma.js');

module.exports = (input) => {
    const g = parseInt(gamma(input), 2);
    const e = ~g;
    return g * e;
}


