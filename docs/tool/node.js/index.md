# node.js是什么
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，它允许开发者使用 JavaScript 编写服务器端代码。Node.js 的设计初衷是为了创建高效、可扩展的网络应用程序，特别是那些需要处理大量并发连接的应用程序，如实时聊天应用、API 服务等。

## 在 Windows 上安装 Node.js

本文将指导你完成在 Windows 系统上安装 Node.js 的步骤。

### 使用安装程序安装

1. **访问官方站点**：前往 [Node.js 官方网站](https://nodejs.org/)。
2. **下载安装文件**：点击页面上的 "LTS" 或 "Current" 版本按钮来下载适合 Windows 的 .msi 安装文件。推荐选择 LTS 版本用于生产环境。
3. **运行安装向导**：
   - 双击下载的 .msi 文件启动安装向导。
   - 按照向导提示进行操作，通常只需点击“下一步”并接受默认设置即可。
   - 勾选是否同时安装 npm（推荐勾选）。
4. **完成安装**：等待安装过程完成，然后可以关闭安装向导。

### 通过 Chocolatey 包管理器安装

如果你已经在 Windows 上安装了 Chocolatey 包管理器，可以通过以下命令快速安装最新版本的 Node.js：

1. 打开命令提示符或 PowerShell（以管理员身份运行）。
2. 输入以下命令：

   ```powershell
   choco install nodejs
   ```
## 检验node是否安装成功
在安装完成后都应该验证安装是否成功。请打开命令提示符（Command Prompt）或 PowerShell 并输入以下命令来检查 Node.js 和 npm 是否正确安装：
``` shell
node -v
npm -v
```
这两个命令应该分别返回 Node.js 和 npm 的版本号。