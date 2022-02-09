---
title: "meteospain available!"
authors: ["emf"]
date: 2021-06-08
lastmod: 2022-02-08


categories: ["news"]
tags: ["news", "software", "r", "data"]

url_source: "https://www.github.com/emf-creaf/meteospain"
url_code: "https://emf-creaf.github.io/meteospain/"
  
image:
  caption: '2020 monthly average temperature in Catalunya stations'
summary: "`meteospain`, the R package to access the data of spanish meteorology stations is now available *via* [github](https://github.com/emf-creaf/meteospain)."  
---



`meteospain`, the R package to access the data of Spanish meteorology stations is now available at
[CRAN](https://cran.r-project.org/package=meteospain). Want to access meteorology stations data easily? Just
install the `meteospain` package and **get the meteo!**


```r
library(meteospain)
library(ggplot2)
library(units)
## udunits database from /usr/share/udunits/udunits2.xml

get_meteo_from(
  'meteogalicia',
  meteogalicia_options('daily', start_date = as.Date('2020-04-10'))
) %>%
  drop_units() %>%
  ggplot(aes(colour = mean_temperature)) +
  geom_sf()
## A información divulgada a través deste servidor ofrécese gratuitamente aos cidadáns para que poida ser 
## utilizada libremente por eles, co único compromiso de mencionar expresamente a MeteoGalicia e á 
## Consellería de Medio Ambiente, Territorio e Vivenda da Xunta de Galicia como fonte da mesma cada vez 
## que as utilice para os usos distintos do particular e privado.
## https://www.meteogalicia.gal/web/informacion/notaIndex.action
```

<figure class="single-image">
  <figcaption>
    <small class="text-muted">Galician meteo stations average temperature for 2020-04-10:</small>
  </figcaption>
  <img src="{{< blogdown/postref >}}index_files/figure-html/galicia_april_tenth-1.png" alt="Galician meteo stations average temperature for 2020-04-10:"/>
</figure>


`meteospain` provides access to data from stations of several networks:

  - **AEMET**, the Spanish State Meteorological Agency.
  - **MeteoCat**, the Catalan Meteorology Service.
  - **MeteoGalicia**, the Galician Meteorological Service.
  - **RIA**, the Andalucian Agroclimatic Information Network.
  - **Meteoclimatic**, the Spanish non-professional meteorological stations network.

Don't forget to check the [docs](https://emf-creaf.github.io/meteospain/) for a full guide into using
`meteospain`.
