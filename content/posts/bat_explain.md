---
author: ["Tianhao Fei"]
title: "Explanation of .bat files"
date: "2025-03-03"
description: "这个文档简要介绍了 .bat 文件的作用，以及如何 .bat 文件右击在 VS code 中打开文件夹。"
summary: "这个文档简要介绍了 .bat 文件的作用，以及如何 .bat 文件右击在 VS code 中打开文件夹。"
tags: ["VS code"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
ShowToc: true
TocOpen: true
cover:
  image: images/batch.jpg
---

## :monocle_face: What is the file with the suffix ".bat" ? 

- 后缀为“.bat”的文档是一个批处理文件。它是一种**可执行**文件，其中包含由操作系统执行的一系列命令。批处理文件通常用于自动化涉及多个命令的任务。它们通常用于**安装**软件、**配置**系统设置或**执行**其他需要多个步骤的任务。
## :rocket: Example
**这是一个批处理文件的示例，它将“open with VS code”选项添加到Windows右键菜单中，允许用户直接右键单击文件夹或其背景（空白），并在 VS code 中打开文件夹。**
```
@echo off
REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code" /ve /t REG_SZ /d "open here with VS Code" /f
REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command" /ve /t REG_SZ /d "\"E:\VS code\Microsoft VS Code\Code.exe\" \"%%V\"" /f
echo VS Code Successful！
pause
```

- :telephone_receiver: **`@echo off`** 
上述代码的第一行**关闭**命令行窗口的响应，以防止每次**执行命令**时它出现在屏幕上，使界面更清晰。<p style="margin-bottom:40px;">



- :desktop_computer: **`REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code" /ve /t REG_SZ /d "open here with VS Code" /f`** 
将键或值添加到Windows注册表。
  - :mag: **`KEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code`** : 在Windows资源管理器的右键菜单中创建一个新选项“open with VS code”。
  - :mag: **`/ve`** : 创建一个默认值（未命名键值）。
  - :mag: **`/t REG_SZ`** : 将值的数据类型设置为**REG_SZ**（*字符串*）。
  - :mag: **`/d "open here with VS Code"`** : 设置注册表的值，即右键菜单中显示的文本（**open here with VS code**）。
  - :mag: **`/f`** : 强制操作**覆盖**任何现有键或值。
  <p style="margin-bottom:40px;">

- :desktop_computer: **`REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command" /ve /t REG_SZ /d "\"E:\VS code\Microsoft VS Code\Code.exe\" \"%%V\"" /f`**
  - :mag: **`HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command`**: 定义单击菜单项后要执行的命令。
  - :mag: **`"E:\VS code\Microsoft VS Code\Code.exe"`**: VS code 的可执行文件路径。
  - :mag: **`"%%V"`**: **当前**文件夹路径，即用户右键单击的文件夹。
  <p style="margin-bottom:40px;">

- :desktop_computer: **`echo VS Code Successful！`**
  - :mag: 在命令行窗口中显示提示，表明注册表已成功修改。

## :file_folder: Operation effect 
- :point_up_2: Right-click the folder or blank space inside the folder, select "Open with VS Code".
![right-click1](/images/operation1.jpg)
![right-click2](/images/operation2.jpg)