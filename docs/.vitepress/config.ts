import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "thirdwheel blog",
  description: "A blog for thirdwheel studios updates",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Blog", link: "/" },
      { text: "About", link: "/about" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/thirdwheelstudios" },
      { icon: "twitter", link: "https://twitter.com/3rdwheelstudios" },
    ],
  },
})
