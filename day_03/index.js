const powerConsumption = require('./powerConsumption.js');

exports.default = [
  {
    title: 'Power consumption: ',
    result: (input) => powerConsumption(input)
  },
];

