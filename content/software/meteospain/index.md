---
title: meteospain
authors:
- vgranda
- mcaceres
- aameztegui
- emf
categories: softworks
tags:
- meteo
- R
- data
draft: false
featured: false
date: '2023-11-27'
lastmod: '2023-11-27'
summary: Access to Spanish Meteorological Stations Services
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/meteospain
  url_docs: https://emf-creaf.github.io/meteospain/
---
# meteospain

[![R-CMD-check](https://github.com/emf-creaf/meteospain/actions/workflows/R-CMD-check.yaml/badge.svg?branch=main)](https://github.com/emf-creaf/meteospain/actions/workflows/R-CMD-check.yaml)

`meteospain` aims to offer access to different Spanish meteorological
stations data in an uniform way.

## Installation

`meteospain` is in CRAN, and can be installed as any other package:

``` r
install.packages('meteospain')
```

Also, `meteospain` is in active development. You can install the
development version from [GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("emf-creaf/meteospain")
```

## Services

The following meteorological stations services are available:

- [AEMET](https://www.aemet.es/en/portada), the Spanish State
  Meteorological Agency.
- [MeteoCat](https://meteo.cat), the Catalan Meteorology Service.
- [MeteoGalicia](https://www.meteogalicia.gal/web/inicio.action), the
  Galician Meteorological Service.
- [RIA](https://www.juntadeandalucia.es/agriculturaypesca/ifapa/riaweb/web/),
  the Andalucian Agroclimatic Information Network.
- [Meteoclimatic](https://www.meteoclimatic.net/), the Spanish
  non-professional meteorological stations network.

## Examples

Access to the services is done with the `get_meteo_from` function,
providing the name of the service and the options. Each service has a
dedicated `*service*_options()` function to guide through the specifics
of each service:

``` r
library(meteospain)

mg_options <- meteogalicia_options(resolution = 'current_day')
get_meteo_from('meteogalicia', mg_options)
#> Simple feature collection with 3753 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.184586 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,753 × 15
#>    timestamp           service      station_id station_name  station_province altitude
#>    <dttm>              <chr>        <chr>      <chr>         <chr>                 [m]
#>  1 2023-11-26 12:00:00 meteogalicia 10045      Mabegondo     A Coruña               94
#>  2 2023-11-26 12:00:00 meteogalicia 10046      Marco da Cur… A Coruña              651
#>  3 2023-11-26 12:00:00 meteogalicia 10047      Pedro Murias  Lugo                   51
#>  4 2023-11-26 12:00:00 meteogalicia 10048      O Invernadei… Ourense              1026
#>  5 2023-11-26 12:00:00 meteogalicia 10049      Corrubedo     A Coruña               30
#>  6 2023-11-26 12:00:00 meteogalicia 10050      CIS Ferrol    A Coruña               37
#>  7 2023-11-26 12:00:00 meteogalicia 10052      Muralla       A Coruña              661
#>  8 2023-11-26 12:00:00 meteogalicia 10053      Campus Lugo   Lugo                  400
#>  9 2023-11-26 12:00:00 meteogalicia 10055      Guitiriz-Mir… Lugo                  684
#> 10 2023-11-26 12:00:00 meteogalicia 10056      Marroxo       Lugo                  645
#> # ℹ 3,743 more rows
#> # ℹ 9 more variables: temperature [°C], min_temperature [°C], max_temperature [°C],
#> #   relative_humidity [%], precipitation [L/m^2], wind_direction [°],
#> #   wind_speed [m/s], insolation [h], geometry <POINT [°]>
```

Stations info can be accessed with `get_stations_info_from` function:

``` r
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 158 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.184586 ymin: 41.8982 xmax: -6.765224 ymax: 43.7383
#> Geodetic CRS:  WGS 84
#> # A tibble: 158 × 6
#>    service station_id station_name station_province altitude             geometry
#>  * <chr>   <chr>      <chr>        <chr>                 [m]          <POINT [°]>
#>  1 meteog… 10157      Coruña-Torr… A Coruña               21 (-8.409202 43.38276)
#>  2 meteog… 14000      Coruña-Dique A Coruña                5 (-8.374706 43.36506)
#>  3 meteog… 10045      Mabegondo    A Coruña               94 (-8.262225 43.24137)
#>  4 meteog… 14003      Punta Lango… A Coruña                5 (-8.531179 43.34723)
#>  5 meteog… 10144      Arzúa        A Coruña              362  (-8.17469 42.93196)
#>  6 meteog… 19005      Guísamo      A Coruña              175 (-8.276487 43.30799)
#>  7 meteog… 19012      Cespón       A Coruña               59 (-8.854571 42.67466)
#>  8 meteog… 10095      Sergude      A Coruña              231 (-8.461246 42.82283)
#>  9 meteog… 10800      Camariñas    A Coruña                5 (-9.178318 43.12445)
#> 10 meteog… 19001      Rus          A Coruña              134 (-8.685357 43.15616)
#> # ℹ 148 more rows
```

Returned objects are spatial objects (using the
[`sf`](https://r-spatial.github.io/sf/) R package), so results can be
plotted directly:

``` r
library(sf)
mg_options <- meteogalicia_options(resolution = 'daily', start_date = as.Date('2021-04-25'))
plot(get_meteo_from('meteogalicia', mg_options))
#> Warning: plotting the first 9 out of 16 attributes; use max.plot = 16 to plot all
```

{{< figure src="README-plot_stations-1.png" class="single-image" >}}

``` r

plot(get_stations_info_from('meteogalicia', mg_options))
```

{{< figure src="README-plot_stations-2.png" class="single-image" >}}

## API keys

Some services, like AEMET or Meteocat, require an *API key* to access
the data. `meteospain` **doesn’t** provide any key for those services,
see `?services_options` for information about this.

Once a key has been obtained, we can get the meteo:

``` r
get_meteo_from('aemet', aemet_options(api_key = keyring::key_get("aemet")))
#> Simple feature collection with 19225 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -18.115 ymin: 27.66667 xmax: 4.323889 ymax: 43.78621
#> Geodetic CRS:  WGS 84
#> # A tibble: 19,225 × 15
#>    timestamp           service station_id station_name       station_province altitude
#>    <dttm>              <chr>   <chr>      <chr>              <chr>                 [m]
#>  1 2023-11-26 12:00:00 aemet   0009X      ALFORJA            <NA>                  406
#>  2 2023-11-26 12:00:00 aemet   0016A      REUS/AEROPUERTO    <NA>                   71
#>  3 2023-11-26 12:00:00 aemet   0034X      VALLS              <NA>                  233
#>  4 2023-11-26 12:00:00 aemet   0042Y      TARRAGONA  FAC. G… <NA>                   55
#>  5 2023-11-26 12:00:00 aemet   0061X      PONTONS            <NA>                  632
#>  6 2023-11-26 12:00:00 aemet   0066X      VILAFRANCA DEL PE… <NA>                  177
#>  7 2023-11-26 12:00:00 aemet   0073X      SITGES-VALLCARCA   <NA>                   58
#>  8 2023-11-26 12:00:00 aemet   0076       BARCELONA/AEROPUE… <NA>                    4
#>  9 2023-11-26 12:00:00 aemet   0092X      BERGA  INSTITUTO   <NA>                  682
#> 10 2023-11-26 12:00:00 aemet   0106X      BALSARENY          <NA>                  361
#> # ℹ 19,215 more rows
#> # ℹ 9 more variables: temperature [°C], min_temperature [°C], max_temperature [°C],
#> #   relative_humidity [%], precipitation [L/m^2], wind_direction [°],
#> #   wind_speed [m/s], insolation [h], geometry <POINT [°]>
```
