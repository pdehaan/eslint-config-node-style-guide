'use strict';

var json = require('naked-json-require');

module.exports.deprecateRule = deprecateRule;
module.exports.fixRules = fixRules;
module.exports.loadConfig = loadConfig;

function loadConfig() {
  var eslintrcPath = require.resolve('node-style-guide/.eslintrc');
  return  json(eslintrcPath);
}

function deprecateRule(rules, oldRuleName, newRuleNames) {
  rules = rules || {};

  // Convert the `newRuleNames` argument to an array.
  if (! newRuleNames instanceof Array) {
    newRuleNames = [newRuleNames];
  }
  // If the `oldRuleName` exists in the config...
  if (!!rules[oldRuleName]) {
    // Loop over each of the 1..n `newRuleNames`...
    newRuleNames.forEach(function (newRuleName) {
      // ... and copy the old rule config to the new rule name.
      if (!rules[newRuleName]) {
        rules[newRuleName] = rules[oldRuleName];
      }
    });
  }
  // Delete the old, deprecated rule from the config object.
  delete rules[oldRuleName];
  return rules;
}

function fixRules(config) {
  // TODO: Remove this when/if felixge/node-style-guide#71 is merged.
  // Rule 'space-in-brackets' was removed and replaced by: object-curly-spacing, array-bracket-spacing, computed-property-spacing
  deprecateRule(config.rules, 'space-in-brackets', [
    'array-bracket-spacing',
    'computed-property-spacing',
    'object-curly-spacing'
  ]);

  return config;
}
