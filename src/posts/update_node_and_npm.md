---
title: "Обновление версий node и npm на Linux/MacOS"
description: "Этот пост о том как обновить версии node и npm на Linux/MacOS"
date: "2024-05-29"
tags: ["nodejs", "guide"]
---

## Как обновить версии node и npm на Linux/MacOS?

Сначала открываем терминал и смотрим какая сейчас установлена версия:

Для Node JS:

```bash
$ node -v
v12.13.0
```

Для npm:

```bash
$ npm -v
6.12.1
```

Обновляем версию nodeJS:

```bash
sudo npm cache clean -f
sudo npm i -g n
sudo n stable
```

Обновляем версию менеджера пакетов NPM:

```bash
sudo npm i -g npm@latest
```
