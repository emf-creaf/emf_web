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
date: '2022-04-06'
lastmod: '2022-04-06'
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
dedicated options function to guide through the specifics of each
service:

``` r
library(meteospain)

mg_options <- meteogalicia_options(resolution = 'current_day')
get_meteo_from('meteogalicia', mg_options)
#> A información divulgada a través deste servidor ofrécese gratuitamente aos cidadáns para que poida ser 
#> utilizada libremente por eles, co único compromiso de mencionar expresamente a MeteoGalicia e á 
#> Consellería de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Simple feature collection with 3717 features and 14 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 3,717 × 15
#>    timestamp           service      station_id station_name    
#>    <dttm>              <chr>        <chr>      <chr>           
#>  1 2022-04-05 14:00:00 meteogalicia 10045      Mabegondo       
#>  2 2022-04-05 14:00:00 meteogalicia 10046      Marco da Curra  
#>  3 2022-04-05 14:00:00 meteogalicia 10047      Pedro Murias    
#>  4 2022-04-05 14:00:00 meteogalicia 10048      O Invernadeiro  
#>  5 2022-04-05 14:00:00 meteogalicia 10049      Corrubedo       
#>  6 2022-04-05 14:00:00 meteogalicia 10050      CIS Ferrol      
#>  7 2022-04-05 14:00:00 meteogalicia 10052      Muralla         
#>  8 2022-04-05 14:00:00 meteogalicia 10053      Campus Lugo     
#>  9 2022-04-05 14:00:00 meteogalicia 10055      Guitiriz-Mirador
#> 10 2022-04-05 14:00:00 meteogalicia 10056      Marroxo         
#> # … with 3,707 more rows, and 11 more variables:
#> #   station_province <chr>, altitude [m], temperature [°C],
#> #   min_temperature [°C], max_temperature [°C],
#> #   relative_humidity [%], precipitation [L/m^2], wind_direction [°],
#> #   wind_speed [m/s], insolation [h], geometry <POINT [°]>
```

Stations info can be accessed with `get_stations_info_from` function:

``` r
get_stations_info_from('meteogalicia', mg_options)
#> Simple feature collection with 155 features and 5 fields
#> Geometry type: POINT
#> Dimension:     XY
#> Bounding box:  xmin: -9.178318 ymin: 41.8982 xmax: -6.765224 ymax: 43.734
#> Geodetic CRS:  WGS 84
#> # A tibble: 155 × 6
#>    service      station_id station_name      station_province altitude
#>  * <chr>        <chr>      <chr>             <chr>                 [m]
#>  1 meteogalicia 10157      Coruña-Torre de … A Coruña               21
#>  2 meteogalicia 14000      Coruña-Dique      A Coruña                5
#>  3 meteogalicia 10045      Mabegondo         A Coruña               94
#>  4 meteogalicia 14003      Punta Langosteira A Coruña                5
#>  5 meteogalicia 10144      Arzúa             A Coruña              362
#>  6 meteogalicia 19005      Guísamo           A Coruña              175
#>  7 meteogalicia 19012      Cespón            A Coruña               59
#>  8 meteogalicia 10095      Sergude           A Coruña              231
#>  9 meteogalicia 10800      Camariñas         A Coruña                5
#> 10 meteogalicia 19001      Rus               A Coruña              134
#> # … with 145 more rows, and 1 more variable: geometry <POINT [°]>
```

Returned objects are spatial objects (thanks to the
[`sf`](https://r-spatial.github.io/sf/) R package), so we can plot the
results directly.

``` r
library(sf)
#> Linking to GEOS 3.9.1, GDAL 3.4.0, PROJ 8.2.0; sf_use_s2() is TRUE
mg_options <- meteogalicia_options(resolution = 'daily', start_date = as.Date('2021-04-25'))
plot(get_meteo_from('meteogalicia', mg_options))
#> A información divulgada a través deste servidor ofrécese gratuitamente aos cidadáns para que poida ser 
#> utilizada libremente por eles, co único compromiso de mencionar expresamente a MeteoGalicia e á 
#> Consellería de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
#> que as utilice para os usos distintos do particular e privado.
#> https://www.meteogalicia.gal/web/informacion/notaIndex.action
#> Warning: plotting the first 9 out of 16 attributes; use max.plot = 16
#> to plot all
```

{{< figure src="README-plot_stations-1.png" class="single-image" >}}

``` r
plot(get_stations_info_from('meteogalicia', mg_options))
```

{{< figure src="README-plot_stations-2.png" class="single-image" >}}
