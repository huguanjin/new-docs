import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const APIFOX_URL = 'https://ppf3lcwzqr.apifox.cn/';

export default function ApiReference(): ReactNode {
  const relaySpec = useBaseUrl('/openapi/relay.json');
  const mgmtSpec = useBaseUrl('/openapi/api.json');

  return (
    <Layout
      title="API Reference"
      description="Interactive API reference for New API — powered by Apifox and OpenAPI specifications.">
      <main style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - var(--ifm-navbar-height))'}}>
        <div className="container margin-vert--md" style={{flexShrink: 0}}>
          <h1>
            <Translate id="api.title">API Reference</Translate>
          </h1>
          <p>
            <Translate id="api.description">
              Interactive API documentation powered by Apifox. Download OpenAPI specs for offline use.
            </Translate>
          </p>
          <div style={{marginBottom: '0.5rem'}}>
            <a className="button button--primary button--sm" href={APIFOX_URL} target="_blank" rel="noopener noreferrer">
              <Translate id="api.openNewTab">Open in New Tab</Translate>
            </a>
            <a className="button button--secondary button--sm margin-left--sm" href={relaySpec} download>
              Relay API (.json)
            </a>
            <a className="button button--secondary button--sm margin-left--sm" href={mgmtSpec} download>
              Management API (.json)
            </a>
          </div>
        </div>
        <iframe
          title="Apifox API Documentation"
          src={APIFOX_URL}
          style={{
            flex: 1,
            width: '100%',
            border: 'none',
            borderTop: '1px solid var(--ifm-color-emphasis-300)',
          }}
        />
      </main>
    </Layout>
  );
}
