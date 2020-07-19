const themeConfig = require('./config/theme/')

module.exports = {
  title: "大陈子",
  description: 'Enjoy when you can, and endure when you must.',
  head: [
    ['link', { rel: 'icon', href: '/link-icon.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  