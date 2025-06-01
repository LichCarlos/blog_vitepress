# nrm - Node Registry Manager 使用指南

## 简介

`nrm` (Node Registry Manager) 是一个命令行工具，允许你方便地管理和切换 npm 的注册表源。通过 `nrm`，你可以快速选择最合适的镜像源来加速 npm 包的安装，或者在不同环境下使用不同的源。这特别有助于提高国内用户的下载速度，因为官方 npm 源可能在国外服务器上，导致下载速度较慢。

## 安装nrm插件

要开始使用 `nrm`，首先需要确保已经安装了 Node.js 和 npm。然后可以通过 npm 全局安装 `nrm`：

```shell
npm install -g nrm
```

## 查看nrm是否安装成功
安装完成后，可以通过以下命令验证是否成功安装了 nrm：
```shell
nrm --version 
```

## nrm使用方法
### 查看可用的注册表源
安装完 nrm 后，你可以查看当前可用的注册表源列表：

```shell
nrm ls
```
这将列出所有支持的注册表源，并标注当前正在使用的源。

### 切换注册表源
要切换到不同的注册表源，可以使用以下命令：

```shell
nrm use <registry-name>
```
例如，要切换到淘宝的镜像源（taobao），可以运行：

```shell
nrm use taobao

```
### 测试注册表源的速度
为了找到最快的注册表源，nrm 提供了一个测试命令来比较不同源的速度：

```shell
nrm test
```
这将依次从每个注册表源下载一个小文件并测量下载时间，最后输出测试结果，帮助你选择最佳的源。

### 添加新的注册表源
如果你想要添加一个新的注册表源，可以使用以下命令：

```shell
nrm add <registry-name> <registry-url>
```
例如，添加一个名为 myRegistry 的新源：

```shell
nrm add myRegistry https://my.custom.registry.com/
```
### 删除注册表源
如果不再需要某个注册表源，可以将其删除：

```shell
nrm del <registry-name>
```
例如，删除名为 myRegistry 的源：

```shell
nrm del myRegistry
```