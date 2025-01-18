import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs'
import nav from './nav.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Carlos博客",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      copyright: `这是一个页脚<br>本网站仅供博客学习，实验室内部使用<br>有问题可在博客下留言或在工作日工作时间钉钉联系<br>网站备案.ing`
    },
    docFooter: { prev: "上一页", next: "下一页" },
    logo: "/logo.png",
    siteTitle: false,
    sidebarMenulabel: "菜单",
    returnToToplabel: "返回顶部",
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: '切换到深色模式',
    outline: {
      label: "页面导航",
      level: "deep",
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: "切换",
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
  srcDir: './docs',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,//显示代码行数
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detai1sLabel: '详细信息',
    }
  }
})
