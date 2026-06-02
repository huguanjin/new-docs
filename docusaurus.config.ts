import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = process.env.SITE_URL || 'https://docs.newapi.pro';

const plugins: Config['plugins'] = [];

try {
  plugins.push([
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en', 'zh', 'fr', 'ja', 'ru', 'vi'],
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      docsRouteBasePath: 'docs',
      searchResultLimits: 8,
      searchResultContextMaxLength: 50,
    },
  ]);
} catch {
  // Search plugin optional — site works without it
}

const config: Config = {
  title: 'New API',
  tagline: 'Next-Generation LLM Gateway and AI Asset Management System',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'QuantumNous',
  projectName: 'new-api',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN', 'zh-TW', 'fr', 'ja', 'ru', 'vi'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
      'zh-CN': {label: '简体中文', direction: 'ltr', htmlLang: 'zh-CN'},
      'zh-TW': {label: '繁體中文', direction: 'ltr', htmlLang: 'zh-TW'},
      fr: {label: 'Français', direction: 'ltr', htmlLang: 'fr-FR'},
      ja: {label: '日本語', direction: 'ltr', htmlLang: 'ja-JP'},
      ru: {label: 'Русский', direction: 'ltr', htmlLang: 'ru-RU'},
      vi: {label: 'Tiếng Việt', direction: 'ltr', htmlLang: 'vi-VN'},
    },
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'New API, LLM gateway, AI API proxy, OpenAI, Claude, Gemini, API management, multi-model',
      },
    },
    {
      tagName: 'meta',
      attributes: {name: 'robots', content: 'index, follow'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/`},
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/admin/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins,

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {name: 'description', content: 'Official documentation for New API — unified LLM gateway supporting OpenAI, Claude, Gemini and 40+ providers.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'New API Docs'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'New API',
      logo: {
        alt: 'New API Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'navbar.docs',
        },
        {
          to: '/api-reference',
          label: 'navbar.api',
          position: 'left',
        },
        {to: '/blog', label: 'navbar.blog', position: 'left'},
        {
          href: 'https://github.com/QuantumNous/new-api',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/admin',
          label: 'navbar.admin',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'footer.docs',
          items: [
            {label: 'footer.gettingStarted', to: '/docs/getting-started/installation'},
            {label: 'footer.features', to: '/docs/guide/features'},
            {label: 'footer.api', to: '/api-reference'},
          ],
        },
        {
          title: 'footer.community',
          items: [
            {label: 'GitHub', href: 'https://github.com/QuantumNous/new-api'},
            {label: 'Apifox Docs', href: 'https://ppf3lcwzqr.apifox.cn/'},
          ],
        },
        {
          title: 'footer.more',
          items: [
            {label: 'footer.blog', to: '/blog'},
            {label: 'Docker Hub', href: 'https://hub.docker.com/r/calciumion/new-api'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuantumNous / New API. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'go'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
