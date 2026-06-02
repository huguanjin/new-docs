import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/docker',
        'getting-started/environment-variables',
        'getting-started/bt-panel',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      items: [
        'guide/features',
        'guide/models',
        'guide/authentication',
        'guide/billing',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/relay',
        'api/management',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'support/faq',
        'support/community',
      ],
    },
  ],
};

export default sidebars;
