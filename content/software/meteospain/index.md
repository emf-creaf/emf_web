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
meteospain
==========

[![R-CMD-check](https://github.com/emf-creaf/meteospain/workflows/R-CMD-check/badge.svg)](https://github.com/emf-creaf/meteospain/actions)

`meteospain` aims to offer access to different Spanish meteorological
stations data in an uniform way.

Installation
------------

`meteospain` is in CRAN, and can be installed as any other package:

``` {.r}
install.packages('meteospain')
```

Also, `meteospain` is in active development. You can install the
development version from [GitHub](https://github.com/) with:

``` {.r}
# install.packages("remotes")
remotes::install_github("emf-creaf/meteospain")
```

Services
--------

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

Examples
--------

Access to the services is done with the `get_meteo_from` function,
providing the name of the service and the options. Each service has a
dedicated `*service*_options()` function to guide through the specifics
of each service:

``` {.r}
library(meteospain)

mg_options <- meteogalicia_options(resolution = 'current_day')
get_meteo_from('meteogalicia', mg_options)
#> A informaci??n divulgada a trav??s deste servidor ofr??cese gratuitamente aos cidad??ns para que poida ser 
#> utilizada libremente por eles, co ??nico compromiso de mencionar expresamente a MeteoGalicia e ?? 
#> Conseller??a de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Simple feature collection with 3693 features and 14 fields (with 1344 geometries empty)
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.126011 ymin: 41.90361 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,693 ?? 15
#>    timestamp           service station_id station_name station_province altitude
#>    <dttm>              <chr>   <chr>      <chr>        <chr>                 [m]
#>  1 2022-07-26 15:00:00 meteog??? 10045      Mabegondo    A Coru??a               94
#>  2 2022-07-26 15:00:00 meteog??? 10046      Marco da Cu??? A Coru??a              651
#>  3 2022-07-26 15:00:00 meteog??? 10047      Pedro Murias Lugo                   51
#>  4 2022-07-26 15:00:00 meteog??? 10048      O Invernade??? Ourense              1026
#>  5 2022-07-26 15:00:00 meteog??? 10049      Corrubedo    A Coru??a               30
#>  6 2022-07-26 15:00:00 meteog??? 10050      CIS Ferrol   A Coru??a               37
#>  7 2022-07-26 15:00:00 meteog??? 10052      Muralla      A Coru??a              661
#>  8 2022-07-26 15:00:00 meteog??? 10053      Campus Lugo  Lugo                  400
#>  9 2022-07-26 15:00:00 meteog??? 10055      Guitiriz-Mi??? Lugo                  684
#> 10 2022-07-26 15:00:00 meteog??? 10056      Marroxo      Lugo                  645
#> # ??? with 3,683 more rows, and 9 more variables: temperature [??C],
#> #   min_temperature [??C], max_temperature [??C], relative_humidity [%],
#> #   precipitation [L/m^2], wind_direction [??], wind_speed [m/s],
#> #   insolation [h], geometry <POINT [??]>
```

Stations info can be accessed with `get_stations_info_from` function:

``` {.r}
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 99 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.90361 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 99 ?? 6
#>    service      station_id station_name             station_province altitude
#>  * <chr>        <chr>      <chr>                    <chr>                 [m]
#>  1 meteogalicia 10157      Coru??a-Torre de H??rcules A Coru??a               21
#>  2 meteogalicia 10045      Mabegondo                A Coru??a               94
#>  3 meteogalicia 10144      Arz??a                    A Coru??a              362
#>  4 meteogalicia 10095      Sergude                  A Coru??a              231
#>  5 meteogalicia 10800      Camari??as                A Coru??a                5
#>  6 meteogalicia 10143      Cari??o                   A Coru??a                5
#>  7 meteogalicia 10135      Lira                     A Coru??a              170
#>  8 meteogalicia 10092      Punta Candieira          A Coru??a              254
#>  9 meteogalicia 10096      R??o do Sol               A Coru??a              540
#> 10 meteogalicia 10050      CIS Ferrol               A Coru??a               37
#> # ??? with 89 more rows, and 1 more variable: geometry <POINT [??]>
```

Returned objects are spatial objects (using the
[`sf`](https://r-spatial.github.io/sf/) R package), so results can be
plotted directly:

``` {.r}
library(sf)
#> Linking to GEOS 3.9.0, GDAL 3.2.1, PROJ 7.2.1
mg_options <- meteogalicia_options(resolution = 'daily', start_date = as.Date('2021-04-25'))
plot(get_meteo_from('meteogalicia', mg_options))
#> A informaci??n divulgada a trav??s deste servidor ofr??cese gratuitamente aos cidad??ns para que poida ser 
#> utilizada libremente por eles, co ??nico compromiso de mencionar expresamente a MeteoGalicia e ?? 
#> Conseller??a de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Warning: plotting the first 9 out of 16 attributes; use max.plot = 16 to plot
#> all
```

{{< figure src="README-plot_stations-1.png" class="single-image" >}}

``` {.r}

plot(get_stations_info_from('meteogalicia', mg_options))
```

{{< figure src="README-plot_stations-2.png" class="single-image" >}}
