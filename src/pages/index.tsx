import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useAllDocsData } from "@docusaurus/plugin-content-docs/client";

import styles from "./index.module.css";

type SectionId = "concepts" | "data-structures" | "algorithms" | "topics";

type Section = {
  id: SectionId;
  title: string;
  description: string;
  highlights: { label: string; to: string }[];
  icon: ReactNode;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons: Record<SectionId, ReactNode> = {
  concepts: (
    <svg {...iconProps}>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.74V16h8v-1.26A7 7 0 0 0 12 2z" />
    </svg>
  ),
  "data-structures": (
    <svg {...iconProps}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  algorithms: (
    <svg {...iconProps}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6M18 15V6" />
      <path d="m15 9 3-3 3 3" />
    </svg>
  ),
  topics: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
};

function useSections(): Section[] {
  return [
    {
      id: "concepts",
      title: translate({ id: "homepage.sections.concepts.title", message: "Conceitos" }),
      description: translate({
        id: "homepage.sections.concepts.description",
        message: "Complexidade, memória, concorrência e os princípios por trás de todo algoritmo.",
      }),
      highlights: [
        { label: "Big O", to: "/docs/concepts/big-o-notation" },
        { label: "Stack & Heap", to: "/docs/concepts/memory-stack-heap" },
        { label: "Threads", to: "/docs/concepts/thread" },
      ],
      icon: icons.concepts,
    },
    {
      id: "data-structures",
      title: translate({
        id: "homepage.sections.dataStructures.title",
        message: "Estruturas de Dados",
      }),
      description: translate({
        id: "homepage.sections.dataStructures.description",
        message: "Arrays, listas, pilhas, filas e árvores — com o custo de cada operação.",
      }),
      highlights: [
        { label: "Array", to: "/docs/data-structures/array" },
        { label: "Linked List", to: "/docs/data-structures/linked-list" },
        { label: "Binary Tree", to: "/docs/data-structures/binary-tree" },
      ],
      icon: icons["data-structures"],
    },
    {
      id: "algorithms",
      title: translate({ id: "homepage.sections.algorithms.title", message: "Algoritmos" }),
      description: translate({
        id: "homepage.sections.algorithms.description",
        message: "Ordenação, busca, grafos, paradigmas e problemas de competição resolvidos.",
      }),
      highlights: [
        { label: "Quick Sort", to: "/docs/algorithms/sorting/quick-sort" },
        { label: "BFS", to: "/docs/algorithms/graph/breadth-first-search" },
        { label: "Two Sum", to: "/docs/algorithms/contests/leetcode/two-sum" },
      ],
      icon: icons.algorithms,
    },
    {
      id: "topics",
      title: translate({ id: "homepage.sections.topics.title", message: "Tópicos" }),
      description: translate({
        id: "homepage.sections.topics.description",
        message: "Computação em nuvem com AWS, bancos de dados relacionais e SQL.",
      }),
      highlights: [
        { label: "AWS IAM", to: "/docs/topics/aws/iam" },
        { label: "SQL", to: "/docs/topics/database/sql" },
        { label: "Regiões AWS", to: "/docs/topics/aws/regions" },
      ],
      icon: icons.topics,
    },
  ];
}

/** Counts published docs per section, excluding each section's overview page. */
function useDocCounts(): Record<SectionId, number> & { total: number } {
  const docs = useAllDocsData().default?.versions[0]?.docs ?? [];
  const counts = { concepts: 0, "data-structures": 0, algorithms: 0, topics: 0, total: 0 };
  for (const { id } of docs) {
    const section = id.split("/")[0] as SectionId;
    if (!(section in counts) || id === `${section}/index`) continue;
    counts[section] += 1;
    counts.total += 1;
  }
  return counts;
}

function Hero({ total }: { total: number }) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden />
      <div className={clsx("container", styles.heroInner)}>
        <img
          className={styles.heroLogo}
          src={useBaseUrl("/img/android-chrome-192x192.png")}
          alt=""
          width={72}
          height={72}
        />
        <Heading as="h1" className={styles.heroTitle}>
          brain<span className={styles.heroTitleAccent}>.xavier</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="homepage.hero.subtitle">
            Notas de estudo sobre algoritmos, estruturas de dados e fundamentos da computação —
            explicadas de forma direta, com código e análise de complexidade.
          </Translate>
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs/concepts">
            <Translate id="homepage.hero.cta">Começar a ler</Translate>
          </Link>
          <Link
            className={clsx("button button--lg", styles.buttonGhost)}
            href="https://github.com/ramonxm/brain"
          >
            GitHub
          </Link>
        </div>
        <ul className={styles.heroStats}>
          <li>
            <strong>{total}</strong>
            <span>
              <Translate id="homepage.hero.stats.articles">artigos</Translate>
            </span>
          </li>
          <li>
            <strong>4</strong>
            <span>
              <Translate id="homepage.hero.stats.sections">seções</Translate>
            </span>
          </li>
          <li>
            <strong>2</strong>
            <span>
              <Translate id="homepage.hero.stats.languages">idiomas</Translate>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}

function SectionCard({ section, count }: { section: Section; count: number }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{section.icon}</span>
        <span className={styles.cardCount}>
          <Translate id="homepage.sections.count" values={{ count }}>
            {"{count} artigos"}
          </Translate>
        </span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        <Link to={`/docs/${section.id}`} className={styles.cardTitleLink}>
          {section.title}
        </Link>
      </Heading>
      <p className={styles.cardDescription}>{section.description}</p>
      <ul className={styles.cardHighlights}>
        {section.highlights.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

function LearningPath() {
  const steps = [
    {
      to: "/docs/concepts/big-o-notation",
      title: translate({ id: "homepage.path.step1.title", message: "Notação Big O" }),
      text: translate({
        id: "homepage.path.step1.text",
        message: "Aprenda a linguagem usada para comparar soluções.",
      }),
    },
    {
      to: "/docs/data-structures",
      title: translate({ id: "homepage.path.step2.title", message: "Estruturas de Dados" }),
      text: translate({
        id: "homepage.path.step2.text",
        message: "Entenda como organizar dados e o custo de cada operação.",
      }),
    },
    {
      to: "/docs/algorithms",
      title: translate({ id: "homepage.path.step3.title", message: "Algoritmos" }),
      text: translate({
        id: "homepage.path.step3.text",
        message: "Ordenação, busca e grafos, passo a passo.",
      }),
    },
    {
      to: "/docs/category/algorithms-contests",
      title: translate({ id: "homepage.path.step4.title", message: "Prática" }),
      text: translate({
        id: "homepage.path.step4.text",
        message: "Aplique tudo em problemas reais do LeetCode e do AtCoder.",
      }),
    },
  ];

  return (
    <section className={styles.path}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.path.title">Por onde começar</Translate>
        </Heading>
        <p className={styles.sectionLead}>
          <Translate id="homepage.path.lead">
            Uma trilha sugerida para quem está começando — cada etapa se apoia na anterior.
          </Translate>
        </p>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.to}>
              <Link to={step.to} className={styles.step}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepText}>{step.text}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const sections = useSections();
  const counts = useDocCounts();

  return (
    <Layout
      description={translate({
        id: "homepage.meta.description",
        message:
          "Notas de estudo sobre algoritmos, estruturas de dados, conceitos de computação, AWS e bancos de dados.",
      })}
    >
      <Hero total={counts.total} />
      <main>
        <section className={styles.sections}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="homepage.sections.title">Explore o conteúdo</Translate>
            </Heading>
            <div className={styles.grid}>
              {sections.map((section) => (
                <SectionCard key={section.id} section={section} count={counts[section.id]} />
              ))}
            </div>
          </div>
        </section>
        <LearningPath />
      </main>
    </Layout>
  );
}
