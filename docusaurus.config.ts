import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'crashRT memo',
  tagline: '知見の共有など',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://memo.crashrt.work',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crashRT', // Usually your GitHub org/user name.
  projectName: 'crashrt-memo', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  scripts: [
    '/js/font.js'
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/crashRT/crashrt-memo/tree/main',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
          gtag: {
          trackingID: 'G-TWEWNG86TM',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'crashRT-memo',
      logo: {
        alt: 'My Site Logo',
        src: 'img/crashrt_alpha.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'slideSidebar',
          position: 'left',
          label: '勉強会資料',
        },
        {
          type: 'docSidebar',
          sidebarId: 'itInfraSidebar',
          position: 'left',
          label: 'ITインフラ爆速入門',
        },
        {
          type: 'docSidebar',
          sidebarId: 'noteSidebar',
          position: 'left',
          label: 'ノート',
        },
        // {to: '/blog', label: 'Memo', position: 'left'},
        {
          href: 'https://github.com/crashRT/crashrt-memo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '勉強会資料',
              to: '/docs/slides',
            },
            {
              label: 'ITインフラ爆速入門',
              to: '/docs/infra',
            },
            {
              label: 'ノート',
              to: '/docs/note',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Portfolio',
              href: 'https://crashrt.work/',
            },
            {
              label: 'Blog',
              href: 'https://crashrt.hatenablog.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/crashRT',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} crashRT Built with Docusaurus.<br/>本サイトではアクセス解析のために Cookie を使った Google Analytics を利用しています。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
