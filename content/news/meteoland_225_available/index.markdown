---
title: "meteoland 2.2.5 is available!"
authors: ["emf"]
date: 2025-12-16
lastmod: 2025-12-16
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteoland"
  url_code: "https://emf-creaf.github.io/meteoland/"

image:
  caption: 'meteoland R package bumped to 2.2.5'
  
summary: "`meteoland` R package, which provides utilities to estimate daily weather variables at any position over complex terrains has been updated to version `2.2.5`"  
---

`meteoland` R package, which provides utilities to estimate daily weather variables at any position over complex terrains has been
updated to version `2.2.5`.  
This version of `meteoland` ensures that no negeative values for thermal amplitude are returned. This can happen in some scenarios where the interpolated maximum temperature is lower than the interpolated minimum temperature.

Read all changes made in this version [here](https://emf-creaf.github.io/meteoland/news/index.html).

Read about the `meteoland` workflows [here](https://emf-creaf.github.io/meteoland/articles/tidy-meteoland.html).

*Featured image has been created with the amazing [aRtsy R package](https://koenderks.github.io/aRtsy/)*