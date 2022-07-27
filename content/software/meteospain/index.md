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
date: '2022-07-27'
lastmod: '2022-07-27'
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

[![R-CMD-check](https://github.com/emf-creaf/meteospain/workflows/R-CMD-check/badge.svg)](https://github.com/emf-creaf/meteospain/actions)

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

-   [AEMET](https://www.aemet.es/en/portada), the Spanish State
    Meteorological Agency.
-   [MeteoCat](https://meteo.cat), the Catalan Meteorology Service.
-   [MeteoGalicia](https://www.meteogalicia.gal/web/inicio.action), the
    Galician Meteorological Service.
-   [RIA](https://www.juntadeandalucia.es/agriculturaypesca/ifapa/riaweb/web/),
    the Andalucian Agroclimatic Information Network.
-   [Meteoclimatic](https://www.meteoclimatic.net/), the Spanish
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
#> A información divulgada a través deste servidor ofrécese gratuitamente aos cidadáns para que poida ser 
#> utilizada libremente por eles, co único compromiso de mencionar expresamente a MeteoGalicia e á 
#> Consellería de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Simple feature collection with 3695 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,695 × 15
#>    timestamp           service      station_id station_name     station_province altitude temperature min_temperature
#>    <dttm>              <chr>        <chr>      <chr>            <chr>                 [m]        [°C]            [°C]
#>  1 2022-07-26 13:00:00 meteogalicia 10045      Mabegondo        A Coruña               94        23.6            23.1
#>  2 2022-07-26 13:00:00 meteogalicia 10046      Marco da Curra   A Coruña              651        17.6            16.9
#>  3 2022-07-26 13:00:00 meteogalicia 10047      Pedro Murias     Lugo                   51        19.7            19.4
#>  4 2022-07-26 13:00:00 meteogalicia 10048      O Invernadeiro   Ourense              1026        23.4            22.7
#>  5 2022-07-26 13:00:00 meteogalicia 10049      Corrubedo        A Coruña               30        23.2            22.1
#>  6 2022-07-26 13:00:00 meteogalicia 10050      CIS Ferrol       A Coruña               37        22.2            21.9
#>  7 2022-07-26 13:00:00 meteogalicia 10052      Muralla          A Coruña              661        19.4            18.2
#>  8 2022-07-26 13:00:00 meteogalicia 10053      Campus Lugo      Lugo                  400        22.9            22.5
#>  9 2022-07-26 13:00:00 meteogalicia 10055      Guitiriz-Mirador Lugo                  684        18.1            17.6
#> 10 2022-07-26 13:00:00 meteogalicia 10056      Marroxo          Lugo                  645        21.2            20.6
#> # … with 3,685 more rows, and 7 more variables: max_temperature [°C], relative_humidity [%], precipitation [L/m^2],
#> #   wind_direction [°], wind_speed [m/s], insolation [h], geometry <POINT [°]>
```

Stations info can be accessed with `get_stations_info_from` function:

``` r
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 154 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 154 × 6
#>    service      station_id station_name             station_province altitude             geometry
#>  * <chr>        <chr>      <chr>                    <chr>                 [m]          <POINT [°]>
#>  1 meteogalicia 10157      Coruña-Torre de Hércules A Coruña               21 (-8.409202 43.38276)
#>  2 meteogalicia 14000      Coruña-Dique             A Coruña                5 (-8.374706 43.36506)
#>  3 meteogalicia 10045      Mabegondo                A Coruña               94 (-8.262225 43.24137)
#>  4 meteogalicia 14003      Punta Langosteira        A Coruña                5 (-8.531179 43.34723)
#>  5 meteogalicia 10144      Arzúa                    A Coruña              362  (-8.17469 42.93196)
#>  6 meteogalicia 19005      Guísamo                  A Coruña              175 (-8.276487 43.30799)
#>  7 meteogalicia 19012      Cespón                   A Coruña               59 (-8.854571 42.67466)
#>  8 meteogalicia 10095      Sergude                  A Coruña              231 (-8.461246 42.82283)
#>  9 meteogalicia 10800      Camariñas                A Coruña                5 (-9.178318 43.12445)
#> 10 meteogalicia 19001      Rus                      A Coruña              134 (-8.685357 43.15616)
#> # … with 144 more rows
```

Returned objects are spatial objects (using the
[`sf`](https://r-spatial.github.io/sf/) R package), so results can be
plotted directly:

``` r
library(sf)
#> Linking to GEOS 3.11.0, GDAL 3.4.3, PROJ 8.2.0; sf_use_s2() is TRUE
#> WARNING: different compile-time and runtime versions for GEOS found:
#> Linked against: 3.11.0-CAPI-1.17.0 compiled against: 3.9.1-CAPI-1.14.2
#> It is probably a good idea to reinstall sf, and maybe rgeos and rgdal too
mg_options <- meteogalicia_options(resolution = 'daily', start_date = as.Date('2021-04-25'))
plot(get_meteo_from('meteogalicia', mg_options))
#> A información divulgada a través deste servidor ofrécese gratuitamente aos cidadáns para que poida ser 
#> utilizada libremente por eles, co único compromiso de mencionar expresamente a MeteoGalicia e á 
#> Consellería de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Warning: plotting the first 9 out of 16 attributes; use max.plot = 16 to plot all
```

{{< figure src="README-plot_stations-1.png" class="single-image" >}}

``` r

plot(get_stations_info_from('meteogalicia', mg_options))
```

{{< figure src="README-plot_stations-2.png" class="single-image" >}}
