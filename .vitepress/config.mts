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
      { text: '科学上网指南', link: '/01_科学上网指南/00_科学上网指南' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '科学上网指南',
        items: [
          { text: '00_科学上网指南', link: '/01_科学上网指南/00_科学上网指南' },
          { text: '01_常见词汇', link: '/01_科学上网指南/01_常见词汇' },
          { text: '02_怎么翻墙，如何选择？', link: '/01_科学上网指南/02_怎么翻墙，如何选择？' },
          { text: '03_翻墙如何保证隐私与安全？', link: '/01_科学上网指南/03_翻墙如何保证隐私与安全？' },
          { text: '04_机场使用经验', link: '/01_科学上网指南/04_机场使用经验' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/key-rat' }
    ]
  }
})
