# Git 使用手册

## 一、Git 安装

首先，访问 [Git官网](https://git-scm.com/) 下载对应系统的安装包。根据您的操作系统选择合适的版本，下载完成后按照提示一步步安装即可。



## 二、Git 配置

> 添加用户配置、SSH 配置等内容。



## 三、常用命令速查表

### 基础操作

为了开始使用Git，您需要了解一些基础命令。例如：

查看远程仓库更新可以使用 `git remote update`

检查当前状态用 `git status`

如果想要放弃某个文件的修改，请使用 `git checkout src/main/resources/root.account`

要将所有改动添加到暂存区，请输入 `git add .`

并使用 `git commit -m 'feat:xxx'` 提交代码并附上备注。

最后，通过 `git push origin feat/external-ns` 推送本地分支到远程仓库。

### 进阶提交与修改

在进阶操作中，如果您想修改最近一次提交而不改变其信息，可以使用 `git commit --amend`

请注意尽量避免使用 `-f` 参数进行强制推送(`git push origin feat/external-ns -f`)

因为它可能会覆盖他人的工作。当遇到合并冲突时，取消该操作可使用 `git rebase --abort`

### 分支管理

**Git的强大之处在于它的分支管理系统**


切换分支可以用 `git checkout feat/qfl_authority`

查看本地分支列表请输入 `git branch`

查看远程分支则用 `git branch -r`

若想查看本地和远程的所有分支，则使用 `git branch -a`

删除本地分支命令为 `git branch -D qfl-dev`

而删除远程分支则需执行 `git push origin -d feat/testA`

合并指定分支到当前分支的命令是 `git merge feat/testA`

### 回退与撤销

对于回退或撤销操作，如需取消对某个文件的 `add` 操作，可以使用 `git reset a.txt`

取消最后一次 `commit` 并保留工作区改动的命令是 `git reset --soft HEAD^`。此外，撤销已 `push` 的提交同样适用此命令

针对特定的提交进行撤销，推荐使用 `git revert 61db6174`，特别是在有后续开发的情况下

### 临时保存工作区内容（Stash）

**有时你可能需要暂时保存未完成的工作，这时可以利用Git的stash功能**

保存当前未提交的改动很简单，只需运行 `git stash`

如果希望给这次保存添加备注，则使用 `git stash save "内容"`

恢复最近一次保存的内容并同时删除记录的命令是 `git stash pop`，也可以通过 `git stash pop stash@{0}` 来恢复指定的暂存内容

若仅想恢复最近一次保存的内容但不删除记录，则应使用 `git stash apply`

删除最近一次暂存记录可用 `git stash drop`

查看所有暂存记录则是 `git stash list`

清空所有暂存记录请执行 `git stash clear`

### 标签管理（Tag）

**标签（Tags）通常用于标记发布版本**

查看所有标签可以通过 `git tag` 实现

而查看指定标签的详细信息则需运行 `git show v1.4`

创建带备注的新标签，比如 `v1.4`可以使用 `git tag -a v1.4 -m "my version 1.4"`

推送单个标签至远程仓库的命令是 `git push origin v1.4`

而推送所有标签则需执行 `git push origin tags`

删除本地标签的操作为 `git tag -d v1.4`

### 其他常用操作

除了上述提到的功能外，还有其他实用的Git命令。例如，给远程仓库设置别名可以通过 `git remote add trunk http://101.37.2xxx` 实现。

---

## 四、注意事项

- **避免使用 `-f` 强制推送**，这可能会覆盖他人提交。
- 在多人协作环境中，使用 `git revert` 比 `git reset` 更安全。
- 使用 `git stash` 保存临时更改前，请确认没有重要未保存的工作。