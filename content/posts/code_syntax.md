---
author: ["Tianhao Fei"]
title: "VS code 编译 .tex 文件"
date: "2025-03-04"
description: "这个文档用于说明如何在使用 VS code 编译 .tex 文件。"
summary: "这个文档用于说明如何在使用 VS code 编译 .tex 文件。"
tags: ["markdown", "VS code", "Latex"]
categories: ["themes", "syntax"]
series: ["Themes Guide"]
ShowToc: true
TocOpen: true
cover:
  image: images/vscode.jpg
---

## 1. 安装 VS code 插件：`Latex Workshop`

:rocket: 在 VS code 扩展商店中找到 [Latex Workshop](https://github.com/James-Yu/LaTeX-Workshop/wiki/Compile#placeholders) 插件（如下），安装即可。
![LatexWorkshop](/images/LatexWorkshop.jpg)

## 2. 打开一个 `.tex` 文件
:robot: 可以看到 VS code 已经自动高亮文档内容
![latex](/images/latex.jpg)

## 3. 配置 Latex Workshop
- :mag: 按 `F1`，搜索`setjson`，打开配置文件
![setjson](/images/setjson.jpg)
- :mag: 可以看到在项目中生成了`.vscode`文件夹，在其中打开`settings.json`文件，添加如下代码：
```
{
    "latex-workshop.latex.autoBuild.run": "never",        # 从不自动编译
    "latex-workshop.showContextMenu": true,               # 显示右键菜单，出现"Build Latex Project"选项
    "latex-workshop.intellisense.package.enabled": true,  # 启用包自动完成
    "latex-workshop.message.error.show": false,           # 不显示错误信息（从终端获取）
    "latex-workshop.message.warning.show": false,         # 不显示警告信息（从终端获取）
    "latex-workshop.latex.tools": [
        {
            "name": "xelatex",
            "command": "xelatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"
            ]
        },
        {
            "name": "pdflatex",
            "command": "pdflatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOCFILE%"                                # 文件所在路径可以为中文，若为"%DOC"则不可有中文
            ]
        },
        {
            "name": "latexmk",
            "command": "latexmk",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "-pdf",
                "-outdir=%OUTDIR%",
                "%DOCFILE%"
            ]
        },
        {
            "name": "bibtex",
            "command": "bibtex",
            "args": [
                "%DOCFILE%"
            ]
        }
    ],
    "latex-workshop.latex.recipes": [
        {
            "name": "XeLaTeX",
            "tools": [
                "xelatex"
            ]
        },
        {
            "name": "PDFLaTeX",
            "tools": [
                "pdflatex"
            ]
        },
        {
            "name": "BibTeX",
            "tools": [
                "bibtex"
            ]
        },
        {
            "name": "LaTeXmk",
            "tools": [
                "latexmk"
            ]
        },
        {
            "name": "xelatex -> bibtex -> xelatex*2",
            "tools": [
                "xelatex",
                "bibtex",
                "xelatex",
                "xelatex"
            ]
        },
        {
            "name": "pdflatex -> bibtex -> pdflatex*2",
            "tools": [
                "pdflatex",
                "bibtex",
                "pdflatex",
                "pdflatex"
            ]
        },
    ],
    "latex-workshop.latex.clean.fileTypes": [
        "*.aux",
        "*.bbl",
        "*.blg",
        "*.idx",
        "*.ind",
        "*.lof",
        "*.lot",
        "*.out",
        "*.toc",
        "*.acn",
        "*.acr",
        "*.alg",
        "*.glg",
        "*.glo",
        "*.gls",
        "*.ist",
        "*.fls",
        "*.log",
        "*.fdb_latexmk"
    ],
    "latex-workshop.latex.autoClean.run": "onFailed",                       # 编译失败时自动清理上述类型的辅助文件（"OnBuilt":无论编译是否成功，都清除辅助文件；"never":无论编译是否成功，都不清除）
    "latex-workshop.latex.recipe.default": "lastUsed",                      # 编译时使用上次使用的编译方式
    "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click"   # 点击 pdf 可以跳转到相应代码位置
}
```

## 4. 设置编译快捷键（可选）
- :mag: 左下角打开设置 -> `Keyboard Shortcut`-> 搜索`recipe` -> 双击中间的`When` -> 按下想要使用的快捷键
- :mag: 选择编译方式
![compile](/images/compile.jpg)
- :mag: **直接运行`.tex`文件也可以编译**


## 5. 测试
![test](/images/test.jpg)
