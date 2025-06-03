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
    'concepts/index',
    'concepts/big-o-notation',
    'concepts/fifo',
    'concepts/lifo',
    'concepts/memory-stack-heap',
    'concepts/swap',
    'concepts/thread',
  ],

  dataStructuresSidebar: [
    'data-structures/array',
    'data-structures/stack/index',
    'data-structures/queue/index',
    'data-structures/binary-tree/index',
  ],

  algorithmsSidebar: [
    'algorithms/sorting/bubble-sort',
    'algorithms/sorting/merge-sort',
    'algorithms/sorting/quick-sort',
    'algorithms/sorting/binary-search',
    'algorithms/contests/leetcode/two-sum',
    'algorithms/contests/leetcode/single-number',
    'algorithms/contests/leetcode/sort-list',
    'algorithms/contests/leetcode/roman-to-integer',
    'algorithms/contests/atcoder/abc156',
    'algorithms/contests/atcoder/abc158',
    'algorithms/contests/atcoder/abc175',
  ],
};

export default sidebars;
