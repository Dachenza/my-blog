module.exports = {
  logo: "/link-icon.jpg",
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    },
    test: {
      location: 4, // 在导航栏菜单中所占的位置，默认3
      text: 'test' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: '最近更新', // string | boolean
  // 作者
  author: 'dachenza',
  // 备案号
  record: '京ICP备13799号-1',
  // 项目开始时间
  startYear: '2017'
}