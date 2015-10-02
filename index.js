'use strict';

var readFile = require('fs').readFileSync;
// var fixRules = require('./lib/utils').fixRules;

var eslintRules = {};

try {
  var contents = readFile('./node_modules/node-style-guide/.eslintrc', 'utf-8');
  eslintRules = JSON.parse(contents || {});
  // eslintRules = fixRules(eslintRules);
} catch (err) {
  console.error(err);
  console.error('Unable to load node-style-guide/.eslintrc');
  process.exit(1);
}

module.exports = eslintRules;
