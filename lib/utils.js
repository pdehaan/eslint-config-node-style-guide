'use strict';

var readFileSync = require('fs').readFileSync;

module.exports = {
  fixRules: fixRules
};

// Some weird hackery since you can't `require()` an .eslintrc file directly
// since it tries to parse it as *.js instead of *.json.
function loadConfig(file) {
  var entryPoint = require.resolve(file);
  var data = readFileSync(entryPoint, 'utf-8');
  // NOTE: Not particularly "elegant" as this could break on JSON comments.
  return JSON.parse(data);
}

function fixRules(config) {
  config.rules = config.rules || {};

  // TODO: Remove this when/if felixge/node-style-guide#71 is merged.
  // Rule 'space-in-brackets' was removed and replaced by: object-curly-spacing, array-bracket-spacing, computed-property-spacing
  deprecateRule(config.rules, 'space-in-brackets', ['object-curly-spacing', 'array-bracket-spacing', 'computed-property-spacing']);

  return config;
}

function deprecateRule(rules, oldRuleName, newRuleNames) {
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
