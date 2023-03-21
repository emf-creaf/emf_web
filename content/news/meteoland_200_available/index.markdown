---
title: "meteoland 2.0.0 is available!"
authors: ["emf"]
date: 2023-03-01
lastmod: 2023-03-01
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteoland"
  url_code: "https://emf-creaf.github.io/meteoland/"

image:
  caption: 'meteoland R package bumped to 2.0.0'
  
summary: "`meteoland` R package, which provides utilities to estimate daily weather variables at any position over complex terrains has been updated to version `2.0.0`"  
---

`meteoland` R package, which provides utilities to estimate daily weather variables at any position over complex terrains has been
updated to version `2.0.0`.  
This version of `meteoland` introduces a new tidy way of working with meteorological data and tidy interpolation, cross-validation
and calibration workflows.  
Also, as `rgdal`, `rgeos` and `maptools` R packages are being retired (by end of 2023), as well as `sp` and `raster` packages enter
in maintenance mode, an effort has been made to remove `meteoland` dependencies on these packages and make `meteoland` able to work
with `sf` and `stars` packages.

Read all changes made in this version [here](https://emf-creaf.github.io/meteoland/news/index.html).

Read about the new `meteoland` tidy workflows [here](https://emf-creaf.github.io/meteoland/articles/tidy-meteoland.html).