import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.wrapper}>
          <Heading as="h1" className="hero__title">
            <Translate id="homepage.title" description="The title of the homepage">
              🧠 brain.xavier
            </Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="homepage.subtitle" description="The subtitle of the homepage">
             Anotações de estudos sobre algoritmos e estruturas de dados e conceitos de computação.
            </Translate>
          </p>
          <p className={styles.heroDescription}>
           
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/data-structures/array">
              <Translate id="homepage.start" description="The start button text">
                Começar
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
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>
            <div>🧠</div>
            <div className={styles.hiddenText} aria-hidden='true'>
              brain.xavier
            </div>
          </h1>
          <p className='hero__subtitle'>
            <Translate id='homePage.head.tagline'>
              Anotações de estudos sobre algoritmos e estruturas de dados e conceitos de computação.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'hero__button button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/data-structures/array')}
            >
              <Translate id='homePage.head.start'>Começar</Translate>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
