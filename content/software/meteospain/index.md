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
date: '2023-03-21'
lastmod: '2023-03-21'
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
#> Simple feature collection with 3744 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,744 × 15
#>    timestamp           service      station_id station_name   stati…¹ altit…² tempe…³ min_t…⁴ max_t…⁵ relat…⁶ preci…⁷ wind_…⁸ wind_…⁹ insol…˟
#>    <dttm>              <chr>        <chr>      <chr>          <chr>       [m]    [°C]    [°C]    [°C]     [%] [L/m^2]     [°]   [m/s]     [h]
#>  1 2023-03-20 15:00:00 meteogalicia 10045      Mabegondo      A Coru…      94    19.2    18.7    19.6      53       0      NA      NA   0.850
#>  2 2023-03-20 15:00:00 meteogalicia 10046      Marco da Curra A Coru…     651    16.1    15.6    16.4      52       0      NA      NA   1    
#>  3 2023-03-20 15:00:00 meteogalicia 10047      Pedro Murias   Lugo         51    13.9    13.7    14.1      96       0      NA      NA   0.333
#>  4 2023-03-20 15:00:00 meteogalicia 10048      O Invernadeiro Ourense    1026    16.0    15.7    16.2      50       0      NA      NA   1    
#>  5 2023-03-20 15:00:00 meteogalicia 10049      Corrubedo      A Coru…      30    17.3    16.9    17.6      62       0      NA      NA   0.967
#>  6 2023-03-20 15:00:00 meteogalicia 10050      CIS Ferrol     A Coru…      37    16.7    15.6    18.2      67       0      NA      NA   1    
#>  7 2023-03-20 15:00:00 meteogalicia 10052      Muralla        A Coru…     661    12.2    11.8    12.6      76       0      NA      NA   1    
#>  8 2023-03-20 15:00:00 meteogalicia 10053      Campus Lugo    Lugo        400    21.2    21.0    21.3      34       0      NA      NA   1    
#>  9 2023-03-20 15:00:00 meteogalicia 10055      Guitiriz-Mira… Lugo        684    17.4    16.9    17.9      49       0      NA      NA   1    
#> 10 2023-03-20 15:00:00 meteogalicia 10056      Marroxo        Lugo        645    18.9    18.8    19.2      45       0      NA      NA   1    
#> # … with 3,734 more rows, 1 more variable: geometry <POINT [°]>, and abbreviated variable names ¹​station_province, ²​altitude, ³​temperature,
#> #   ⁴​min_temperature, ⁵​max_temperature, ⁶​relative_humidity, ⁷​precipitation, ⁸​wind_direction, ⁹​wind_speed, ˟​insolation
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
#> Linking to GEOS 3.10.2, GDAL 3.3.2, PROJ 7.2.1; sf_use_s2() is TRUE
#> WARNING: different compile-time and runtime versions for GEOS found:
#> Linked against: 3.10.2-CAPI-1.16.0 compiled against: 3.9.1-CAPI-1.14.2
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
