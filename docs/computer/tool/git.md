# git

## git 下载
官网下载（）下一步就好了

## git 配置


## Git常用命令
```js
git remote update
git status
git checkout src/main/resources/root.account  放弃更改的文件
git add .
git commit -m 'feat:xxx'
git push origin feat/external-ns
git commit --amend     第二次后提交，使用amend
git push origin feat/external-ns -f 尽量不要用 -f
git checkout  feat/qfl_authority  切换分支
git branch -D qfl-dev    删除分支
git reset a.txt     取消add
git reset --soft HEAD^   取消commit，不删除工作空间改动代码，不撤销git add 【后续重新git commit即可】
git reset --soft HEAD^   取消push
git rebase  --abort   取消rebase
git reset --merge     error：you need to resolve your current index first
临时文件保存 git stash
git stash              保存当前末commit的代码
git stash save "内容"    保存当前未commit的代码并添加备注
git stash pop      恢复最近的暂存内容，删除记录
git stash pop stash@{0} 恢复指定的暂存内容
git stash list         列出stash的所有记录
git stash clear              删除stash的所有记录
git stash apply     恢复最近的暂存内容，不删除记录
git stash drop                删除最近的一次stash
分支管理 git tag
git tag         列出本项目所有tag标签
git show v1.4        列出指定tag标签信息
git tag -a v1.4 -m "my version 1.4"   创建tag标签
git push origin v1.4      推送指定tag标签
git push origin tags      推送所有tags标签
git tag -d v1.4       删除指定tag标签
git branch        查看本地分支
git branch -r        查看远程分支
git branch -a        查看本地+远程分支
git branch -D feat/testA     删除本地分支feat/testA
git push origin -d feat/testA    删除远程分支feat/testA
git merge feat/testA     当前分支合并分支feat/testA
本分支取消某个commit,如果后续没有基于该commit开发最好，如果有需要解决冲突,最好从最后一个commit一一回滚撤销
git revert 61db6174

git remote add trunk http://101.37.2xxx
```