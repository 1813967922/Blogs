export default {
  title: "软软",
  description: "Just playing around.",
  base: "/Blogs",
  dest: "./dist",
  markdown: {
    lineNumbers: true
  },
  // 最后更新
  lastUpdated: true,
  themeConfig: {
    siteTitle: "软软的笔记",
    logo: "./logo.svg",
    outlineTitle: "本页目录",
    // 搜索
    algolia: {
      appId: "...",
      apiKey: "...",
      indexName: "...",
    },
    // 带有图标的社交帐户链接
    socialLinks: [{ icon: "github", link: "https://github.com/1813967922" }],
    // 导航栏
    nav: [
      { text: "首页", link: "/index" },
      { text: "介绍", link: "/pages/introduce/index" },
    ],
    // 侧栏
    sidebar: [
      {
        text: "介绍",
        link: "/pages/introduce/index",
      },
      {
        text: "题",
        collapsed: true,
        items: [
          { text: "V8引擎如何表示JS的动态类型", link: "/pages/problem/0001" },
          { text: "浅拷贝和深拷贝", link: "/pages/problem/0003" },
          { text: "TCP/IP", link: "/pages/problem/0004" },
          { text: "浏览器输入URL发生了什么", link: "/pages/problem/0005" },
          { text: "CDN内容分发", link: "/pages/problem/0006" },
          { text: "跨域", link: "/pages/problem/0007" },
          { text: "Ajax", link: "/pages/problem/0008" },
          { text: "扁平化树型对象数组", link: "/pages/problem/0020" },
        ],
      },
      {
        text: "规范",
        collapsed: true,
        items: [
          { text: "Monorepo架构", link: "/pages/specs/0000" },
          { text: "设计模式", link: "/pages/specs/0001" },
        ],
      },
      {
        text: "NestJS",
        collapsed: true,
        items: [{ text: "NestJS整合Prisma", link: "/pages/nestjs/0001" }],
      },
      {
        text: "技术",
        collapsed: true,
        items: [
          { text: "unocss原子化", link: "/pages/technology/0000" },
          { text: "RPC", link: "/pages/technology/0001" },
          { text: "pnpm", link: "/pages/technology/0002" },
        ],
      },
      {
        text: "自动化测试",
        collapsed: true,
        items: [
          { text: "Selenium识别验证码", link: "/pages/test/0000" },
          { text: "App测试", link: "/pages/test/0001" },
        ],
      },
    ],
    // 编辑链接
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页面'
    // },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
};
