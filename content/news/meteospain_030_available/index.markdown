---
title: "meteospain 0.3.0 is out!"
authors: ["emf"]
date: 2025-11-13
lastmod: 2025-11-17
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteospain"
  url_docs: "https://emf-creaf.github.io/meteospain/"

image:
  caption: 'meteospain R package updated to version 0.3.0'
  
summary: "`meteospain` R package, a library designed for accessing the Spanish meteorology stations data, has been updated to version 0.3.0, improving meteo API connection and updating core dependencies"  
---

`meteospain`, the R package to access data of Spanish meteorology stations, reachs version
*0.3.0*.  
This update migrates the package from using `httr` to `httr2`, a modern library to
access online resources and connecting to APIs. This means that now connections to AEMET, MeteoCat
and the rest of Spanish metereological APIs are better managed and different APIs reponses
(errors, messages) are now properly processed (request limits, missing data...).

Don't forget to check the [docs](https://emf-creaf.github.io/meteospain/) for a full guide into using
`meteospain`.

*Featured image has been created with the amazing [aRtsy R package](https://koenderks.github.io/aRtsy/)*