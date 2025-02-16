# npm - Node Package Manager

## 概述

npm（Node Package Manager）是用于管理JavaScript软件包的工具，主要用于Node.js应用程序。它不仅是一个命令行工具，也是世界上最大的开源软件注册表之一，拥有超过百万个代码包供开发者使用和贡献。
## npm安装
在上一节安装node.js时已同步安装。


安装完成后，你可以通过命令提示符（Command Prompt）、PowerShell或任何其他终端模拟器来验证是否成功安装了npm：

```shell
npm --version
```
## package.json 文件

`package.json` 是一个JSON格式的文件，包含了关于Node.js项目的元数据和依赖关系的信息。它是每个Node.js项目的核心配置文件。

### 版本号规则
如1.0.0

版本号遵循语义化版本控制（SemVer），由三部分组成：
- **主版本号**：表示不兼容的API修改（如从Vue 2升级到Vue 3）
- **次版本号**：表示向后兼容的功能性更新（如Vue编译宏从3.0.0更新到3.1.0）
- **修订号**：表示向后兼容的bug修复

### 依赖类型

- **dependencies**：生产环境依赖项，即项目运行所必需的库。
  ```shell
  npm install 包名 
  # 或者简写为
  npm install 包名
  ```
- **devDependencies**：开发环境依赖项（生产环境），仅在开发和构建过程中需要的库。可以通过以下命令安装： 
  ```shell
  npm install 包名 --save-dev
  # 或者简写为
  npm install 包名 -D
  ```
- **peerdevDependencies**：对等依赖，为编写插件人员使用/编写npm包的开发人员使用。

如vite plugin 插件不能够凭空运行，所需的宿主环境依赖于vite

## npm 命令参考


### 1. 查看Node.js配置
查看Node.js的版本或其他配置信息，可以使用如下命令：

```shell
node -v # 或 node --version
```

### 2. 初始化项目

在开始一个新的Node.js项目时，你需要初始化一个新的`package.json`文件。这个文件描述了你的项目的配置信息以及依赖关系。你可以在项目的根目录下运行以下命令来生成它：

```shell
npm init -y
```
其中在使用 npm init -y 命令时，-y 选项（也可以写作 --yes）的作用是自动接受所有默认设置，并且不提示用户输入信息。它会读取当前目录下已有的 package.json 文件（如果存在），或者使用一组默认值来创建一个新的 package.json 文件。

### 3. 下载依赖
要安装一个软件包到你的项目中，可以使用以下命令：

```shell
npm install 包名
```
如果你想安装一个开发依赖项devDependencies（仅在开发环境中需要），可以使用--save-dev选项：

```shell
npm install 包名 --save-dev
```
### 4. npm config list查看npm的配置列表
```shell
npm config list
```
### 5. 全局安装
有时候你可能想要全局安装一些工具，这样就可以在整个系统中使用它们。使用-g选项来全局安装：

```shell
npm install -g 包名
```
注意：在Windows上进行全局安装时，有时会遇到权限问题。如果你遇到这样的问题，尝试以管理员身份运行命令提示符或PowerShell。

### 6. 更新包
随着时间的推移，软件包会发布新的版本。你可以使用以下命令来更新本地安装的包：

```shell
npm update 包名
```
要更新所有过时的包，只需运行：

```shell
npm update
```
### 7. 卸载包
如果不再需要某个包，你可以使用以下命令将其卸载：

```shell
npm uninstall 包名
```
如果你之前是在全局安装的包，记得加上-g选项：

```shell
npm uninstall -g 包名
```
### 8. 查看全局的可执行文件
```shell
npm ls -g
```
### 9. 查看帮助
如需更多帮助，可以随时查看npm的帮助文档：

```shell
npm help
```
## 更多帮助请查看Node.js官网
**访问官方站点**：前往 [Node.js 官方网站](https://nodejs.org/)。