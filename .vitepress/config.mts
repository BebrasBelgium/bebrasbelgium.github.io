import { defineConfig } from 'vitepress'

import small from 'markdown-it-small'

export default defineConfig({
  title: 'Bebras Belgium',
  description: 'Bebras Belgium',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Participate', link: '/challenge/' },
          { text: 'Results', link: '/results/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'About us', link: '/about/' },
        ],
        homePage: {
          statsTitle: 'Statistics',
        },
        sidebar: {
          '/about/': [
            {
              text: 'About us',
              link: '/about/',
              items: [
                {
                  text: 'Contact us',
                  link: '/about/contact/',
                },
              ],
            },
          ],
          '/challenge/': [
            {
              text: 'Challenge',
              link: '/challenge/',
              items: [
                {
                  text: 'Register',
                  link: '/challenge/register/',
                },
              ]
            },
          ],
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Participer', link: '/fr/challenge/' },
          { text: 'FAQ', link: '/fr/faq/' },
          { text: 'À propos', link: '/fr/about/' },
        ],
        outlineTitle: 'Sur cette page',
        homePage: {
          statsTitle: 'Statistiques',
          pupils: 'élèves',
          schools: 'écoles',
          tasks: 'tâches',
        },
        sidebar: {
          '/fr/about/': [
            {
              text: 'À propos de nous',
              link: '/fr/about/',
              items: [
                {
                  text: 'Nous contacter',
                  link: '/fr/about/contact/',
                },
              ],
            },
          ],
          '/fr/challenge/': [
            {
              text: 'Challenge',
              link: '/fr/challenge/',
              items: [
                {
                  text: 'S\'inscrire',
                  link: '/fr/challenge/register/',
                },
              ]
            },
          ],
        },
      },
    },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      themeConfig: {
        nav: [
          { text: 'Overzicht', link: '/nl/' },
          { text: 'Resultaten', link: '/nl/results/' },
          { text: 'Deelnemen', link: '/nl/challenge/' },
          { text: 'FAQ', link: '/nl/faq/' },
          { text: 'Over ons', link: '/nl/about/' },
        ],
        outlineTitle: 'Op deze pagina',
        homePage: {
          statsTitle: 'Statistieken',
          pupils: 'leerlingen',
          schools: 'scholen',
          tasks: 'vragen',
        },
        sidebar: {
          '/nl/about/': [
            {
              text: 'Over ons',
              link: '/nl/about/',
              items: [
                {
                  text: 'Contacteer ons',
                  link: '/nl/about/contact/',
                },
              ],
            },
          ],
          '/nl/challenge/': [
            {
              text: 'Wedstrijd',
              link: '/nl/challenge/',
              items: [
                {
                  text: 'Inschrijven',
                  link: '/nl/challenge/register/',
                },
              ]
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    logo: '/images/bebras-international-logo.png',
    siteTitle: 'Belgium',
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/BebrasBelgium/' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(small)
    }
  },
})
