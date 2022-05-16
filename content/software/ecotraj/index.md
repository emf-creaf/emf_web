---
title: ecotraj
authors:
- mcaceres
categories: softworks
tags:
- vegetation
- R
- statistics
draft: false
featured: false
date: '2022-05-16'
lastmod: '2022-05-16'
summary: Assists ecologists in the analysis of temporal changes of ecosystems, defined
  as trajectories on a chosen multivariate space, by providing a set of trajectory
  metrics and visual representations.
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/ecotraj
  url_docs: https://emf-creaf.github.io/ecotraj/
---
```{=html}
<!-- badges: start -->
```
[![CRAN_Status_Badge](http://www.r-pkg.org/badges/version/ecotraj)](https://cran.r-project.org/package=ecotraj)
[![](https://cranlogs.r-pkg.org/badges/ecotraj)](https://cran.rstudio.com/web/packages/ecotraj/index.html)
[![R-CMD-check](https://github.com/emf-creaf/ecotraj/workflows/R-CMD-check/badge.svg)](https://github.com/emf-creaf/ecotraj/actions)
`<!-- badges: end -->`{=html}

## Introduction

Package `ecotraj` is a package providing a framework to assist
ecologists in the analysis of temporal changes in ecosystems defined on
a chosen multivariate space. It is related to the following
publications:

-   First presentation of the community trajectory analysis framework:
    De Cáceres et al. (2019) (<https://doi.org/10.1002/ecm.1350>).

-   Extension of community trajectory analysis: Sturbois et al. (2021)
    (<https://doi.org/10.1016/j.ecolmodel.2020.109400>).

## Package installation

Package `ecotraj` can be found at
[CRAN](https://cran.r-project.org/package=ecotraj). In addition, the
latest stable `ecotraj` R package can also be installed from GitHub as
follows:

``` r
devtools::install_github("emf-creaf/ecotraj")
```

Additionally, users can have help to run package functions directly as
package vignettes, by forcing their inclusion in installation:

``` r
devtools::install_github("emf-creaf/ecotraj", 
                         build_opts = c("--no-resave-data", "--no-manual"),
                         build_vignettes = TRUE)
```

## References

-   De Cáceres, M., Coll, L., Legendre, P., Allen, R.B., Wiser, S.K.,
    Fortin, M.J., Condit, R. & Hubbell, S.. (2019). Trajectory analysis
    in community ecology. Ecological Monographs.

-   Sturbois, A., De Cáceres, M., Sánchez-Pinillos, M., Schaal, G.,
    Gauthier, O., Le Mao, P., Ponsero, A., & Desroy, N. (2021).
    Extending community trajectory analysis : New metrics and
    representation. Ecological Modelling, 440, 109400.
