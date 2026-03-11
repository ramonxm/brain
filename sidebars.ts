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
    {
      type: 'category',
      label: '💡 Fundamentos',
      items: [
        'concepts/big-o-notation',
        'concepts/memory-stack-heap',
      ],
    },
    {
      type: 'category',
      label: '🔄 Mecanismos',
      items: [
        'concepts/fifo',
        'concepts/lifo',
        'concepts/swap',
      ],
    },
    {
      type: 'category',
      label: '⚡ Concorrência',
      items: [
        'concepts/thread',
      ],
    },
    {
      type: 'category',
      label: '🏗️ Arquitetura',
      items: [
        'concepts/serverless',
      ],
    },
  ],

  dataStructuresSidebar: [
    {
      type: 'category',
      label: '📦 Estruturas Básicas',
      items: [
        'data-structures/array',
        'data-structures/binary-tree',
        'data-structures/linked-list',
      ],
    },
    {
      type: 'category',
      label: '📚 Pilhas e Filas',
      items: [
        'data-structures/stack',
        'data-structures/queue',
      ],
    },
  ],

  algorithmsSidebar: [
    {
      type: 'category',
      label: '🔄 Algoritmos de Ordenação',
      items: [
        'algorithms/sorting/bubble-sort',
        'algorithms/sorting/selection-sort',
        'algorithms/sorting/merge-sort',
        'algorithms/sorting/quick-sort',
      ],
    },
    {
      type: 'category',
      label: '🔍 Algoritmos de Busca',
      items: [
        'algorithms/search/binary-search',
      ],
    },
    {
      type: 'category',
      label: '🕸️ Algoritmos de Grafo',
      items: [
        'algorithms/graph/breadth-first-search',
      ],
    },
    {
      type: 'category',
      label: '🔧 Algoritmos Ganancioso',
      items: [
        'algorithms/greedy/greedy-index',
      ],
    },
    {
      type: 'category',
      label: '🏆 Problemas de Competição',
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
