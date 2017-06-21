const scssRules = require('./rules/scss');
const coreRules = require('./rules/core');
const orderRules = require('./rules/order');

module.exports = {
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: Object.assign({}, coreRules, orderRules, scssRules, {
        'at-rule-blacklist': ['debug'],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else']
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'at-root',
                    'content',
                    'debug',
                    'each',
                    'else',
                    'error',
                    'extend',
                    'for',
                    'function',
                    'if',
                    'include',
                    'mixin',
                    'return',
                    'warn',
                    'while'
                ]
            }
        ]
    })
};
