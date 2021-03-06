'use strict';

module.exports = {
    'scss/at-else-closing-brace-newline-after': null,
    'scss/at-else-closing-brace-space-after':  null,
    'scss/at-else-empty-line-before':  null,

    'scss/at-extend-no-missing-placeholder': null,

    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-import-partial-extension-whitelist': null,

    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    // Need investigation https://github.com/kristerkari/stylelint-scss/issues/94
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',

    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-whitespace-inside': 'always',

    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': null,

    'scss/media-feature-value-dollar-variable': null,

    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': null,
    'scss/operator-no-unspaced': true,

    'scss/partial-no-import': null,

    'scss/selector-no-redundant-nesting-selector': true
};
