---
title: 油猴开发官方问答中文版
description: 油猴开发官方问答中文版，油猴官方中文文档，Tampermonkey QA
---
## 通用

[官方英文文档地址](https://www.tampermonkey.net/faq.php?ext=dhdg&updated=true&version=5.3.2)

**Q101：我如何使用 Tampermonkey？**

A101：Tampermonkey 是一款浏览器扩展程序。浏览器扩展程序是一种小型软件程序，用于扩展网页浏览器的功能。这些扩展程序旨在向浏览器添加特定功能，例如广告拦截、密码管理或本例中的用户脚本注入。

浏览器扩展程序的一个常见功能是能够在浏览器地址栏中的 URL 旁边添加一个图标（Tampermonkey 图标）。在某些浏览器中，您需要手动固定该图标才能始终看到它。点击该图标会打开一个弹出菜单，其中提供有关正在运行的脚本的信息以及一个用于打开扩展程序设置的链接。

后台页面是浏览器扩展程序的另一个重要组成部分。这是一个隐藏的网页，在浏览器后台运行，允许扩展程序无需用户交互即可执行任务或功能。这包括检查更新、同步数据或处理信息等。

最后，选项页面允许您配置 Tampermonkey 并管理您的用户脚本。第一个选项卡显示所有已安装的脚本。点击脚本名称即可编辑和设置您的脚本。（视频教程）

还有一个选项卡允许您修改 Tampermonkey 的设置。提示：调整“配置模式”选项以查看更多设置。（视频教程）

第三个选项卡提供脚本导入和导出功能，支持 Zip 文件和 JSON 文档。

**Q102：如何将新脚本安装到 Tampermonkey？**
A102：可以通过以下不同方式实现：

访问此页面了解不同的脚本来源。如果您找到了一个页面，则搜索脚本，打开脚本页面并点击安装按钮。（视频教程）

在 GitHub Gist 和 GitHub 上搜索用户脚本。然后点击“查看原始内容”链接。（视频教程）

您还可以在首选搜索引擎中搜索脚本。然后搜索以“.user.js”结尾的链接并点击它。

如果您有脚本的 URL，只需将其粘贴到 Chrome 的地址栏（Omnibox）中。

在 Tampermonkey 仪表板中，点击“添加新脚本”按钮。这将打开一个新的编辑器窗口，您可以在其中编写或粘贴用户脚本。在编辑器窗口中输入您的用户脚本代码。请确保在脚本顶部包含正确的元数据，因为 Tampermonkey 需要这些信息才能识别它。元数据应包括@name、@match 和@description 字段，这些字段指定了脚本的名称以及它应该运行的 URL 模式。

输入用户脚本代码后，点击“保存”按钮进行保存。现在，您的用户脚本将出现在 Tampermonkey 仪表板中的已安装脚本列表中。（视频教程）

转到 Chrome 的扩展程序页面，在 Tampermonkey 项目下启用“允许访问文件 URL”复选框，创建一个具有“.user.js”文件扩展名的文件，然后将其拖放到 Chrome 中。

**注意**：上述最后一种方法（通过拖放文件到 Chrome 中安装脚本）可能不适用于所有情况，具体取决于您的浏览器设置和 Tampermonkey 的版本。通常，建议使用 Tampermonkey 的内置编辑器或直接从受信任的脚本源安装脚本。此外，在安装任何新脚本之前，请务必仔细阅读脚本的描述和权限要求，以确保它们符合您的安全和隐私标准。

**Q103：是否可以覆盖或扩展脚本的包含和/或排除项？这是如何工作的？**
A103：当然可以。只需转到选项页面，并点击您想要修改的脚本名称。这将打开一个新标签页，显示该脚本的源代码。

包含项编辑器

![cludes_editor](./assets/cludes_editor.png)

点击“设置”标签（1）以打开如上图所示的\*cludes（包含/排除）编辑器。

现在，您可以从“原始包含项”部分（2）中选择一个条目，并通过点击“添加为用户排除项”（3）来将其添加为排除项。该条目现在将出现在“用户排除项”部分（5）中，并且脚本将不再在此页面上运行。

如果您希望脚本在原本不应该运行的页面上运行，则需要使用“原始排除项”部分（4）。再次选择一个条目，点击该部分下方的按钮，该条目将出现在“用户包含项”中。

您还可以使用相应用户部分（“用户包含项”、“用户匹配项”和“用户排除项”）下方的按钮（6）来添加、编辑或删除手动添加的条目。

如果您想完全覆盖原始包含项，只需取消选中相应标题（7）前面的复选框即可。例如，如果您想要禁用指令 `http*://*facebook.com/*`，则需要取消选中“原始包含项”。

请注意，进行这些更改时，请务必小心，因为错误的包含或排除项可能会导致脚本在不适当的页面上运行，或者导致脚本在应该运行的页面上无法运行。此外，一些脚本可能具有特定的依赖关系或要求，因此在修改它们的包含/排除项之前，请务必仔细阅读脚本的描述和文档。

**Q105：如何将 Tampermonkey 中安装的所有脚本同步到另一个浏览器？**

A105：同步您的脚本非常简单。请按照以下步骤启用同步功能：

1. 前往 Tampermonkey 的控制面板，并选择“设置”标签。
2. 将“配置模式”设置为“初学者”或“高级”。
3. 查找“脚本同步”部分。
4. 选择您喜欢的同步服务（见下文）。
5. 最后，您需要“启用脚本同步”并点击“保存”按钮。

Tampermonkey 支持以下同步服务：

- **Google Drive**：您需要一个 Google 帐户才能使用此服务。启用后，Google 会询问是否允许 Tampermonkey 在一个仅包含应用数据的特殊文件夹中存储数据。
- **Dropbox**：您需要一个 Dropbox 帐户才能使用此功能。启用后，Dropbox 会询问是否允许 Tampermonkey 将数据存储到您的 Dropbox 中。注意：如果启用了此服务，Tampermonkey 将不再在几个与 Dropbox 相关的 URL 上运行脚本！
- **WebDAV**：您可以使用任何 WebDAV 服务器，但可能需要输入凭据才能访问。另外，请查看 TamperDAV。它包含一些专有功能，可以加快进程，并允许您使用自己的外部编辑器编辑脚本。注意：Tampermonkey 将不再在服务器的 URL 上运行脚本！
- **浏览器同步**：如果您的浏览器支持此功能，则它将使用浏览器的内部服务在所有 Tampermonkey 实例之间传输信息。请注意，您必须登录到您的浏览器，并且可以同步的数据量非常有限。这就是为什么 Tampermonkey 需要一个可公开访问的 URL 来同步您的脚本。需要明确的是：只有从 Web 服务器下载的脚本或包含有效@downloadURL 标签的脚本才会被处理。为此，可以使用 http 和 https 协议。

**Q106：如何导出和导入我的脚本？**

A106：脚本的导入和导出非常简单。只需前往 Tampermonkey 的控制面板/选项页面。如果您看到“实用程序”标签，请点击进入；如果没有，请将“配置模式”设置为“初学者”或“高级”以便查看该标签。在这个标签下，根据您的 Tampermonkey 版本和浏览器支持情况，会有不同的部分：

- **云**：您可以通过云服务导入和导出 zip 文件。请查看 Q105 以获取云服务列表。
- **Zip**：您可以从硬盘导入和导出 zip 文件。请点击“导出”以保存 zip 文件，或点击“选择文件”以选择要进行导入的归档文件。
- **文件**：您可以从硬盘导入和导出 JSON 文本文件。请点击“导出”以保存此类文件，或点击“选择文件”以选择要导入的文件。
- **文本区域**：您可以从文本区域输入元素导入和导出 zip 文件。请点击“导出”以填充文本区域并复制其值，或在粘贴 JSON 文档后点击“导入”。
- **URL**：如果 Tampermonkey 无法检测（由于脚本 URL 检测失败或已禁用）用户脚本，则您可以在此处强制 Tampermonkey 从该 URL 导入脚本。

请注意，在进行导入和导出操作时，确保您了解所处理的数据类型和格式，并谨慎操作以避免数据丢失或损坏。如果您在导入或导出过程中遇到任何问题，请检查 Tampermonkey 的官方文档或寻求社区帮助。

## Chrome 扩展插件

**Q200: 即使已经安装了 Tampermonkey，是否仍然可以将脚本作为原生 Chrome 扩展进行安装？**

**A200: 是的，可以这样做。**

如果你已经安装了 Tampermonkey，但在某些情况下，你可能希望将脚本作为原生的 Chrome 扩展进行安装。实际上，这是可行的。当你点击某个脚本的安装链接时，Tampermonkey 会弹出一个提示框，询问你是否希望将该脚本安装在 Tampermonkey 中，还是作为原生的 Chrome 扩展进行安装。

这意味着，即使你已经拥有了 Tampermonkey 这一强大的用户脚本管理器，你仍然有选择将特定脚本作为原生 Chrome 扩展安装的权利。这样的设计为用户提供了更大的灵活性和选择权，使得他们可以根据自己的需求和偏好来管理脚本。

然而，需要注意的是，虽然可以将脚本作为原生 Chrome 扩展安装，但这并不意味着这样做总是最佳选择。Tampermonkey 作为一个专业的用户脚本管理器，提供了许多便捷的功能，如脚本的自动更新、运行状况速览、内置的编辑器等。因此，在大多数情况下，使用 Tampermonkey 来管理脚本可能是一个更明智的选择。

总的来说，即使安装了 Tampermonkey，你仍然可以选择将脚本作为原生 Chrome 扩展进行安装，但具体选择哪种方式取决于你的个人需求和偏好。

![ask_install](./assets/ask_install.png)

**Q203: Tampermonkey 扩展显示警告，这是为什么？**

**A203**: Tampermonkey 扩展显示警告通常是因为它检测到用户脚本试图修改 HTTP 请求头，如“user-agent”或“referer”，而同时有另一个扩展也在尝试修改这些请求头。这种冲突可能导致请求头被不正确地修改，从而引发警告。

具体来说，Tampermonkey 会检查用户脚本是否能够修改 HTTP 请求头。如果此时另一个扩展（如用户代理欺骗扩展或脚本阻止扩展，如 ScriptNo）也在修改同一请求，Tampermonkey 就会显示警告。

这种情况在以下两种设置中发生的频率会有所不同：

1. 当“允许脚本修改 HTTP 头”选项设置为“是”（默认设置）时，由于 Tampermonkey 默认允许用户脚本修改请求头，因此当与其他扩展发生冲突时，更容易触发警告。
2. 当该选项设置为“否”时，Tampermonkey 会阻止所有用户脚本修改请求头，从而避免了与其他扩展的冲突，因此警告通常不会出现。

为了解决这个问题，你可以尝试以下步骤：

- 检查并确认哪些扩展正在修改 HTTP 请求头。
- 考虑禁用或卸载那些与 Tampermonkey 可能产生冲突的扩展。
- 如果需要，调整 Tampermonkey 的设置，特别是关于 HTTP 请求头修改的选项。

请注意，这些步骤可能需要你根据自己的具体情况进行调整。如果你不确定如何操作，建议查阅 Tampermonkey 的官方文档或寻求社区的帮助。

![extension_failed_to_modify](./assets/extension_failed_to_modify.png)

**Q204: 如何允许 Tampermonkey 访问本地文件 URI？**

**A204**: 若要允许 Tampermonkey 访问本地文件 URI，你需要在 Google Chrome 或基于 Chromium 的浏览器中进行一系列设置。以下是详细步骤：

1. **打开 Google Chrome 浏览器**：
   确保你的电脑上已经安装了 Google Chrome 浏览器。

2. **进入扩展程序页面**：

   - 在浏览器的右上角，点击“更多”图标（三个点）。
   - 从下拉菜单中选择“更多工具”。
   - 点击“扩展程序”以打开浏览器的扩展程序页面（通常地址为 chrome://extensions/）。

3. **找到 Tampermonkey 扩展**：
   在扩展程序页面中，你会看到一个已安装扩展的列表。找到 Tampermonkey 扩展，它通常会显示在列表中。

4. **查看扩展详细信息**：

   - 在 Tampermonkey 扩展的右侧，点击“详细信息”链接。
   - 这将打开 Tampermonkey 扩展的详细信息页面。

5. **修改权限设置**：

   - 在详细信息页面中，滚动到“权限”部分。
   - 在这里，你会看到一个已授予扩展的权限列表。
   - 要启用文件访问，你需要勾选“允许访问文件 URLs”旁边的复选框。

6. **保存设置**：

   - 修改完权限后，确保点击了页面上的保存或应用更改按钮（如果有的话）。
   - 如果没有明确的保存按钮，更改通常会自动应用。

7. **重启浏览器（如果需要）**：
   - 在某些情况下，你可能需要重启浏览器才能使更改生效。

请注意，这些步骤是基于 Google Chrome 浏览器的标准界面和操作流程。如果你使用的是基于 Chromium 的其他浏览器（如 Microsoft Edge），步骤可能略有不同，但通常可以在类似的菜单和设置中找到相应的选项。

此外，允许 Tampermonkey 访问本地文件 URI 可能会带来安全风险，因为它允许扩展访问你计算机上的敏感文件。因此，在做出此更改之前，请确保你信任 Tampermonkey 扩展及其开发者，并了解可能的风险。

**Q205: 扩展数据存储在什么位置？**

A205：Google Chrome 扩展的数据存储位置因操作系统而异。在 Windows 上，数据存储在以下位置：

`C:\Users\[USERNAME]\AppData\Local\Google\Chrome\User Data\Default\Extensions\[EXTENSION_ID]`

请将`[USERNAME]`替换为登录计算机的用户名，将`[EXTENSION_ID]`替换为扩展的唯一 ID。此 ID 可在 Chrome 中扩展的详细信息页面的“ID”部分找到。

在 Linux 上，数据存储在以下位置：

`/home/[USERNAME]/.config/google-chrome/Default/Extensions/[EXTENSION_ID]`

同样，请将`[USERNAME]`替换为登录的用户名，将`[EXTENSION_ID]`替换为扩展的 ID。

在 MacOS 上，数据存储在以下位置：

`/Users/[USERNAME]/Library/Application Support/Google/Chrome/Default/Extensions/[EXTENSION_ID]`

在这里，请将`[USERNAME]`替换为当前用户的名称，将`[EXTENSION_ID]`替换为扩展的 ID。

请注意，数据的确切位置可能因您使用的操作系统和 Chrome 浏览器的具体版本而异。例如，`google-chrome`或`Google\Chrome`也可能为`chromium`、`Opera Next`或其他字符串，具体取决于您的浏览器。如果无法在上述位置找到数据，您可能需要在系统上手动搜索`Extensions`文件夹。

**Q206: Tampermonkey 告诉我我的 Chrome 配置文件已损坏。这是什么意思？**

A206：如果您的 Chrome 浏览器配置文件的扩展存储已损坏，您可以尝试以下步骤进行修复：

首先，备份您的浏览器配置文件文件夹。Q205 解释了如何访问它。

然后，打开 Google Chrome，并点击窗口右上角的“更多”图标（三个点）。从菜单中选择“更多工具”，然后点击“扩展程序”。

在扩展程序页面上，点击您想要删除的每个扩展旁边的“删除”按钮。这将从您的浏览器中删除扩展及其数据。

删除所有要删除的扩展后，关闭 Chrome 浏览器并重新启动计算机。

重新启动计算机后，再次打开 Chrome 浏览器并转到扩展程序页面。重新安装您在步骤 2 中删除的任何扩展。

如果问题仍然存在，您可以尝试创建一个新的 Chrome 配置文件。为此，请点击窗口右上角的“更多”图标，并选择“设置”。在设置页面上，滚动到底部并点击“高级”。

在“高级”部分中，点击“人员”部分，然后点击“添加人员”。按照提示在 Chrome 中创建一个新的用户配置文件。

创建新的配置文件后，您可以安装您的扩展并再次尝试使用它们。这应该能够修复您原始配置文件中损坏的扩展存储问题。

**Q207: 我的脚本不见了，Tampermonkey 抱怨说 Chrome 清除了扩展数据库。这是怎么回事？**

A207：为了解决 Q206 中描述的问题，Chrome 现在会尝试通过删除损坏的部分来自动更正任何损坏。根据损坏的严重程度，它可能会恢复一些数据，否则数据库将为空。由于这也会影响 Tampermonkey 的数据，因此它会尝试检测此过程，并通知您可能丢失全部或部分设置和脚本。

**Q208: 我的脚本只在几次重新加载后才执行，控制台输出 "pagejs missing"**

**A208** 这是由 Chromium 中的一个 bug 引起的，导致 篡改猴(Tampermonkey) 的内容脚本按错误的顺序运行。 不幸的是，顺序很重要，由于时间限制，无法等待其他内容脚本的时间比已经完成的更长。 这个 bug _"只"_ 在从之前的稳定版本更新到低于 4.18 版本时发生。 要解决此问题，请简单地执行以下操作：

- 禁用 篡改猴 扩展
- 重新启动浏览器（确保所有浏览器进程都已关闭，最好重新启动计算机）
- 启用 篡改猴 扩展
- 重新启动浏览器
- 禁用扩展似乎能够清理事物，内容脚本再次按正确的顺序执行。

如果仍然不起作用，请

- 导出您的设置和脚本（您可以尝试将它们导入 BETA 版本，以便保险一些），然后

- 重新安装 篡改猴 并

- 再次导入备份。

  **Q209: 开发者模式用于运行用户脚本**
  **A209** 对于使用基于 Chrome 浏览器的篡改猴（Tampermonkey）扩展的用户，启用开发者模式是根据 Manifest V3 更新引入的必要条件。
  为什么要启用开发者模式？
  由于用户脚本需要两步授权：userScripts 权限和开发者模式选项，因此必须启用开发者模式。 单独的 userScripts 权限在安装时不会触发用户警告。因此，这一额外步骤很可能反映了谷歌确保用户在运行使用用户脚本的扩展时能够做出明智选择的意图。

如何启用开发者模式
在 Chrome 及其衍生浏览器中启用开发者模式的步骤：

To enable Developer Mode in Chrome and derivates:

启用开发者模式的步骤
要在 Chrome 及其衍生浏览器中启用开发者模式：

**在桌面浏览器中：**

- 打开菜单，选择“扩展程序”和“管理扩展程序”，或者在新的浏览器标签页中输入 `chrome://extensions` 或 `edge://extensions` 以导航到扩展程序页面。

![chrome_extensions](./assets/chrome_extensions.jpg)

- 在右上角找到并点击“开发者模式”开关以启用它。

![](./assets/developer_mode.jpg)

**在 Microsoft Edge Android 中：**

- 按以下步骤操作

![edge_dev_mode](./assets/edge_dev_mode.jpg)

此操作使得通过篡改猴（Tampermonkey）使用`userScripts` API 成为可能。

## 安全

**Q300: Tampermonkey 能访问我访问的每一个网页！Tampermonkey 是邪恶的吗？**

**回答**：

Tampermonkey 并不邪恶，它和其他具有 HTTPS 和 HTTP 访问权限的 Chrome 扩展一样。这包括像 AdBlock、ScriptSafe、Avast Online Security 这样的扩展，以及任何作为原生 Chrome 扩展安装的用户脚本，因为它们在下载时并不会明确显示其访问权限。

如果你对此感兴趣，你可以在 Chrome 商店中搜索“此扩展可以访问”来查找每个扩展的右侧列中的访问信息。Tampermonkey 需要能够在每个页面上运行，因为它不知道你的用户脚本将在哪些页面上运行，因此它需要将脚本注入到每个页面中。

但你说得对，用户脚本和扩展可能会损害你的隐私和计算机安全。然而，我认为更糟糕的是，当作为原生扩展安装时，Chrome 并不会显示用户脚本想要在哪个页面上运行。从这一点来看，Tampermonkey 甚至可以为你带来一些安全保障，至少如果你相信我，我对你的数据不感兴趣。如果你不相信，你可以打开控制台（Ctrl-Shift-J），选择网络选项卡，来调查进行了哪些网络通信。

**Q301: Chrome 显示“危险：前方有恶意软件！”。Tampermonkey 被恶意软件感染了吗？**

**回答**：

不，Tampermonkey 没有被感染。Chrome 显示这条消息是因为选项页面尝试从一个 Google 怀疑有恶意的页面上加载 favicon（网站图标）。这仅仅意味着你安装了一个脚本，该脚本的 @includes 中包含了一个这样的恶意页面，而 Tampermonkey 从那里加载 favicon，以便给你一个你的脚本将在哪些页面上运行的概览。

![malware](./assets/malware.png)

为了解决这个问题，请配置另一个‘网站图标服务’，比如‘Google’或‘DuckDuckGo’。

**Q302: 如何设置用户脚本触发的下载？**

**回答**：

首先，请注意，将文件下载到您的硬盘可能与安全相关！一旦下载，恶意软件可能会轻易运行。因此，请确保您只允许下载非可执行文件。

要启用下载功能，您需要执行以下步骤（也可观看视频教程）：

1. 转到选项页面。
2. 滚动到“下载”部分。
3. 仔细检查“白名单文件扩展名”设置，确保不包含可执行文件的扩展名。
4. 在“下载模式”选项中选择“浏览器 API”。
5. 系统可能会弹出通知，您需要点击它，并在权限授予对话框中点击“确认”。

**注意**：尽管 GM_download 是一个强大的功能，但它最终只是为用户脚本作者提供了便利。

**Q303: Tampermonkey 说我的一个脚本被黑名单了。为什么？**

**回答**：

这可能是因为您将源代码 URL 添加到了“手动用户脚本和@require 黑名单”中，或者它已被添加到我维护的列表中。您可以在 GitHub 存储库中找到该列表以及被列入黑名单的原因。

如果您仍然希望脚本运行，那么您可以通过以下方式提高“严重级别”或禁用远程列表：

1. 转到选项页面。
2. 确保“配置模式”设置为初学者或更高。
3. 滚动到“黑名单检查”部分。
4. 修改“黑名单来源”或“严重级别”。

**注意**：如果您是脚本作者，并认为我犯了错误，那么只需给我发电子邮件或在 GitHub 上打开一个问题。

**Q304: 运行 Tampermonkey 需要哪些权限，以及为什么需要这些权限？**

**回答**：

Tampermonkey 需要以下权限。其中一些在某些浏览器中可能是可选的，并且只有在使用时才需要授予。

- “notifications”用于 GM_notification 和 Tampermonkey 相关通知。
- “tabs”用于查找活动标签页并导航、创建和关闭标签页。
- “idle”用于在您玩游戏时不显示更新通知。
- “webNavigation”用于安装用户脚本、检查 URL 以匹配脚本。
- “webRequest webRequestBlocking”用于安装用户脚本、检查 URL 以匹配脚本、修改 GM_xmlhttpRequest 的请求详情。
- “storage”用于存储您的用户脚本。
- “unlimitedStorage”用于存储大量用户脚本 🤓。
- “contextMenus”用于@run-at 上下文菜单。
- “chrome://favicon/”用于轻松获取页面的 favicon。
- “clipboardWrite”用于 GM_setClipboard。
- “cookies”用于 GM_xmlhttpRequest 和 GM_cookies。
- “<all_urls>”用于在每页上运行您的用户脚本并允许它们修改页面。
- “downloads”用于 GM_downloads 和存储 Tampermonkey 备份。

在 Chrome 中，这些权限转换为：

- 读取您的浏览历史记录（实际上，Tampermonkey 在安装后无法访问您的浏览器历史记录。打印过宽的警告可能是 Chrome 团队认为这样做比打印过平的警告更好。）
- 显示通知
- 修改您复制和粘贴的数据

在 Firefox 中，这些权限转换为：

- 访问您所有网站的数据
- 向剪贴板输入数据
- 下载文件并读取和修改浏览器的下载历史记录
- 向您显示通知
- 访问浏览器标签页
- 存储无限量的客户端数据
- 在导航期间访问浏览器活动

**Q305：我正在使用 Chrome，但篡改猴(Tampermonkey)无法卸载。我该怎么办？**
**A305**： Chrome 有一个["功能"](https://developer.chrome.com/extensions/external_extensions)，允许第三方软件（与篡改猴无关）在 Chrome 浏览器中安装扩展。 有合法的应用场景，例如需要安装扩展的桌面软件，但恶意软件也可以利用它。

因此，请检查[设置文件和/或 Windows 注册表](https://developer.chrome.com/extensions/external_extensions#registry)，并删除所有不需要的条目。

**如果篡改猴再次出现，则问题软件仍然在您的 PC 上！**

Windows 用户请[打开注册表编辑器](https://support.microsoft.com/en-us/help/4027573/windows-10-open-registry-editor)，并检查以下两个注册表键：

|               |                                                                    |
| ------------- | ------------------------------------------------------------------ |
| 32 位 Windows | `HKEY_LOCAL_MACHINE\Software\Google\Chrome\Extensions`             |
| 64 位 Windows | `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Google\Chrome\Extensions` |

篡改猴(Tampermonkey)的 ID 是`dhdgffkkebhmkfjojejmpbldmpobfkfo`。其他官方 ID 可以在[这里](https://www.tampermonkey.net/faq.php?ext=dhdg&updated=true&version=5.3.2#Q406)找到。

**重要：您应该绝对检查您的系统是否有恶意软件和病毒。**

## 高级

**Q400：如何查看和编辑用户脚本存储的值？**

A400：打开 Tampermonkey 的仪表板，点击脚本的名称。如果存在“存储”选项卡，则点击它以查看或根据需要修改存储的数据。如果没有“存储”选项卡，则表示该脚本尚未存储任何数据。
**Q401：Tampermonkey 使我的电脑变慢。我该怎么办？**

A401：这是一个由 Tampermonkey（以及 Greasemonkey）对 iframe 的支持所引起的已知问题。为了避免 Tampermonkey 在不希望的 iframe 中检查和运行脚本，你可以采取多种措施：

- 避免全局包含：尽量不要使用@include所有页面（http://* 和 https://*）的脚本，因为这些脚本将在每个标签页、每个框架和每个广告中运行。注意：Tampermonkey会在其站点列中通过此图标
<i class="fa fa-glfa-lg" aria-hidden="true"></i>来标记此类脚本。
- 使Tampermonkey不在社交按钮上运行：打开Tampermonkey的选项页面，确保“配置模式”至少设置为“初学者”，然后转到“设置”并扩展“黑名单页面”文本区域，如下所示：
  - *://apis.google.com/_/+1/*button*
  - *://www.facebook.com/plugins/*
  - *://platform.twitter.com/widgets/*
- 排除广告：你可以基于以下模式尝试自己的排除项：
  - *://*.doubleclick.*/*
  - *://*advertising*
  - *://*banner*

**Q402：我想使用外部编辑器来编辑我的脚本。这该如何实现？**
A402：有多种可能的方法：

- Chrome（及其衍生用户）可以导出并使用@require引入本地副本。打开Tampermonkey的仪表板，打开脚本并复制其内容。创建一个本地文件并粘贴内容。从Tampermonkey中的脚本中删除所有内容，除了“UserScript”头部。添加一个@require标签，其中包含你想要包含在脚本中的本地文件的路径。例如，如果文件位于C:\Users\[USERNAME]\Documents\myscript.js，你需要在脚本中添加以下行：
  - // @require file://C:/Users/[USERNAME]/Documents/myscript.js
  - 最后启用本地文件访问。
  - 你可以尝试TamperDAV。
  - 你可以尝试使用Tampermonkey Editors扩展在vscode.dev上编辑脚本。

**Q403：如何启用实验性的JavaScript功能？**

A403：这很简单。只需前往chrome://flags。
![unsafeWindow_flags](./assets/unsafeWindow_flags.png)

**Q404: 我应该使用什么@sandbox值？**

A404: @sandbox支持以下值：“raw”、“JavaScript”和“DOM”。

- “raw”访问模式意味着出于兼容性原因，脚本始终需要在页面上下文中运行。如果省略@sandbox，则此模式目前是默认设置。
- “JavaScript”访问模式意味着此脚本需要unsafeWindow访问。在Firefox中，会创建一个特殊上下文，该上下文应该能够绕过所有剩余的内容安全策略（CSP）问题。在其他浏览器中，将使用页面上下文作为回退。
- “DOM”访问模式意味着脚本只需要DOM，而不需要直接的unsafeWindow访问。如果启用，这些脚本将在扩展上下文或任何其他启用的上下文中执行（如果可用）。

还有配置可用于用户脚本的可用沙箱模式的选项。注意：任何启用“DOM”模式的选项都可能存在安全隐患。在扩展上下文中运行的用户脚本几乎拥有完整的扩展权限，甚至可以修改和安装新的用户脚本。

**Q405: Tampermonkey似乎在每个页面上都会运行，而不仅仅是那些应该运行脚本的页面。为什么？**

A405: 不幸的是，Chrome不允许在正确的时间向框架中注入代码。因此，Tampermonkey需要注入到每个页面中，因为只有预定义的内容脚本才会在文档开始时确保执行。注入后，它会询问主应用程序是否要在当前URL上运行脚本，如果没有，它会卸载自己以释放所有资源。你可以通过在Chrome的错误跟踪器中为此问题和相关问题添加星标来帮助改进这一点，并向Chrome开发人员表明此功能对你有多重要。

只需使用你的Google帐户登录，然后点击问题标题前面的星标即可。谢谢。

**Q406: 官方Tampermonkey版本**
A406: Tampermonkey支持多种浏览器，因此存在不同的Tampermonkey版本。以下是现有的版本：

| 名称                | ID                                 | 浏览器                                     | 来源                   | 备注                                                         |
| ------------------- | ---------------------------------- | ------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
| Tampermonkey        | dhdgffkkebhmkfjojejmpbldmpobfkfo   | Google Chrome, Opera, Microsoft Edge       | Chrome Web Store, crx  | MV3版本                                                      |
| Tampermonkey BETA   | gcalenpjmijncebpfijmoaglllgpjagf   | Google Chrome, Opera, Microsoft Edge       | Chrome Web Store, crx  | BETA版，MV3版本                                              |
| Tampermonkey        | iikmkjmpaadaobahmlepeloendndfphd   | Microsoft Edge                             | Microsoft Edge Add-ons | MV2版本，专为Microsoft Edge设计                              |
| Tampermonkey BETA   | fcmfnpggmnlmfebfghbfnillijihnkoh   | Microsoft Edge, Edge Canary                | Microsoft Edge Add-ons | BETA版，MV3版本，适用于Edge Canary                           |
| Tampermonkey        | firefox@tampermonkey.net           | Firefox, Firefox Android                   | Firefox Add-ons        | MV2版本，适用于Firefox及其Android版本                        |
| Tampermonkey BETA   | firefoxbeta@tampermonkey.net       | Firefox, Firefox Android                   | xpi                    | BETA版，MV2版本，适用于Firefox及其Android版本                |
| Tampermonkey        | mfdhdgbonjidekjkjmjaneanmdmpmidf   | Opera                                      | Opera Add-ons          | MV2版本，专为Opera设计                                       |
| Tampermonkey Legacy | lcmhijbkigalmkeommnijlpobloojgfn   | Google Chrome, Opera, Microsoft Edge, Kiwi | Chrome Web Store, crx  | 遗留版，MV2版本，适用于多种浏览器                            |
| Tampermonkey Legacy | bnimknkampfeeemccidiigealnpoheap** | Google Chrome, Opera, Microsoft Edge       | crx                    | 另一个遗留版，MV2版本，适用于多种浏览器（注意：ID末尾可能有截断，应为完整ID） |
| Tampermonkey        | net.tampermonkey.SafariWebExt      | Safari, Safari iOS                         | App Store              | 适用于Safari及其iOS版本的扩展                                |
| Tampermonkey        | net.tampermonkey.SafariApp         | Safari                                     | Mac App Store          | 适用于Mac上的Safari应用的版本，注意需要手动安装下载的文件    |

**备注**：
- MV2和MV3分别代表Manifest V2和Manifest V3，是Chrome扩展的不同版本标准。
- 下载的文件可能需要手动安装，特别是在非Chrome Web Store或Firefox Add-ons等官方商店下载的情况下。
- ID可能因版本更新而有所变化，请以官方商店或Tampermonkey官方网站上的最新信息为准。

移动设备用户可以简单地：

- 扫描此二维码以在iOS设备上获取Tampermonkey（但请注意，由于iOS系统的限制，Tampermonkey可能无法直接作为浏览器扩展安装，此二维码可能导向一个替代方案或说明页面）。

- 或者，扫描此二维码以在Android设备上安装包含Tampermonkey的Microsoft Edge浏览器。

- ……或者，扫描此二维码以安装Firefox Android浏览器，并再次扫描（可能是同一页面上的另一个二维码或后续步骤中的二维码）以在Firefox Android上安装Tampermonkey。

**注意**：由于应用商店政策和浏览器更新，上述安装方法可能会有所变化。请确保从可信来源获取二维码，并遵循最新的安装指南。

![qr](./assets/qr.jpg)

**Q407: 如何从安装包安装Tampermonkey**

A407: Tampermonkey有多个安装包可供选择。请查看Q406以获取更多关于如何获取这些安装包的信息。

- **Chrome**：
  1. 下载CRX文件（例如，从此处显示的链接）。
  2. 在浏览器中打开扩展页面（chrome://extensions）。
  3. 在右上角启用“开发者模式”开关。
  4. 将下载的CRX文件拖放到扩展页面上。

- **Microsoft Edge**：
  1. 下载CRX文件（例如，从此处显示的链接）。
  2. 在浏览器中打开扩展页面（edge://extensions）。
  3. 在页面左侧启用“开发者模式”开关。
  4. 将下载的CRX文件拖放到扩展页面上。

- **Opera**：
  1. 下载CRX文件（例如，从此处显示的链接）。
  2. 在浏览器中打开扩展页面（opera://extensions）。
  3. 在右上角启用“开发者模式”开关。
  4. 将下载的CRX文件拖放到扩展页面上。
  5. 在列表中找到扩展并点击“安装”按钮，然后按照安装说明操作。

- **Firefox**：
  1. 下载XPI文件（例如，从此处显示的链接）。
  2. 在浏览器中打开插件页面。
  3. 将下载的XPI文件拖放到插件页面上。
  4. 如果Firefox未处于焦点状态，请将其置于焦点状态，并按照安装说明操作。

**Q408: 如何继续使用Tampermonkey的Manifest V2版本**

A408: 您可能希望继续使用Tampermonkey的Manifest V2版本的原因有很多。例如，您可能有一个与Tampermonkey最新版本不兼容的用户脚本，或者您的浏览器可能不支持Tampermonkey的最新版本。以下是继续使用Tampermonkey Manifest V2版本的步骤：

- **下载安装包**：
  - 以下是安装包列表，包括名称、ID、支持的浏览器和链接。
    - Tampermonkey（ID：dhdgffkkebhmkfjojejmpbldmpobfkfo）：支持Google Chrome、Opera、MS Edge（CRX格式）。
    - Tampermonkey Legacy（ID：lcmhijbkigalmkeommnijlpobloojgfn）：支持Google Chrome、Opera、MS Edge（CRX格式，来自Chrome Web Store）。
    - Tampermonkey Legacy（ID：bnimknkampfeeemccidiigealnpoheap*，未由官方商店签名）：支持Google Chrome、Opera、MS Edge（CRX格式）。

- **注意**：如果您在Chrome浏览器版本120或更高版本上安装Tampermonkey版本ID为dhdg的扩展，您需要以某种方式禁用自动更新（链接，链接）。否则，Tampermonkey将自动更新到最新的Manifest V3版本。

- **安装**：
  - 如果您使用的是未由官方商店签名的Tampermonkey版本，您需要在浏览器扩展页面的右上角启用“开发者模式”开关。然后，按照Q407中的说明将下载的CRX文件拖放到扩展页面上。

- **启用Manifest V2**：
  - 此外，如果您使用的是Chrome浏览器版本120或更高版本，您需要启用ExtensionManifestV2Availability。
    - **Windows**：可以通过为Chrome创建快捷方式并在目标字段中添加`--enable-features=ExtensionManifestV2Availability`，或者在命令提示符中运行`chrome.exe --enable-features=ExtensionManifestV2Availability`。另外，还可以通过添加注册表项来启用。
    - **macOS**：在终端中运行`open -a "Google Chrome" --args --enable-features=ExtensionManifestV2Availability`，或者查看此链接以获取替代解决方案。
    - **Linux**：在终端中运行`google-chrome --enable-features=ExtensionManifestV2Availability`，或者将名为ExtensionManifestV2Availability.json的策略文件添加到相应目录中，并添加以下内容：`{"ExtensionManifestV2Availability": true}`。

## 支持开发

- **Q500**：XYZ是我的母语。我如何将Tampermonkey翻译成XYZ语言？
  - A500：非常感谢！这很简单。只需从Github克隆或分叉i18n存储库，应用您的更改，然后将文件发送给我或创建一个拉取请求。有关扩展国际化的更多信息，可以在Google的扩展开发文档中找到。提示：您可以附加一个名为about.txt的附加文件，该文件从现在开始将与扩展一起提供。

- **Q501**：我的母语已受支持，而且我不会写JavaScript。我该如何支持您？
  - A501：您可以使用Tampermonkey并报告发现的错误，做出小贡献，或在此处为Tampermonkey打出5星评分。谢谢。😅

## 调试

- **Q600：我在哪里可以找到Tampermonkey的控制台输出？**
  
  A600：在获取输出之前，您必须启用调试输出。只需点击Tampermonkey图标，选择“仪表板”，选择“设置”选项卡，并将“日志级别”设置为“调试”。（视频教程）Tampermonkey可能会向三个不同的控制台写入日志消息。首先是背景页控制台，可以通过以下方式访问：在Google Chrome中，通过点击右上角的“更多”图标（三个点），选择“更多工具”，然后点击“扩展程序”来打开扩展页面。在扩展页面上，找到要访问背景页控制台的扩展，并点击其名称右侧的“详细信息”链接。在扩展的详细信息页面上，点击“检查视图”部分下的“背景页”链接。这将在新窗口或标签页中打开背景页。（视频教程）在Firefox中，通过点击右上角的“更多”图标（三条横线），选择“附加组件和主题”。点击右上角的齿轮图标并选择“调试附加组件”。在调试页面上找到Tampermonkey条目并点击“检查”。最后选择“控制台”选项卡。第二个是选项页控制台，可以通过右键点击Tampermonkey图标并选择“仪表板”来打开。在新标签页中按“Ctrl-Shift-J”或“F12”并选择“控制台”选项卡。最后但同样重要的是，每个网页都有一个控制台，可以通过在查看页面时按“Ctrl-Shift-J”来打开。（视频教程）

