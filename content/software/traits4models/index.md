---
title: traits4models
authors:
- mcaceres
- atovar
- vgranda
categories: softworks
tags:
- R
- models
- water balance
- forest dynamics
draft: false
featured: false
date: '2024-09-15'
lastmod: '2024-09-15'
summary: Utility functions to facilitate harmonizing plant trait data bases and defining
  species parameter tables for process-based models
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/traits4models/
  url_docs: https://emf-creaf.github.io/traits4models/
---
# From plant traits to model parameters <a href="https://emf-creaf.github.io/traits4models/"><img src="logo.png" align="right" height="139" alt="traits4models website" /></a>

<!-- badges: start -->
[![R-CMD-check](https://github.com/emf-creaf/traits4models/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/emf-creaf/traits4models/actions/workflows/R-CMD-check.yaml)
<!-- badges: end -->

## Introduction

Package **traits4models** is designed to facilitate creating plant
species parameter tables for process-based models of forest function
and/or dynamics. Specifically utility functions are provided to:

1.  Harmonize plant trait databases.
2.  Harmonize allometry databases.
3.  Populate species parameter tables from harmonized data.

At present, species parameter estimation is tailored to be used for the
models included in packages
[**medfate**](https://emf-creaf.github.io/medfate) and
[**medfateland**](https://emf-creaf.github.io/medfateland), but it other
functions could be added to become useful for other process-based models
(see section [Contributing
guide](https://emf-creaf.github.io/traits4models/CONTRIBUTING.html)).

## Package installation

Since both packages evolve together, installing **traits4models**
normally requires an up-to-date version of package
[**medfate**](https://emf-creaf.github.io/medfate), which is available
at [CRAN](https://cran.r-project.org/package=medfate).

The latest stable versions GitHub as follows (required package `remotes`
should be installed/updated first):

``` r
remotes::install_github("emf-creaf/traits4models")
```

## Usage

The main functions for harmonization are `harmonize_taxonomy_WFO()`,
`check_harmonized_trait()` and `check_harmonized_allometry()`. A number
of functions are provided for inspecting the set of harmonized
trait/allometry data. Finally, model-specific functions are provided to
populate species parameter tables from them.

## Documentation

A number of *vignettes* illustrate how to initialize inputs and run
simulation models in **traits4models**. These can be found at the
package [website](https://emf-creaf.github.io/traits4models/).

## Companion R packages

The development of **traits4models** is intended to complement packages
[**medfate**](https://emf-creaf.github.io/medfate) and
[**medfateland**](https://emf-creaf.github.io/medfateland).

Two other packages complete the simulation framework, but can be used
for many other purposes beyond forest modelling:

  - Package [**meteoland**](https://emf-creaf.github.io/meteoland)
    allows generating daily weather input for simulation models in
    **medfate** and **medfateland**. Package **meteoland** is a
    dependency for **medfate** and **medfateland**, but can be used
    independently to obtain daily weather data.
  - Package [**forestables**](https://emf-creaf.github.io/forestables)
    allows reading and harmonizing forest inventory data to a common
    data structure. Initialization workflows in **medfateland** can use
    data from **forestables**, but the data structures of the package
    can be used for many studies beyond modelling.

The relationships between the five packages are illustrated in the
figure below, where black arrows indicate package dependencies and gray
arrows indicate model parameter or data provision.

{{< figure src="packages.png" class="single-image" >}}

## Authorship

The set of R packages are developed and maintained by the [*Ecosystem
Modelling Facility*](https://emf.creaf.cat) unit at
[*CREAF*](https://www.creaf.cat/) (in Spain), in close collaboration
with researchers from
[*URFM-INRAE*](https://www6.paca.inrae.fr/ecologie_des_forets_mediterraneennes/)
(in France) and [*CTFC*](https://www.ctfc.cat/) (in Spain).

<img src="institution_logos.png" width="60%" style="display: block; margin: auto;" />

## Funding

  - **Research project**: Boosting process-based models to project
    forest dynamics and associated ecosystem services at
    stand-to-regional scales (BOMFORES). **Financial Entity**:
    Ministerio de Ciencia e Innovación (PID2021-126679OB-I00).
    **Duration from**: 01/09/2022 **to**: 31/08/2024. **PI**: Miquel De
    Cáceres.
  - **Research project**: Improving the modelling of key forest dynamic
    processes to forecast long-term changes in Mediterranean forests
    under climate change (IMPROMED). **Financial Entity**: Ministerio de
    Ciencia e Innovación (PID2023-152644NB-I00). **Duration from**:
    01/09/2024 **to**: 31/08/2025. **PI**: Miquel De Cáceres/Josep Mª
    Espelta.
