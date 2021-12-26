const countInc = require('./count_inc.js');

exports.default = [
  {
    title: 'Increments',
    result: (input) => countInc(input),
  },
];

