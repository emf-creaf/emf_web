---
title: meteoland
authors:
- mcaceres
- vgranda
- acabon
categories: softworks
tags:
- meteo
- R
- data
draft: false
featured: false
date: '2025-05-01'
lastmod: '2025-05-01'
summary: Functions to estimate weather variables at any position of a landscape
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/meteoland
  url_docs: https://emf-creaf.github.io/meteoland/
---
# Landscape meteorology tools <a href="https://emf-creaf.github.io/meteoland/"><img src="logo.png" align="right" height="139" alt="meteoland website" /></a>

[![CRAN\_Status\_Badge](http://www.r-pkg.org/badges/version/meteoland)](https://cran.r-project.org/package=meteoland)
[![](https://cranlogs.r-pkg.org/badges/meteoland)](https://cran.rstudio.com/web/packages/meteoland/index.html)
[![R-CMD-check](https://github.com/emf-creaf/meteoland/workflows/R-CMD-check/badge.svg)](https://github.com/emf-creaf/meteoland/actions)

## Important notice

Starting on June 2023, `rgdal`, `rgeos` and `maptools` R packages
entered a *maintenance* mode (meaning no new updates). Coincidentally,
`sp` and `raster` packages are now superseded by the more modern
alternatives `sf`, `stars` and `terra`. This means that the `meteoland`
classes, which are based on `sp`, need to be updated to deal with these
changes in the R-spatial ecosystem.

Starting with version 2.0.0 of `meteoland` (February 2023) all
functions, methods and classes based on or using the `sp`, `raster` and
`rgdal` package were soft-deprecated.

> **Since ver. 2.1.0, these functions, methods and classes have been
> removed from the package**
{.alert .alert-info}

See the [*Tidy
meteoland*](https://emf-creaf.github.io/meteoland/articles/tidy-meteoland.html)
vignette for more info about this changes.

## Introduction

With the aim to assist research of climatic impacts on forests, the R
package `meteoland` provides utilities to estimate daily weather
variables at any position over complex terrains (De Cáceres et al 2018):

  - Spatial interpolation of daily weather records from meteorological
    stations.
  - Statistical correction of meteorological data series (e.g from
    climate models). Note that this functionality is deprecated starting
    in version 2.0.0.
  - Multisite and multivariate stochastic weather generation. Note that
    this functionality is deprecated starting in version 2.0.0.

## Package installation and documentation

Package **meteoland** can be found at
[CRAN](https://cran.r-project.org/), but the version in this repository
may not be the most recent one. Latest stable versions can be downloaded
and installed from GitHub as follows (package `remotes` should be
installed first):

``` r
remotes::install_github("emf-creaf/meteoland")
```

Detailed documentation regarding **meteoland** calculation routines can
be found at (<https://emf-creaf.github.io/meteolandbook/index.html>).

## Companion packages

### Package meteospain

During the development of **meteoland** some functions to download
weather station data from several Spanish networks were originally
developed. After **meteoland** version 1.0.1, the user is recommended to
use package [**meteospain**](https://emf-creaf.github.io/meteospain/),
which can also be found at
[CRAN](https://cran.rstudio.com/web/packages/meteospain/index.html).
Functions to download weather station data are still available in
**meteoland** but they have been deprecated and make internal calls to
functions in package
[**meteospain**](https://emf-creaf.github.io/meteospain/).

### Packages medfate and medfateland

Package **meteoland** has been designed to provide input weather data
for simulations of forest function and dynamics via the following
packages

  - Package [**medfate**](https://emf-creaf.github.io/medfate) provides
    functions for simulating forest function and dynamics.
  - Package [**medfateland**](https://emf-creaf.github.io/medfateland)
    extends **medfate** by allowing simulations to be performed in a
    spatially explicit context.

## Authorship

R package **meteoland** is developed and maintained by the [*Ecosystem
Modelling Facility*](https://emf.creaf.cat) at CREAF (Catalonia, Spain).

## References

  - De Caceres M, Martin-StPaul N, Turco M, Cabon A, Granda V (2018)
    Estimating daily meteorological data and downscaling climate models
    over landscapes. Environmental Modelling and Software 108: 186-196.
    (<doi:10.1016/j.envsoft.2018.08.003>).
