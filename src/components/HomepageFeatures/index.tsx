import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string | JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.features.algorithms.title" description="Title for algorithms feature">
        Algoritmos Avançados
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate id="homepage.features.algorithms.description" description="Description for algorithms feature">
          Domine algoritmos essenciais de ordenação, busca e otimização com exemplos
          práticos e análises detalhadas de complexidade. Aprenda a escolher a melhor
          solução para cada cenário.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.datastructures.title" description="Title for data structures feature">
        Estruturas de Dados Eficientes
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate id="homepage.features.datastructures.description" description="Description for data structures feature">
          Explore implementações modernas de estruturas como árvores, grafos, tabelas hash
          e muito mais. Entenda quando e como aplicá-las para maximizar o desempenho
          de suas aplicações.
        </Translate>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.concepts.title" description="Title for computing concepts feature">
        Fundamentos da Computação
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate id="homepage.features.concepts.description" description="Description for computing concepts feature">
          Aprofunde-se em conceitos cruciais como análise assintótica, paradigmas de
          programação, recursão e otimização. Base sólida para se tornar um
          desenvolvedor mais completo.
        </Translate>
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
