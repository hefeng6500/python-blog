import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/python-blog/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Python', link: '/python' },
      { text: 'AI', link: '/ai' },
    ],

    sidebar: {
      "/python/": {
        base: "/python/",
        items: [
          {
            text: '基础知识',
            items: [
              { text: '预备资料', link: '/01' },
              { text: '条件语句', link: '/02' },
              { text: '循环', link: '/03' },
              { text: '容器类型', link: '/04' },
              { text: '列表、元组、字典', link: '/05' },
              { text: '函数', link: '/06' },
              { text: '递归、文件操作', link: '/07' },
              { text: '异常、模块、管理系统demo', link: '/08' },
            ]
          },
          {
            text: '进阶',
            base: '/python/advanced/',
            items: [
              { text: '面向对象基础', link: '/01' },
              { text: '面向对象高级', link: '/02' },
              { text: '学生管理系统(面向对象)', link: '/03' },
              { text: '闭包和装饰器', link: '/04' },
              { text: '网络编程', link: '/05' },
              { text: '多任务编程', link: '/06' },
              { text: '高级语法与正则表达式', link: '/07' },
              { text: '排序', link: '/08' },
              { text: '二叉树', link: '/09' },
            ]
          },
        ]
      },
      "/ai/": {
        base: "/ai/",
        items: [
          {
            text: 'Examples',
            items: [
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
