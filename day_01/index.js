const countInc = require('./count_inc.js');
const triplets = require('./triplets.js');

exports.default = [
  {
    title: 'Increments',
    result: (input) => countInc(input),
  },
  {
    title: 'Increments by triplet window',
    result: (input) => countInc(triplets(input)),
  },
];

