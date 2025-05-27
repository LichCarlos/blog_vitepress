# webpack
为了便利开发的工具，解决开发和生产的矛盾。解决特殊写法（ES6）的兼容性问题。


## webpack基础配置
webpack配置文件为：webpack.config.js。
使用commonjs规范，使用exports导出，使用require导入。原因是使用nodejs环境下。并且是不经过编译的。
指定打包配置文件使用```webpack --config xxx.js```xxx.js为配置文件名称。默认为webpack.config.js
```js
//引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//webpack demo
module.exports = {
  //mode打包模式
  mode: 'production',//添加压缩代码的功能
  //文件入口
  //单入口
  //entry: './aoo.js',

  //多入口
  // entry: {
  //   app: './src/app.js',
  //   bpp: './src/bpp.js'
  // }

  //也可以以数组的形式
  entry: ['./src/app.js', './src/bpp.js'],//多文件同时作为一个入口
  //多入口
    entry: {
    app: ['./src/app.js'],
    bpp: ['./src/bpp.js']
    },
    //出口，指定打包后的结果
    output: {
      //__dirname为当前目录，的dist目录
      path: __dirname+ 'dist',
      //filename: 'bundle.js'
      fielename: '[name].[hash:4].bundle.js'
    }
  }
//loader
    module:{
      rules: [
        //rules: 中每个对象就是一个loader
        {
          test: /\.js$/,//匹配文件
          loader: 'babel-loader'
        },
        {

        },
    ]
    }
    plugins: [
      new HtmlWebpackPlugin({})，
    ]
  devServer: {}
  resolve: {}
    optimization: {}
```

### 必填项
webbpack只做打包的事情，吧多个js打包成一个js。

所以必填项为entry、output。入口和出口，就可以进行打包。
在webpack4新增必填项mode，指定打包模式。
### 非必填项
devServer：非必填项，开发模式配置
module：非必填项，模块配置（loader编写位置）
plugins：非必填项，插件配置
optimization：非必填项，优化配置
resolve：非必填项，解析配置简化功能
devtool：非必填项，调试配置
 
### webbpack安装
安装webpack
```js
//webpack3
npm  install webpack@3.xxx
//webpack4以上
npm install webpack webpack-cli 
```

 查看版本

```webpack --version```

## webpack对js处理
 1. ES6的转换：babel-loader
 2. 代码的规范：eslint
 3. 代码分割与打包： webpack-cli

### babel-loader
安装：
```js
npm install babel-loader @babel-core --save-dev  @babel/preset-env
```

本身不去做编译的：babel-loader只是一个接口

@babel/core才是去编译的包
示例：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        //loader: 'babel-loader',
        //或使用use
        use: ['babel-loader','xxx-loader']//多个loader处理，执行顺序为从后往前，xxxloader-》babel-loader
        //配置loader，使用对象形式处理
        use：{
          loader: 'babel-loader',
          options: { 
            //配置的内容
            //presets: ['@babel/preset-env']
            presets: [
              [
                '@babel/preset-env',//预设
                {//编译目标，例如浏览器
                targets: {
                  browsers: [
                    '>1%',//占有率大于1%的浏览器
                    'last 2 versions'//浏览器最后两个版本
                    'not ie < 8'//不支持小于ie8的浏览器
                    ]
                }

                }
              ]
            ]
          }
        }
      }
    ]
  }
}
```
### eslint概述
eslint是一个JavaScript代码检测工具，可以检测代码中的语法错误、代码规范、代码错误等。做代码规范而生。
但eslint本身并不包含任何规则，需要人为做规范，如vue需要安装eslint-plugin-vue插件，才能检测vue代码规范。

### eslint安装
```
npm install eslint eslint-webpack-plugin --save-dev
```
示例：
```cjs
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    module: {
    rules: [
      {
        test: /\.js$/,
        //loader: 'babel-loader',
        //或使用use
        use: ['babel-loader','xxx-loader']//多个loader处理，执行顺序为从后往前，xxxloader-》babel-loader
        //配置loader，使用对象形式处理
        use：{
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new ESLintPlugin({

    });
  ]
}
```
配置在config文件中会显得文件臃肿，所以可以创建一个eslintrc.js文件，将eslint的配置信息放在该文件中，并导出该文件。
```js
module.exports = {
  env:{
    browser: true,
    es2021: true
  }
  extends: [
    //继承别人写好的配置
    //如 npm install  eslint-config-standard --save-dev
    'standard'
    'plugin:vue/strongly-recommended'

  ],
  //特殊风格的规范
  plugins: [
    //如vue的语法规范 npm install eslint-plugin-vue --save-dev
  'vue'
  ],
  //解析配置
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
    ecmaFeatures: {
      jsx: true
    }
  }，
  //检查细节，会覆盖继承的规范
  rules: {
    'no-console': 'off'//0/off关闭，1/warn警告，2/error错误
  }

}
```

## webpack对css的处理
 1. js中引入css会打包失败
 2. css-loader：负责解析css文件，将css文件内容变成一个字符串，然后交给style-loader处理。
 3. 1.  style-loader：负责将css字符串变成一个style标签，插入到html中。
 3. 2.  mini-css-extra-plugin：负责解析css文件，提取为独立文件。

示例：
```javascript
//压缩css
const minizer = require('css-minimizer-webpack-plugin');
//打包css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [minicss.loader,'css-loader', 'style-loader']
      },
      {
        test: /\.less$/,
        use: [minicss.loader,'css-loader', 'style-loader','less-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    })，
    new minizer()
  ]
}
```
### webpack对资源的处理
webpack5自带对资源文件处理，比如图片、字体、音频、视频等，webpack5对资源文件的处理，会自动将资源文件打包到输出目录中，并且会自动生成对应的引用路径，不需要手动处理。

示例：webpack4
```js
module.exports = {
  reules: [
    {
      test: /\.(png|jpg|gif)$/i,
      loader: 'url-loader',
      options: {
        //  小于这个值时，图片会被base64编码,但不推荐将图片全部打包。
        limit:8192,
        name: '[name].[hash].[ext]'
      }
    }
  ]
}
```
示例：webpack5
```js
module.exports = {
 resules: [
  {
    test: /\.(png|jpg|gif)$/i,
    //asset/resource图片单独领出来， //asset/inline图片base64编码
    //asset手动设置
    type: 'asset',
    parser: {
      dataUrlCondition: {
        max：8192
      }，
      generator: {
        filename: '[name].[hash].[ext]'
      }
    }
  }

 ]
}
```

## loader的本质
loader的本质是一个函数，接受源文件，返回转换后的文件。

loader处理过程：
 1. 编写语言的loader
 2. 编写loader配置 

示例： mycss-loader/index.js
```cjs
module.exports = function(cssContent) {
  //将所有0更换为0px
  cssContent = cssContent.replace(/0/g, '0px')
  return cssContent；
}
```
在编写好loader之后，需要将其配置到webpack中。
```js
const mycssLoader = require('./mycss-loader')
module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: ['mycssLoader']
    }
  ]
}
```

## webpack对HTML文件的处理
项目三要素

 1. 浏览器打开
 2. html文件解析
 3. 1. 解析js文件
 3. 1. 1. 执行js文件，创建内容
    2. 解析css文件
    2. 1. 执行css样式渲染图片

我们需要对html文件做什么：

1. 提供模板。复用内容
2. 打包生成html
3. 打包html引入js

示例：
对html处理是插件而非loader，因为loader的作用是让浏览器认识js。而html是文件的载体。
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
      //也可以返回函数，作为模板
      // templateContent: function () {
      //   return '<h1>Hello World</h1>'
      // }
      fileName: 'index.html'
      //压缩
      minify: {
        //是否打包成一行
        collapseWhitespace: true,
      }
      //指定js插入位置
      inject: 'body'
    })



  ]
}
```
多入口执行-多个html文件,示例app.html和bpp.html,对应的app.js和bpp.js
```js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
      filename: 'app.html',
      chunks: ['app']
    })，
    new  HtmlWebpackPlugin({
      template: './src/bpp.html',
      filename: 'bpp.html',
      chunks: ['bpp']
    })
  ]
}
```


