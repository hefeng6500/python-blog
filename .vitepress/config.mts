import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/python-blog/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Python", link: "/python", activeMatch: "/python" },
      { text: "AI", link: "/ai", activeMatch: "/ai" },
    ],

    sidebar: {
      "/python/": {
        base: "/python/",
        items: [
          {
            text: "基础知识",
            items: [
              { text: "预备资料", link: "/01" },
              { text: "条件语句", link: "/02" },
              { text: "循环", link: "/03" },
              { text: "容器类型", link: "/04" },
              { text: "列表、元组、字典", link: "/05" },
              { text: "函数", link: "/06" },
              { text: "递归、文件操作", link: "/07" },
              { text: "异常、模块、管理系统demo", link: "/08" },
            ],
          },
          {
            text: "进阶",
            base: "/python/advanced/",
            items: [
              { text: "面向对象基础", link: "/01" },
              { text: "面向对象高级", link: "/02" },
              { text: "学生管理系统(面向对象)", link: "/03" },
              { text: "闭包和装饰器", link: "/04" },
              { text: "网络编程", link: "/05" },
              { text: "多任务编程", link: "/06" },
              { text: "高级语法与正则表达式", link: "/07" },
              { text: "排序", link: "/08" },
              { text: "二叉树", link: "/09" },
            ],
          },
          {
            text: "数据处理与统计分析",
            base: "/python/data/",
            items: [
              { text: "Linux简介", link: "/01" },
              { text: "Linux使用技巧", link: "/02" },
              { text: "Mysql", link: "/03" },
              { text: "窗口函数、jupyter、Numpy", link: "/04" },
              { text: "Pandas、DataFrame入门", link: "/05" },
              { text: "数据组合、缺失值处理、Apply", link: "/06" },
              { text: "数据分组、透视表", link: "/07" },
              { text: "数据可视化", link: "/08" },
              { text: "Pandas、Seaborn、RFM", link: "/09" },
              { text: "阶段小结", link: "/10" },
            ],
          },
        ],
      },
      "/ai/": {
        base: "/ai/",
        items: [
          {
            base: "/ai/machine-learning/",
            text: "机器学习",
            items: [
              { text: "简介", link: "/01" },
              { text: "KNN算法", link: "/02" },
              { text: "线性回归", link: "/03" },
              { text: "逻辑回归", link: "/04" },
              { text: "决策树", link: "/05" },
              { text: "集成学习", link: "/06" },
              { text: "朴素贝叶斯", link: "/07" },
              { text: "特征降维", link: "/07/01" },
              { text: "聚类", link: "/08" },
              { text: "支持向量机", link: "/09" },
              { text: "otto案例介绍", link: "/10" },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    editLink: {
      pattern: "https://github.com/hefeng6500/python-blog/edit/master/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
  markdown: {
    math: true,
  },
});
