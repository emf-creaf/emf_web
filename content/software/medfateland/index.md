---
title: medfateland
authors:
- mcaceres
- aameztegui
- naquilue
categories: softworks
tags:
- ''
draft: false
featured: false
date: '2024-06-21'
lastmod: '2024-06-21'
summary: Simulate forest hydrology, forest function and dynamics over landscapes
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/medfateland/
  url_docs: https://emf-creaf.github.io/medfateland/
---
[![CRAN\_Status\_Badge](http://www.r-pkg.org/badges/version/medfateland)](https://cran.r-project.org/package=medfateland)
[![](https://cranlogs.r-pkg.org/badges/medfateland)](https://cran.rstudio.com/web/packages/medfateland/index.html)
[![R-CMD-check](https://github.com/emf-creaf/medfateland/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/emf-creaf/medfateland/actions)

## Introduction

The R package **medfateland** has been designed to extend the
capabilities of package **medfate** in a spatially-explicit context. It
allows running the stand-level models available in medfate on points and
cells within landscape or region, including the possibility of
parallelization. Additionally, medfateland allows considering seed
dispersal and lateral water transfer processes in forested watersheds.
Hence, medfateland can be used as a tool for eco-hydrological
applications.

## Package installation

Since both packages evolve together, installing **medfateland** normally
requires an up-to-date version of **medfate**.

The package is not available from CRAN because it is still under active
development. Beta versions of package **medfateland** can be installed
from GitHub as follows:

``` r
remotes::install_github("emf-creaf/medfateland")
```

## Documentation

A number of *vignettes* illustrate how to initialize inputs and run
simulation models in **medfateland**. These can be found at the package
[website](https://emf-creaf.github.io/medfateland/).

The user is also advised to read articles included in the
[website](https://emf-creaf.github.io/medfate/) of package **medfate**.

A complete documentation of both packages, including a *reference book*,
can be found at <https://emf-creaf.github.io/medfatebook/index.html>.

## Companion R packages

The modelling tools included in **medfate** and **medfateland** are
complemented with two companion packages:

  - Package [**meteoland**](https://emf-creaf.github.io/meteoland)
    allows generating daily weather input for simulation models in
    **medfate** and **medfateland**.
  - Package
    [**traits4models**](https://emf-creaf.github.io/traits4models)
    provides functions to help creating species parameter inputs for
    process-based models such as those in for **medfate** and
    **medfateland** functions \[*under development*\].

The relationships between the four packages are illustrated in the
figure below, where black arrows indicate package dependencies and gray
arrows indicate model parameter provision.

{{< figure src="packages.png" class="single-image" >}}

## Authorship

The set of R packages are developed and maintained by the [*Ecosystem
Modelling Facility*](https://emf.creaf.cat) unit at
[*CREAF*](https://www.creaf.cat/) (in Spain), in close collaboration
with researchers from
[*URFM-INRAE*](https://www6.paca.inrae.fr/ecologie_des_forets_mediterraneennes/)
(in France) and [*CTFC*](https://www.ctfc.cat/) (in Spain).

{{< figure src="logos.png" class="single-image" >}}