## 代码分割
为什么代码分割：
类似小程序分包，避免代码在一个文件，加快首屏加载速度。

## webpack技巧配置（杂项）
hash值的意义：在打包的文件名加哈希，避免一直读取缓存资源。拉取新资源。（但只改变一个内容，全部改变资源要全部拉取）
改进方案：使用chunkhash

resolve:
 1. alias: 配置别名 如@符号
 2. extensions: 配置扩展名 省略.js等

require.context: webpack提供的工具，用于批量导入文件

filename：可以增加路径，在打包后创建文件夹。


publicPath: 在output:中加入配置打包后的静态资源路径。可以做配置cdn优化 

## 开发模式  
开启步骤
 1. 安装webpack-dev-server
 2. 设置devServer:
 3. 使用webpack-dev-server运行

工作原理：
 1. webpack-dev-server启动一个服务器，监听文件变化，打包文件，并返回文件
 2. 使用express启动node服务
 3. 项目更改后通知到express，express重新打包文件，并返回文件
 4. 进行打包配置

示例:mydev.js
```js
//在开发时，控制台输入webpack-dev-server 等同于 node 运行一个webbpack写好的服务
//启动本服务 使用node mydev.js启动服务 
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = requier('./webpack.config.js')
const dist - webpack(config);
const app = express();
app.use(webpackDevMiddleware(dist))
app.listen(3000)
```
### 热更新和强制更新
```js
module.exports = {
  devServer: {
    port: 8080,
    hot: true,
  }
}
```
热更新：会保持页面状态，不刷新浏览器页面。
强制更新：刷新浏览器页面，会重置页面状态。

一般情况js代码更改使用强制更新，css样式更改使用热更新
### proxy
代理：将请求转发到其他服务器，比如将请求转发到后端服务器。解决跨域问题。
```js

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          //简化开发操作
          '^/v1': '/api/v1'
        },
        headers: {
          x-requested-with: 'XMLHttpRequest'
        }
      }
    }
  }
}
```
### source-map
资源地图：作用：出现错误，定位错误代码位置
//生产模式建议关闭 none
```js
module.exports = {
  //开发模式推荐
  devtool: 'eval-cheap-source-map'//错误消息会进入到原始代码
}
```

## 实战的配置技巧
 生产模式： 需要压缩代码，需要混淆代码，需要优化代码 tree-shaking。不需要详细的spurce-map

 开发模式： 不需要压缩代码，不需要混淆代码，不需要优化代码 。需要详细的spurce-map


# vite

## 了解vite与rollup
vite特点是esm，让代码避免分析引入，打包构建，而是直接保持模块化，节省编译时间。

vite基于rollup取构建的

rollup打包特点：不生产运行代码、多模块化规范打包

示例：Rollup核心配置
``` js
module.exports = {
  input,//必须，入口文件
  output：{//必须，输出文件
  dir,
  file,
  format,//必须，输出模块化
  }
  external,
  plugins,
}
```
## vite的详细配置
