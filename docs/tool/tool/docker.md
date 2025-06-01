# Docker 常用命令大全

## 1. 帮助类启动命令

- **启动 Docker**: `systemctl start docker`
- **停止 Docker**: `systemctl stop docker`
- **重启 Docker**: `systemctl restart docker`
- **查看 Docker 状态**: `systemctl status docker`
- **开机启动**: `systemctl enable docker`
- **查看 Docker 概要信息**: `docker info`
- **查看 Docker 总体帮助文档**: `docker --help`
- **查看具体命令帮助文档**: `docker <具体命令> --help`

## 2. 镜像命令

### 2.1 列出本地主机上的镜像

```bash
docker images
```
各个选项说明:

- **REPOSITORY**: 镜像的仓库源
- **TAG**: 镜像的标签版本号
- **IMAGE ID**: 镜像 ID
- **CREATED**: 镜像创建时间
- **SIZE**: 镜像大小

同一仓库源可以有多个 TAG 版本，使用 `REPOSITORY:TAG` 来定义不同的镜像。

选项说明：
- `-a`: 列出本地所有的镜像（含历史映像层）
- `-q`: 只显示镜像 ID。

### 2.2 搜索镜像

官方搜索网址: Docker Hub

```bash
docker search [OPTIONS] <镜像名字>
```
选项说明：
- `--limit`: 只列出 N 个镜像，默认 25 个

### 2.3 拉取（下载）镜像

```bash
docker pull <镜像名字>[:TAG]
```
没有 TAG 就是最新版，等价于：

```bash
docker pull <镜像名字>:latest
```

### 2.4 查看镜像

```bash
docker system df
```

### 2.5 删除镜像

```bash
docker rmi <镜像名字或ID>
```
删除方式：
- 删除单个:

```bash
docker rmi -f <镜像ID>
```
- 删除多个:

```bash
docker rmi -f <镜像名1:TAG> <镜像名2:TAG>
```
- 删除全部:

```bash
docker rmi -f $(docker images -qa)
```

## 3. 容器命令

### 3.1 新建 + 启动命令

```bash
docker run [OPTIONS] <IMAGE> [COMMAND] [ARG...]
```
选项说明（常用）：
- `--name="容器新名字"`: 为容器指定一个名称
- `-d`: 后台运行容器并返回容器 ID
- `-i`: 以交互模式运行容器，通常与 `-t` 同时使用
- `-t`: 为容器重新分配一个伪输入终端，通常与 `-i` 同时使用
- `-P`: 随机端口映射

示例：使用镜像 `centos:latest` 以交互模式启动一个容器:

```bash
docker run -it centos /bin/bash
```

### 3.2 列出当前所有正在运行的容器

```bash
docker ps [OPTIONS]
```
选项说明（常用）：
- `-a`: 列出所有容器（包括历史上运行过的）
- `-l`: 显示最近创建的容器
- `-n`: 显示最近 n 个创建的容器
- `-q`: 静默模式，只显示容器编号

### 3.3 退出容器

- exec 退出: `exit` 会停止容器
- `ctrl+p+q`: 退出容器但不停止

### 3.4 启动已停止运行的容器

```bash
docker start <容器ID或容器名>
```

### 3.5 重启容器

```bash
docker restart <容器ID或容器名>
```

### 3.6 停止容器

```bash
docker stop <容器ID或容器名>
```

### 3.7 强制停止容器

```bash
docker kill <容器ID或容器名>
```

### 3.8 删除已停止的容器

```bash
docker rm <容器ID>
```
一次性删除多个容器实例:

```bash
docker rm -f $(docker ps -a -q)
```

## 4. 实操示例

### 4.1 启动守护式容器

```bash
docker run -d <容器名>
```

### 4.2 查看容器日志

```bash
docker logs <容器ID>
```

### 4.3 查看容器内运行的进程

```bash
docker top <容器ID>
```

### 4.4 查看容器内部细节

```bash
docker inspect <容器ID>
```

### 4.5 进入容器内部

使用 exec 进入容器:

```bash
docker exec -it <容器ID> bash
```

使用 attach 进入容器:

```bash
docker attach <容器ID>
```

### 4.6 从容器内拷贝文件到主机上

```bash
docker cp <容器ID>:<容器内路径> <目的主机路径>
```

### 4.7 导入和导出容器

导出容器:

```bash
docker export <容器ID> > <文件名>.tar
```

导入容器:

```bash
cat <文件名>.tar | docker import - <镜像用户>/<镜像名>:<镜像版本号>
```