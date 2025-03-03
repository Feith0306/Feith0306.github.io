---
author: ["Tianhao Fei"]
title: "Explanation of .bat files"
date: "2025-03-03"
# description: "Sample article showcasing basic code syntax and formatting for HTML elements."
summary: "Sample article showcasing basic code syntax and formatting for HTML elements."
tags: ["markdown", "syntax", "code", "gist"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
ShowToc: true
TocOpen: true
cover:
  image: images/batch.jpg
---

## :monocle_face: What is the file with the suffix ".bat" ? 

- The document with the suffix ".bat" is a batch file. It is a type of **executable** file that contains a series of commands that are executed by the operating system. Batch files are commonly used to automate tasks that involve multiple commands. They are often used to **install** software, **configure** system settings, or **perform** other tasks that require multiple steps.

## :rocket: Example:
**Here is an example of a batch file that adds the "Open with VS code" option to the Windows right-click menu, allowing users to right-click directly on the folder or its background (blank space) and open the folder in VS Code.**
```
@echo off
REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code" /ve /t REG_SZ /d "open here with VS Code" /f
REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command" /ve /t REG_SZ /d "\"E:\VS code\Microsoft VS Code\Code.exe\" \"%%V\"" /f
echo VS Code Successful！
pause
```

- :telephone_receiver: **`@echo off`** 
First line of the above code **turns off** the echo of the command line window to prevent it from appearing on the screen every time a command is **executed**, making the interface cleaner.<p style="margin-bottom:40px;">



- :desktop_computer: **`REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code" /ve /t REG_SZ /d "open here with VS Code" /f`** 
Add a key or value to the Windows Registry.
  - :mag: **`KEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code`** : Create **a new option** "Open with VS Code" in the right-click menu of Windows Explorer.
  - :mag: **`/ve`** : Create a **default** value (unnamed key value).
  - :mag: **`/t REG_SZ`** : Set the data type of the value as **REG_SZ** (a *string*). 
  - :mag: **`/d "open here with VS Code"`** : Set the value of the registry, which is the text displayed (**open here with VS Code**) in the right-click menu.
  - :mag: **`/f`** : Force the operation to **overwrite** any existing key or value.
  <p style="margin-bottom:40px;">

- :desktop_computer: **`REG ADD "HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command" /ve /t REG_SZ /d "\"E:\VS code\Microsoft VS Code\Code.exe\" \"%%V\"" /f`**
  - :mag: **`HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VS Code\command`**: Define the command to be executed after clicking on a menu item.
  - :mag: **`"E:\VS code\Microsoft VS Code\Code.exe"`**: The executable file **path of VS Code**.
  - :mag: **`"%%V"`**: The **current folder path**, which is the directory where user right-clicks.
  <p style="margin-bottom:40px;">

- :desktop_computer: **`echo VS Code Successful！`**
  - :mag: Display a prompt in the command line window, informing the user that the registry is successfully modified.

## :file_folder: Operation effect 
- :point_up_2: Right-click the folder or blank space inside the folder, select "Open with VS Code".
![right-click1](/images/operation1.jpg)
![right-click2](/images/operation2.jpg)