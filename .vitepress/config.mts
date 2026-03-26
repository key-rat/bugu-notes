import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人知识体系",
  description: "全栈后端与AI开发者的个人知识库",

  // 如果你的 github pages 地址是 https://username.github.io/repo-name/
  // 则需要配置 base: '/repo-name/'
  // 目前默认为根目录，如果你的仓库不是 username.github.io ，请自行修改
  base: '/my-knowledge-base/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '网络基础设施', link: '/01_网络基础设施/02_伪装体系' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '网络基础设施',
        items: [
          { text: '伪装体系', link: '/01_网络基础设施/02_伪装体系' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ]
  }
})
