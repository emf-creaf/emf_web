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
date: '2023-03-01'
lastmod: '2023-03-01'
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
#> Simple feature collection with 3768 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,768 × 15
#>    timestamp           service   stati…¹ stati…² stati…³ altit…⁴ tempe…⁵ min_t…⁶ max_t…⁷ relat…⁸ preci…⁹ wind_…˟ wind_…˟
#>    <dttm>              <chr>     <chr>   <chr>   <chr>       [m]    [°C]    [°C]    [°C]     [%] [L/m^2]     [°]   [m/s]
#>  1 2023-02-28 19:00:00 meteogal… 10045   Mabego… A Coru…      94    7.95    7.69    8.15      68       0      NA      NA
#>  2 2023-02-28 19:00:00 meteogal… 10046   Marco … A Coru…     651    2.54    2.44    2.66      82       0      NA      NA
#>  3 2023-02-28 19:00:00 meteogal… 10047   Pedro … Lugo         51    8.33    8.13    8.44      66       0      NA      NA
#>  4 2023-02-28 19:00:00 meteogal… 10048   O Inve… Ourense    1026    1.55    0.85    2.22      63       0      NA      NA
#>  5 2023-02-28 19:00:00 meteogal… 10049   Corrub… A Coru…      30    8.56    8.07    9.07      45       0      NA      NA
#>  6 2023-02-28 19:00:00 meteogal… 10050   CIS Fe… A Coru…      37    8.64    8.18    8.96      55       0      NA      NA
#>  7 2023-02-28 19:00:00 meteogal… 10052   Muralla A Coru…     661    2.95    2.73    3.25      72       0      NA      NA
#>  8 2023-02-28 19:00:00 meteogal… 10053   Campus… Lugo        400    4.7     4.55    4.92      65       0      NA      NA
#>  9 2023-02-28 19:00:00 meteogal… 10055   Guitir… Lugo        684    2.29    2.22    2.38      80       0      NA      NA
#> 10 2023-02-28 19:00:00 meteogal… 10056   Marroxo Lugo        645    2.83    2.36    3.33      58       0      NA      NA
#> # … with 3,758 more rows, 2 more variables: insolation [h], geometry <POINT [°]>, and abbreviated variable names
#> #   ¹​station_id, ²​station_name, ³​station_province, ⁴​altitude, ⁵​temperature, ⁶​min_temperature, ⁷​max_temperature,
#> #   ⁸​relative_humidity, ⁹​precipitation, ˟​wind_direction, ˟​wind_speed
```

Stations info can be accessed with `get_stations_info_from` function:

``` r
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 158 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.7383
#> Geodetic CRS:  WGS 84
#> # A tibble: 158 × 6
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
#> # … with 148 more rows
```

Returned objects are spatial objects (using the
[`sf`](https://r-spatial.github.io/sf/) R package), so results can be
plotted directly:

``` r
library(sf)
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
