import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
  emoji: string;
};

const FeatureList: FeatureItem[] = [
  {
    emoji: '🚀',
    title: <Translate id="features.gateway.title">Unified LLM Gateway</Translate>,
    description: (
      <Translate id="features.gateway.desc">
        Aggregate 40+ AI providers behind a single OpenAI-compatible API with smart routing and automatic retry.
      </Translate>
    ),
  },
  {
    emoji: '💰',
    title: <Translate id="features.billing.title">Billing & Quota</Translate>,
    description: (
      <Translate id="features.billing.desc">
        Track usage, manage quotas, integrate payments, and configure flexible billing policies for your organization.
      </Translate>
    ),
  },
  {
    emoji: '🌍',
    title: <Translate id="features.i18n.title">Multi-language</Translate>,
    description: (
      <Translate id="features.i18n.desc">
        Documentation and dashboard available in English, Chinese, French, Japanese, Russian, and Vietnamese.
      </Translate>
    ),
  },
  {
    emoji: '🔐',
    title: <Translate id="features.security.title">Enterprise Security</Translate>,
    description: (
      <Translate id="features.security.desc">
        OAuth, OIDC, WebAuthn, token grouping, rate limiting, and comprehensive access control.
      </Translate>
    ),
  },
  {
    emoji: '📊',
    title: <Translate id="features.dashboard.title">Analytics Dashboard</Translate>,
    description: (
      <Translate id="features.dashboard.desc">
        Visual console with usage statistics, channel monitoring, and detailed request logs.
      </Translate>
    ),
  },
  {
    emoji: '🔄',
    title: <Translate id="features.convert.title">Format Conversion</Translate>,
    description: (
      <Translate id="features.convert.desc">
        Seamlessly convert between OpenAI, Claude Messages, and Google Gemini formats.
      </Translate>
    ),
  },
];

function Feature({emoji, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img">{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
