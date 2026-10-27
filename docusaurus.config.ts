import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const organizationName = "ramonxm";
const projectName = "brain";
const repoUrl = `https://github.com/${organizationName}/${projectName}`;

const config: Config = {
  title: "brain.xavier",
  tagline:
    "Notas de estudo sobre algoritmos, estruturas de dados e fundamentos da computação",
  favicon: "img/favicon.ico",
  url: "https://ramonxm.github.io",
  baseUrl: "/brain/",
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",

  future: {
    v4: true,
    faster: true,
  },

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    path: "i18n",
    localeConfigs: {
      "pt-BR": {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-BR",
        calendar: "gregory",
        path: "pt-BR",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
    },
  },

  headTags: [
    {
      tagName: "link",
      attributes: { rel: "manifest", href: "/brain/img/site.webmanifest" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/brain/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "meta",
      attributes: { name: "theme-color", content: "#5b4bdb" },
    },
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          path: "docs",
          editUrl: `${repoUrl}/tree/main/`,
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["pt", "en"],
        indexBlog: false,
        docsRouteBasePath: "/docs",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themeConfig: {
    image: "img/android-chrome-512x512.png",
    metadata: [
      {
        name: "keywords",
        content:
          "algoritmos, estruturas de dados, ciência da computação, big o, aws, banco de dados, sql, algorithms, data structures",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: "@ramonxavierm" },
    ],

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: "brain.xavier",
      logo: {
        alt: "brain.xavier",
        src: "img/android-chrome-192x192.png",
        width: 28,
        height: 28,
      },
      hideOnScroll: false,
      items: [
        {
          type: "docSidebar",
          sidebarId: "conceptsSidebar",
          position: "left",
          label: "Conceitos",
        },
        {
          type: "docSidebar",
          sidebarId: "dataStructuresSidebar",
          position: "left",
          label: "Estruturas de Dados",
        },
        {
          type: "docSidebar",
          sidebarId: "algorithmsSidebar",
          position: "left",
          label: "Algoritmos",
        },
        {
          type: "docSidebar",
          sidebarId: "topicsSidebar",
          position: "left",
          label: "Tópicos",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: repoUrl,
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Conteúdo",
          items: [
            { label: "Conceitos", to: "/docs/concepts" },
            { label: "Estruturas de Dados", to: "/docs/data-structures" },
            { label: "Algoritmos", to: "/docs/algorithms" },
            { label: "Tópicos", to: "/docs/topics" },
          ],
        },
        {
          title: "Comunidade",
          items: [
            { label: "GitHub", href: repoUrl },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ramonxm/" },
            { label: "Twitter", href: "https://twitter.com/ramonxavierm" },
          ],
        },
        {
          title: "Mais",
          items: [
            { label: "Dev.to", href: "https://dev.to/ramonxm" },
            { label: "Medium", href: "https://medium.com/@ramonxm" },
            {
              label: "Buy me a coffee",
              href: "https://www.buymeacoffee.com/ramonxm",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ramon Xavier`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        "java",
        "python",
        "cpp",
        "c",
        "csharp",
        "php",
        "ruby",
        "go",
        "rust",
        "kotlin",
        "swift",
        "dart",
        "scala",
        "bash",
        "powershell",
        "sql",
        "json",
        "yaml",
        "toml",
        "diff",
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
