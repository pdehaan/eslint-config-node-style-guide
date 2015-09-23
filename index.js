'use strict';

var fs = require('fs');

function loadJson(file) {
  var entryPoint = require.resolve(file);
  var data = fs.readFileSync(entryPoint, 'utf-8');
  return JSON.parse(data);
}

var eslintRules = loadJson('node-style-guide/.eslintrc');
eslintRules.extends = 'eslint:recommended';

module.exports = eslintRules;
