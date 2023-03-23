---
title: "meteospain 0.1.2 is available!"
authors: ["emf"]
date: 2023-03-22
lastmod: 2023-03-23
draft: false


categories: ["news"]
tags: ["news", "software", "r"]

links:
  url_source: "https://www.github.com/emf-creaf/meteospain"
  url_docs: "https://emf-creaf.github.io/meteospain/"

image:
  caption: 'meteospain R package bumped to 0.1.2'
  
summary: "`meteospain` R package, for accessing the Spanish meteorology stations data, has been updated to version 0.1.2 and now allows for downloading monthly and yearly data from AEMET."  
---

`meteospain`, the R package to access data of Spanish meteorology stations, reachs version
*0.1.2*. Now, `meteospain` allows for downloading "monthly" and "yearly" AEMET data (besides the
already implemented "current_day" and "daily"):

``` r
library(meteospain)
library(ggplot2)
library(units)
## udunits database from /usr/share/udunits/udunits2.xml
library(purrr)

leon_stations <- c("1549", "2661", "2630X")

leon_1992 <- leon_stations |>
  map(
    .f = \(station) {
      get_meteo_from(
        'aemet',
        aemet_options(
          'monthly', start_date = as.Date('1992-01-01'),
          api_key = Sys.getenv("aemet"),
          stations = station
        )
      )
    }
  ) |>
  list_rbind() |>
  sf::st_as_sf()

## ℹ © AEMET. Autorizado el uso de la información y su reproducción citando a
##   AEMET como autora de la misma.
## https://www.aemet.es/es/nota_legal


leon_1992 |>
  ggplot(aes(x = as.Date(timestamp), y = mean_temperature, colour = station_name)) +
  geom_line() +
  theme_minimal() +
  scale_colour_viridis_d(name = "Stations", option = "F") +
  scale_x_date(name = "Months", date_breaks = "2 months", date_labels = "%B")
```

<figure class="single-image">
<figcaption>
<small class="text-muted">AEMET monthly values for stations in León, 1992</small>
</figcaption>
<img src="{{< blogdown/postref >}}index_files/figure-markdown_strict/AEMET_monthly-1.png" alt="AEMET monthly values for stations in León, 1992"/>
</figure>

Don't forget to check the [docs](https://emf-creaf.github.io/meteospain/) for a full guide into using
`meteospain`.
