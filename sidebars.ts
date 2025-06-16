import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  conceptsSidebar: [
    'concepts/big-o-notation',
    'concepts/serverless',
    'concepts/thread',
    'concepts/memory-stack-heap',
    'concepts/swap',
    'concepts/fifo',
    'concepts/lifo',
  ],

  dataStructuresSidebar: [
    'data-structures/array',
    'data-structures/stack',
    'data-structures/queue',
    'data-structures/binary-tree',
    'data-structures/linked-list',
  ],

  algorithmsSidebar: [
    'algorithms/sorting/bubble-sort',
    'algorithms/sorting/merge-sort',
    'algorithms/sorting/quick-sort',
    'algorithms/sorting/binary-search',
    {
      type: 'category',
      label: 'Contests',
      items: [
        'algorithms/contests/leetcode/two-sum',
        'algorithms/contests/leetcode/single-number',
        'algorithms/contests/leetcode/sort-list',
        'algorithms/contests/leetcode/roman-to-integer',
        'algorithms/contests/atcoder/abc156',
        'algorithms/contests/atcoder/abc158',
        'algorithms/contests/atcoder/abc175',
      ],
    },
  ],

  topicsSidebar: [
    {
      type: 'category',
      label: 'AWS',
      items: [
        'topics/aws/index',
        'topics/aws/regions',
        'topics/aws/iam',
        'topics/aws/policies',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        'topics/database/definitions',
        'topics/database/relational-database',
        'topics/database/sql',
      ],
    },
  ],
};

export default sidebars;
