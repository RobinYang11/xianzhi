module.exports = {

  /**
   * 
   * 第三方插件
   */
  build: {
    vendor: ['axios','element-ui']
  },

  plugins: [
    {src: '~/plugins/element-ui.js', ssr: true},
  ],
  /*
  ** 所有页面头部配置
  */
  head: {
    title: '鲜致',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** 全局css样式
  */
  css:
  [
    //通用css样式
    '~assets/css/main.css',
    //elementui通用样式
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css'
  ],
 
  /*
  ** 自定义进度条样式
  */
  loading: { color: '#3B8070' }
}
