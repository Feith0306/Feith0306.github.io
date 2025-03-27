---
author: "Tianhao Fei"
title: "解决github端口连接问题"
date: "2025-03-27"
description: "这个文档用于解决github端口连接报错。"
tags: ["github"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
ShowBreadCrumbs: false
ShowToc: true
TocOpen: true
cover:
  image: images/gitbash.jpg
---

## :rocket: 一、问题描述
 以前从本地 `pull/push` 文件向 `github` 远程操作时，没有任何问题，今天操作出现如下报错：
```
bash
$ git pull
ssh: connect to host github.com port 22: Connection refused
fatal: Could not read from remote repository.
​
Please make sure you have the correct access rights
and the repository exists.
```
提示链接 `github` 的 `22` 端口被拒绝。

## :zap: 二、解决方案
  - 修改 `SSH` 的 `config` 文件。在 `C:\Users\用户名\.ssh` 目录下，新建一个名为 `config` 的文件，内容如下：（如果目录下有 `config` 文件，直接在文件里添加即可）
```
Host github.com
  HostName github.com
  Port 443
```
切换端口为`443`。
  - 打开 `Git Bash`，输入以下命令，测试连接：
```
ssh -T git@github.com
```
  - 如果连接成功，会显示以下信息：
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```
  - 重新 `pull/push` 代码即可。

## :dart: 三、报错原因
  - 可能是因为 `SSH` 的 `config` 文件中配置的端口与实际使用的端口不一致。
  - 用了 `VPN` 导致的网络配置问题。