---
title: "meteospain available!"
authors: ["emf"]
date: 2022-02-08


categories: ["news"]
tags: ["news", "software", "r", "data"]

url_source: "https://www.github.com/emf-creaf/meteospain"
url_code: "https://emf-creaf.github.io/meteospain/"
  
image:
  caption: 'Temperature in Spain, April 10, 2020'
summary: "`meteospain`, the R package to access the data of spanish meteorology stations is now available *via* [github](https://github.com/emf-creaf/meteospain)."  
---



`meteospain`, the R package to access the data of spanish meteorology stations is now available
*via* [github](https://github.com/emf-creaf/meteospain).

Want to access meteorology stations data quickly? Just install the package and **get the meteo**:


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

<img src="{{< blogdown/postref >}}index_files/figure-html/galicia_april_tenth-1.png" width="672" />

Don't forget to check the docs [here](https://emf-creaf.github.io/meteospain/)
