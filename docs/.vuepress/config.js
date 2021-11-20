module.exports = {
  title: 'Bounce UI',
  base: "/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/dist/bounce_ui.css"
      }
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.7.1/gridlex.min.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css"
      }
    ]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    navbar: [
      {
        text: 'Components',
        link: '/components',
      },
      {
        text: 'Guide',
        link: '/guide/',
      }
    ],
  },
  plugins: [
    ['vuepress-plugin-demoblock-plus'],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          }
        },
      },
    ],
  ]
}