# xianzhi

> 鲜致前端架构

## 构建步骤

``` bash
# 安装依赖
$ npm install # Or yarn install*[see note below]

# 本地开发测试环境 localhost:3000
$ npm run dev

# 打包生产部署文件
$ npm run build
$ npm start

# 生产静态项目
$ npm run generate
```

*Note: Due to a bug in yarn's engine version detection code if you are
using a prerelease version of Node (i.e. v7.6.0-rc.1) you will need to either:
  1. Use `npm install`
  2. Run `yarn` with a standard release of Node and then switch back

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
