const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Code Copied'
  },
  '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段',
    'copy-success-text': '复制成功'
  }
}

module.exports = {
  title: "Bounce UI",
  base: "/bounce_ui_vue_docs/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/bounce_ui_vue_docs/dist/bounce_ui.css",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css",
      },
    ],
    ['link', { rel: 'manifest', href: '/bounce_ui_vue_docs/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#276ef1' }], 
    ["link", { rel: "shortcut icon", href: "/bounce_ui_vue_docs/favicon.ico" }], 
  ],
  themeConfig: {
    logo: "/images/logo.png",
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Components",
        link: "/components",
      }
    ],
  },
  plugins: [
    ["vuepress-plugin-demoblock-plus", { locales }],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      },
    ], 
    [
      '@vuepress/pwa',
      {
        skipWaiting: true, 
      }
    ]
  ],
};
