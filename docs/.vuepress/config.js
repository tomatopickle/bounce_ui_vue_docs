const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
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
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap",
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
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    navbar: [
      {
        text: "Components",
        link: "/components",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
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
  ],
};
