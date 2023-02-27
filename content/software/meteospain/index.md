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
date: '2023-02-27'
lastmod: '2023-02-27'
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
#> Simple feature collection with 3767 features and 14 fields (with 1967 geometries empty)
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.126011 ymin: 41.90361 xmax: -6.783357 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,767 × 15
#>    timestamp           service   stati…¹ stati…² stati…³ altit…⁴ tempe…⁵ min_t…⁶ max_t…⁷ relat…⁸ preci…⁹ wind_…˟ wind_…˟
#>    <dttm>              <chr>     <chr>   <chr>   <chr>       [m]    [°C]    [°C]    [°C]     [%] [L/m^2]     [°]   [m/s]
#>  1 2023-02-26 12:00:00 meteogal… 10045   Mabego… A Coru…      94   12.1    10.9    13.1       72       0      NA      NA
#>  2 2023-02-26 12:00:00 meteogal… 10046   Marco … A Coru…     651    5.61    4.92    6.14      84       0      NA      NA
#>  3 2023-02-26 12:00:00 meteogal… 10047   Pedro … Lugo         51    9.75    9.34    9.98      86       0      NA      NA
#>  4 2023-02-26 12:00:00 meteogal… 10048   O Inve… Ourense    1026    7.02    6.43    7.97      60       0      NA      NA
#>  5 2023-02-26 12:00:00 meteogal… 10049   Corrub… A Coru…      30   11.9    11.7    12.3       60       0      NA      NA
#>  6 2023-02-26 12:00:00 meteogal… 10050   CIS Fe… A Coru…      37   12.3    12.2    12.5       66       0      NA      NA
#>  7 2023-02-26 12:00:00 meteogal… 10052   Muralla A Coru…     661    6.97    6.36    7.41      92       0      NA      NA
#>  8 2023-02-26 12:00:00 meteogal… 10053   Campus… Lugo        400    9.85    9.34   10.9       62       0      NA      NA
#>  9 2023-02-26 12:00:00 meteogal… 10055   Guitir… Lugo        684    6.18    5.37    6.81      86       0      NA      NA
#> 10 2023-02-26 12:00:00 meteogal… 10056   Marroxo Lugo        645    2.07    1.68    2.77     100       0      NA      NA
#> # … with 3,757 more rows, 2 more variables: insolation [h], geometry <POINT [°]>, and abbreviated variable names
#> #   ¹​station_id, ²​station_name, ³​station_province, ⁴​altitude, ⁵​temperature, ⁶​min_temperature, ⁷​max_temperature,
#> #   ⁸​relative_humidity, ⁹​precipitation, ˟​wind_direction, ˟​wind_speed
```

Stations info can be accessed with `get_stations_info_from` function:

``` r
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 84 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.126011 ymin: 41.90361 xmax: -6.783357 ymax: 43.7383
#> Geodetic CRS:  WGS 84
#> # A tibble: 84 × 6
#>    service      station_id station_name             station_province altitude             geometry
#>  * <chr>        <chr>      <chr>                    <chr>                 [m]          <POINT [°]>
#>  1 meteogalicia 10157      Coruña-Torre de Hércules A Coruña               21 (-8.409202 43.38276)
#>  2 meteogalicia 10045      Mabegondo                A Coruña               94 (-8.262225 43.24137)
#>  3 meteogalicia 10144      Arzúa                    A Coruña              362  (-8.17469 42.93196)
#>  4 meteogalicia 10095      Sergude                  A Coruña              231 (-8.461246 42.82283)
#>  5 meteogalicia 10143      Cariño-Porto             A Coruña                5   (-7.863354 43.734)
#>  6 meteogalicia 10147      Cariño                   A Coruña               20   (-7.88011 43.7383)
#>  7 meteogalicia 10135      Lira                     A Coruña              170 (-9.126011 42.79504)
#>  8 meteogalicia 10092      Punta Candieira          A Coruña              254 (-8.052468 43.70426)
#>  9 meteogalicia 10096      Río do Sol               A Coruña              540  (-8.69099 43.09519)
#> 10 meteogalicia 10050      CIS Ferrol               A Coruña               37 (-8.252274 43.49147)
#> # … with 74 more rows
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
