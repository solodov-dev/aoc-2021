const sub = require('./sub.js');
const sub2 = require('./sub2.js');

exports.default = [
  {
    title: 'Navigate',
    result: (input) => sub.sail(input)
  },
  {
    title: 'Aim',
    result: (input) => sub2.sail(input)
  },
];

