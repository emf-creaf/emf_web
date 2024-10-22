---
title: "meteospain 0.2.0 is available!"
authors: ["emf"]
date: 2024-10-22
lastmod: 2024-10-22
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteospain"
  url_docs: "https://emf-creaf.github.io/meteospain/"

image:
  caption: 'meteospain R package updated to 0.2.0'
  
summary: "`meteospain` R package, for accessing the Spanish meteorology stations data, has been updated to version 0.2.0, fixing new access to MeteoClimatic as well as improvements in MeteoCat and AEMET returned data."  
---

`meteospain`, the R package to access data of Spanish meteorology stations, reachs version
*0.2.0*.  
**MeteoClimatic** API access has been fixed and now works again. **MeteoCat**
instant and hourly time scales now return more variables. **AEMET** daily data now
return the relative humidity also. Sadly, **AEMET** has updated the limits to 15
days instead of 30, so the docs now reflect that change.

Don't forget to check the [docs](https://emf-creaf.github.io/meteospain/) for a full guide into using
`meteospain`.

*Featured image has been created with the amazing [aRtsy R package](https://koenderks.github.io/aRtsy/)*