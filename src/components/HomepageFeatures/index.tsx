import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Algoritmos Avançados',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Domine algoritmos essenciais de ordenação, busca e otimização com exemplos
        práticos e análises detalhadas de complexidade. Aprenda a escolher a melhor
        solução para cada cenário.
      </>
    ),
  },
  {
    title: 'Estruturas de Dados Eficientes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore implementações modernas de estruturas como árvores, grafos, tabelas hash
        e muito mais. Entenda quando e como aplicá-las para maximizar o desempenho
        de suas aplicações.
      </>
    ),
  },
  {
    title: 'Fundamentos da Computação',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Aprofunde-se em conceitos cruciais como análise assintótica, paradigmas de
        programação, recursão e otimização. Base sólida para se tornar um
        desenvolvedor mais completo.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
