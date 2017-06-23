'use strict';

module.exports = {
  'rule-empty-line-before': [
    'always',
    {
      except: ['after-single-line-comment', 'inside-block-and-after-rule'],
      ignore: ['after-comment', 'inside-block'],
    },
  ],
};
