import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "布咕 - 个人知识库",
  description: "布咕的个人知识库",

  // 如果你的 github pages 地址是 https://username.github.io/repo-name/
  // 则需要配置 base: '/repo-name/'
  // 目前默认为根目录，如果你的仓库不是 username.github.io ，请自行修改
  base: '/bugu-notes/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '首页', link: '/' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ]
  }
})
