import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            <Translate id="homepage.title" description="The title of the homepage">
              Algoritmos e Estruturas de Dados
            </Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle" description="The subtitle of the homepage">
              Um guia completo sobre implementações, conceitos e boas práticas em programação
            </Translate>
          </p>
          <p className={styles.heroDescription}>
            <Translate id="homepage.description" description="The description of the homepage">
              Explore uma coleção organizada de recursos e exemplos práticos para aprofundar
              seus conhecimentos em computação e desenvolvimento de software.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              <Translate id="homepage.start" description="The start button text">
                Começar Agora
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
