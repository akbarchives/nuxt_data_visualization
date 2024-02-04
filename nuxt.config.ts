// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'BTJ Academy',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'simple web list anime',
        },
      ],
    },
  },
  ssr: true,
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/image',
    [
      'nuxt-highcharts',
      {
        /* module options */
        setOptions: {
          // colors: ['#D04848', '#F3B95F'],
          credits: {
            enabled: false,
          },
          lang: {
            downloadPNG: 'Unduh PNG',
            downloadJPEG: 'Unduh JPEG',
            downloadPDF: 'Unduh PDF',
            downloadSVG: 'Unduh SVG',
          },
          chart: {
            backgroundColor: 'transparent',
          },
        },
      },
    ],
  ],
});
