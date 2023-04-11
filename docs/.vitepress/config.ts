import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-GB',
  title: 'thirdwheel studios',
  description: 'A blog for thirdwheel studios updates',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Blog', link: '/' }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thirdwheelstudios' },
      { icon: 'twitter', link: 'https://twitter.com/3rdwheelstudios' },
    ],
  },
})
