import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
              to={useBaseUrl('docs/concepts/big-o-notation')}
            >
              <Translate id='homePage.head.start'>Começar</Translate>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
