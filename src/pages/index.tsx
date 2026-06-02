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
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.png" alt="New API" className={styles.heroLogo} />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            <Translate id="homepage.getStarted">Get Started</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/api-reference"
            style={{marginLeft: '0.5rem'}}>
            <Translate id="homepage.apiReference">API Reference</Translate>
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/QuantumNous/new-api"
            style={{marginLeft: '0.5rem'}}>
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Official documentation for New API — unified LLM gateway supporting OpenAI, Claude, Gemini and 40+ AI providers.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
