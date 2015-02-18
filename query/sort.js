var population = 'population';
var weights = require('pelias-suggester-pipeline').weights;

module.exports = [
  {
    '_script': {
      'file': 'population',
      'type': 'number',
      'order': 'desc'
    }
  },
  {
    '_script': {
      'params': {
        'weights': weights
      },
      'file': 'weights',
      'type': 'number',
      'order': 'desc'
    }
  }
];