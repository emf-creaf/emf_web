---
title: IFNallometry
authors:
- mcaceres
categories: softworks
tags:
- R
- models
- forest dynamics
draft: false
featured: false
date: '2025-07-01'
lastmod: '2025-07-01'
summary: Routines for calculating volume and biomass for Spanish Forest Inventory
  (IFN) plots
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/IFNallometry/
  url_docs: https://emf-creaf.github.io/IFNallometry/
---
<!-- README.md is generated from README.Rmd. Please edit that file -->

# IFNallometry

<!-- badges: start -->
[![R-CMD-check](https://github.com/emf-creaf/IFNallometry/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/emf-creaf/IFNallometry/actions/workflows/R-CMD-check.yaml)
<!-- badges: end -->

The goal of IFNallometry is to provide routines for calculating volume
and biomass for forest stands using allometries developed from Spanish
Forest Inventory (IFN) plot data.

## Installation

You can install the development version of IFNallometry from
[GitHub](https://github.com/) with:

``` r
# install.packages("pak")
pak::pak("emf-creaf/IFNallometry")
```

## Example

Here is an example data set of forest plot input to the package:

``` r
library(IFNallometry)
data("example_tree_data")
head(example_tree_data)
#>        ID Species        N  DBH   H
#> 344 80001      22 31.83099 18.9 7.5
#> 345 80001      22 14.14711 29.2 7.5
#> 346 80001      22 14.14711 23.9 9.5
#> 347 80001      22 14.14711 23.7 7.0
#> 348 80001      22 14.14711 32.7 8.0
#> 349 80001      22 31.83099 13.7 8.0
```

Below is the code and result of calculating timber volumes, using plot
ID to extract the Spanish province:

``` r
example_volumes <- IFNvolume(example_tree_data, provinceFromID = TRUE)
head(example_volumes)
#>      ID Species           Name FC      VCC      VSC          VLE       IAVC
#> 1 80001      22 Pinus uncinata  1 3.602559 2.860209 -0.035419361 0.12176755
#> 2 80001      22 Pinus uncinata  1 3.229656 2.690636  0.033717806 0.07381033
#> 3 80001      22 Pinus uncinata  1 2.805269 2.321029  0.018885424 0.06887026
#> 4 80001      22 Pinus uncinata  1 2.150192 1.750104 -0.001320525 0.06097990
#> 5 80001      22 Pinus uncinata  1 4.176124 3.514192  0.071731231 0.08434162
#> 6 80001      22 Pinus uncinata  1 2.441344 1.846656 -0.061216067 0.10679360
```

And here is the code and result of calculating biomass components:

``` r
example_biomass <- IFNbiomass(example_tree_data)
head(example_biomass)
#>      ID Species           Name SpeciesAllom      NameAllom    Roots      Stem
#> 1 80001      22 Pinus uncinata           22 Pinus uncinata 2194.477 1731.1354
#> 2 80001      22 Pinus uncinata           22 Pinus uncinata 2328.041 1836.4987
#> 3 80001      22 Pinus uncinata           22 Pinus uncinata 1559.627 1558.4148
#> 4 80001      22 Pinus uncinata           22 Pinus uncinata 1533.634 1129.1675
#> 5 80001      22 Pinus uncinata           22 Pinus uncinata 2919.580 2456.6831
#> 6 80001      22 Pinus uncinata           22 Pinus uncinata 1153.051  970.2358
#>    Branches Leaves Needles Bark   Aerial    Total
#> 1 1448.8434     NA      NA   NA 3179.979 5374.456
#> 2 1308.8274     NA      NA   NA 3145.326 5473.367
#> 3  877.7623     NA      NA   NA 2436.177 3995.804
#> 4  958.3115     NA      NA   NA 2087.479 3621.113
#> 5 1541.9793     NA      NA   NA 3998.662 6918.243
#> 6  748.7747     NA      NA   NA 1719.010 2872.062
```

## Documentation

So far, the only documentation provided is the one included for package
functions (see package
[website](https://emf-creaf.github.io/IFNallometry/index.html)).

## Companion R packages

The development of **IFNallometries** is intended to complement packages
[**medfate**](https://emf-creaf.github.io/medfate) and
[**medfateland**](https://emf-creaf.github.io/medfateland) but it can be
used independently.

## Authorship

This R package is developed and maintained by the [*Ecosystem Modelling
Facility*](https://emf.creaf.cat) unit at
[*CREAF*](https://www.creaf.cat/) (in Spain), in close collaboration
with researchers from [*CTFC*](https://www.ctfc.cat/) (in Spain).
