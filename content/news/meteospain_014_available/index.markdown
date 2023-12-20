---
title: "meteospain 0.1.4 is available!"
authors: ["emf"]
date: 2023-12-20
lastmod: 2023-12-20
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteospain"
  url_docs: "https://emf-creaf.github.io/meteospain/"

image:
  caption: 'meteospain R package updated to 0.1.4'
  
summary: "`meteospain` R package, for accessing the Spanish meteorology stations data, has been updated to version 0.1.4, fixing a bug that misplaced RIA meteo stations coordinates."  
---

`meteospain`, the R package to access data of Spanish meteorology stations, reachs version
*0.1.4*. Now *MeteoCat* data can be retrieved starting on 1989 (previously only data starting at 2008 was available).  
Also, this new version fixes a bug in the RIA coordinates processing, that resulted in misplaced stations for this service.
If you are using RIA meteo data from `meteospain`, we recommend you to update the package as soon as possible.

Don't forget to check the [docs](https://emf-creaf.github.io/meteospain/) for a full guide into using
`meteospain`.
