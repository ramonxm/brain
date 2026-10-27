import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// Each top-level navbar section has its own sidebar, starting with an overview
// page (`<section>/index.md`). Category `key`s keep the i18n translation keys
// stable even if the Portuguese labels change — see
// i18n/en/docusaurus-plugin-content-docs/current.json.

type Category = {
  key: string;
  label: string;
  description: string;
  items: SidebarsConfig[string];
};

const category = ({ key, label, description, items }: Category) => ({
  type: "category" as const,
  key,
  label,
  collapsed: false,
  link: { type: "generated-index" as const, slug: `/category/${key}`, description },
  items,
});

const sidebars: SidebarsConfig = {
  conceptsSidebar: [
    "concepts/index",
    category({
      key: "concepts-fundamentals",
      label: "Fundamentos",
      description: "Análise de complexidade e organização da memória.",
      items: ["concepts/big-o-notation", "concepts/memory-stack-heap"],
    }),
    category({
      key: "concepts-mechanisms",
      label: "Mecanismos",
      description: "Políticas de acesso a dados e operações elementares.",
      items: ["concepts/fifo", "concepts/lifo", "concepts/swap"],
    }),
    category({
      key: "concepts-concurrency",
      label: "Concorrência",
      description: "Execução simultânea de tarefas.",
      items: ["concepts/thread"],
    }),
    category({
      key: "concepts-architecture",
      label: "Arquitetura",
      description: "Modelos de arquitetura e execução de software.",
      items: ["concepts/serverless"],
    }),
  ],

  dataStructuresSidebar: [
    "data-structures/index",
    category({
      key: "data-structures-linear",
      label: "Estruturas Lineares",
      description: "Estruturas que organizam elementos em sequência.",
      items: [
        "data-structures/array",
        "data-structures/linked-list",
        "data-structures/stack",
        "data-structures/queue",
      ],
    }),
    category({
      key: "data-structures-trees",
      label: "Árvores",
      description: "Estruturas hierárquicas formadas por nós.",
      items: ["data-structures/binary-tree"],
    }),
  ],

  algorithmsSidebar: [
    "algorithms/index",
    category({
      key: "algorithms-sorting",
      label: "Ordenação",
      description: "Algoritmos para colocar coleções em ordem.",
      items: [
        "algorithms/sorting/bubble-sort",
        "algorithms/sorting/selection-sort",
        "algorithms/sorting/merge-sort",
        "algorithms/sorting/quick-sort",
      ],
    }),
    category({
      key: "algorithms-search",
      label: "Busca",
      description: "Algoritmos para localizar elementos em coleções.",
      items: ["algorithms/search/binary-search"],
    }),
    category({
      key: "algorithms-graphs",
      label: "Grafos",
      description: "Algoritmos para percorrer e analisar grafos.",
      items: ["algorithms/graph/breadth-first-search"],
    }),
    category({
      key: "algorithms-paradigms",
      label: "Paradigmas",
      description: "Estratégias gerais para projetar algoritmos.",
      items: ["algorithms/greedy/index"],
    }),
    {
      type: "category",
      key: "algorithms-contests",
      label: "Programação Competitiva",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "/category/algorithms-contests",
        description: "Soluções comentadas de problemas do LeetCode e do AtCoder.",
      },
      items: [
        {
          type: "category",
          key: "algorithms-contests-leetcode",
          label: "LeetCode",
          items: [
            "algorithms/contests/leetcode/two-sum",
            "algorithms/contests/leetcode/single-number",
            "algorithms/contests/leetcode/roman-to-integer",
            "algorithms/contests/leetcode/sort-list",
            "algorithms/contests/leetcode/construct-binary-tree-from-preorder-and-inorder-traversal",
          ],
        },
        {
          type: "category",
          key: "algorithms-contests-atcoder",
          label: "AtCoder",
          items: [
            "algorithms/contests/atcoder/abc156",
            "algorithms/contests/atcoder/abc158",
            "algorithms/contests/atcoder/abc175",
          ],
        },
      ],
    },
  ],

  topicsSidebar: [
    "topics/index",
    {
      type: "category",
      key: "topics-aws",
      label: "AWS",
      collapsed: false,
      link: { type: "doc", id: "topics/aws/index" },
      items: ["topics/aws/regions", "topics/aws/iam", "topics/aws/policies"],
    },
    category({
      key: "topics-database",
      label: "Banco de Dados",
      description: "Sistemas gerenciadores, modelo relacional e SQL.",
      items: [
        "topics/database/definitions",
        "topics/database/relational-database",
        "topics/database/sql",
      ],
    }),
  ],
};

export default sidebars;
