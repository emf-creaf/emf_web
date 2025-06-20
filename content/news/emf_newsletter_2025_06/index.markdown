---
title: "EMF Newsletter June 2025"
authors: ["emf"]
date: 2025-06-20
lastmod: 2025-06-20


categories: ["news"]
tags: ["news", "emf"]
summary: "Activity conducted at EMF between *13/12/2024* and *19/06/2025*"
---

Activity conducted at EMF between *13/12/2024* and *19/06/2025*

### Basic support activity

-   **Programming support**: L. Andreu-Hayles, L. Stewart, M. Riba, S. Saura, L. Olivé
-   **Data management support**: 
-   **Statistical support**: G. Bexultanova (Ph.D. student, M. Mencuccini), J De la Casa (Ph.D. student, J. Peñuelas/S. Nogué), Inma Serra, Pau Fortuño, Josep Barba, Jordi Bosch, Henna Tyyskä, Eduard Caballol
-   **Modelling support**: E. Spennati (Ph.D. student, M. Mencuccini), Clara Rodríguez, Laia Andreu-Hayles
-   **EMF Data and apps support**: T. Canals (Servei de Canvi Climàtic i Atmosfera, Govern Illes Balears), E. Busquets (CTFC)

### Participation in research projects

-   **WILDE** (EU - Researchers: J.M. Espelta, L. Brotons): Mentoring post-doc hired for the project (R. Balaguer).
-   **FORGENIUS** (EU - Researchers: M. Mencuccini): Collaboration with Nicolas Martin-StPaul on comparison and parameterization of models of plant hydraulics.
-   **IMPROMED** (Spain - IPs: M. De Cáceres / J.M. Espelta): Improving process-based models in their capability to forecast responses to drought. Field work conducted during winter-spring 2025.
-   **DRASTIC** (Spain - IP: M. Mencuccini): Tree water use and Drought responses: the roles of allometry, water storage and transport under climate change
-   **C4N** (EU - IP: A. Broekman): Transfer knowledge and best practices, as well as harmonising policies, to tackle the challenges related to biodiversity protection and climate change.
-   **TOFU** (Catalunya - IP: J. Oliva (UdL)): Healthier forests for a sustainable future. Assisting the development of vulnerability models for the impact of pests and pathogens.
-   **CARDIMED** (EU - CREAF coordinator: P. Andrés): Climate Adaptation and Resilience Demonstrated In the MEDiterranean region
-   **RESFIRE** (Spain - IPs: L. Brotons, S. Fraixedas): Assessing the potential of REStoring ecological FIRe regimes as Nature-based Solution to extreme wildfires in Mediterranean ecosystems.
-   **STOIKOS** (EU - IP: M. Fernández Martínez) Elemental ecology: towards an element-based functional ecology.

### Participation in transfer projects

-   **Contract with Centre de la Propietat Forestal** (A. Tovar, J. Vayreda, M. De Cáceres, R. Molowny): Evaluation of the effects of changes in silvicultural practices on carbon sequestration and forest function using modelling approaches.
-   **Contracte programa / Oficina Catalana de Canvi Climàtic** (M. De Cáceres, J. Vayreda, M. Banqué, R. Molowny): Assistance to M. Banqué in the generation of project report and executive summary.
-   **Grup de treball de Carboni al Sòl** (R. Molowny, several CREAF researchers and other 7 Research Centers in Catalonia): Soil carbon modelling for Catalonia (Generalitat).

### Network building

-  M. De Cáceres participated in an international workshop *Using tree trait diversity to forecast worldwide forest stability and resilience* organized by Raúl García-Valdes (Madrid; 3 days Dec. 2024) funded by *Instituto de Investigación en Cambio Global* (IICG-URJC).

-  M. De Cáceres visited INRAE-URFM Avignon (5 days, March 2025) to collaborate on species parameter estimation from plant trait databases (package `traits4models`).

-  M. De Cáceres participated in a workshop *Numerical Ecology through Space and Time* (Technopole Brest-Iroise, France, 13th-15th May 2025).

-  Co-organization of a international workshop (along with N. Martin-StPaul and I. Maréchaux) on *Using trait data for process-based model parameter estimation* (Avignon, 3 days March 2025) funded by French network *Psi-Hub*.

### Training & mentoring

**Courses taught**:

-   One-day course on *Ecological Trajectory Analysis* held on 13th May 2025 in Brest (France).

**Mentoring**:

-   Ph.D level (co-supervision R. Molowny): F. Andrade (CREAF)
-   Post-doc level: R. Balaguer-Romano (WildE project), M. Didion-Gency (MSCA)

### Software & model development

**Design and implementation**:

-   Revision and improvement of package `ecotraj` to include new data structures and allow cyclical trajectory analysis.
-   Modification of package `medfateland` to allow parallel simulation of subwatersheds.
-   Implementation in progress of a package to run the CENTURY 4.7 soil model from R.
-   Implementation of new data sources (IFN4) in package `forestables`

**Model parameter estimation**:

-   Harmonization of additional plant trait data sources and refinement of plant species parameter datasets for Spain, France, US and Australia.


### New software & update releases

-   New version of package `meteoland` (v.2.2.3) released on CRAN
-   New version of package `medfate` (v. 4.8.1) released on CRAN
-   New version of package `medfateland` (v. 2.6.0) released on CRAN
-   New version of package `ecotraj` (v. 1.1.0) released on CRAN
-   New version of package `vegclust` (v. 2.0.3) released on CRAN
-   New version of package `indicspecies` (v. 1.8.0) released on CRAN
-   New alpha version of package `forestables` available on GitHub (https://github.com/emf-creaf/forestables)
-   Update of the *Laboratori Forestal Català* (LFC) apps:
    -   Maintenance of all apps to keep up to date library dependencies and web tools
    -   Migration to new map library (mapdeck) completed, 3D maps are now available
    -   Fixed AllometrApp errors in the database
    -   New apps design and look

### EMF internal infraestructure maintenance

-   New S3 object storage for LFC apps using the CSUC S3 service
-   New data pipeline for daily meteorological data interpolation, now covering all Spain (except for Canary Islands) at 500 m^2 resolution. Data available at [https://data-emf.creaf.cat/public/gpkg/daily_interpolated_meteo/](https://data-emf.creaf.cat/public/gpkg/daily_interpolated_meteo/)
-   Improved app user statistics

### New datasets in the EMF catalog

**External datasets**:

  +   [*PlanetBiomass*](https://zenodo.org/records/8154445): Canopy height and biomass for Europe.

**EMF datasets**:

  +   [Meteorological data interpolated for all Spain (500 m^2)](https://data-emf.creaf.cat/public/gpkg/daily_interpolated_meteo/)

### Publications developing/using EMF tools

-   de la Casa J, Nogué S, De Cáceres M, Pla-Rabés S, Sardans J, Benavente M, Giralt S, Hernandez A, Raposeiro PM, Peñuelas J (2025) Understanding two millenia ecosystem perturbations on the Azores archipelago
through elementome trajectories. Ecological Indicators 176: 113630 (https://doi.org/10.1016/j.ecolind.2025.113630).

### Publications from other collaborations


### Communication

-   Oral presentation given at *6th Xylem International Meeting (XIM6)* (Sevilla, Spain) 18-20th March 2025: *Comparing visions of plant hydraulic responses to drought : a multiple sites evaluation of Sperry-type and Sureau-type models* (Miquel De Cáceres)
-   Oral presentation given at *III SIBECOL & XVII AEET Meeting* (Pontevedra, Spain) 2-7th June 2025: *A modular framework for process-based simulations of forest function and dynamics at stand to regional scales* (Miquel De Cáceres)
-   Poster presented at *9º Congreso Forestal Español* (Gijon, Spain) 16-20th June 2025: *forestables: un enfoque estructurado para la armonización de Datos de Inventarios Forestales Nacionales* (Adriana Tovar-Rodríguez)

### EMF Online impact 13/12/2024 - 19/06/2025

-   Laboratori Forestal Català (LFC):
    -   *Stats*: 914 visits (411 returning) / 6:45 mins average visit duration / 1280 page views
    -   *Apps most used*: IFN App (292 times) / Allometrapp (195 times) / DeBosCat App (130 times)
-   EMF Web:
    -   *Stats*: 1538 visits (373 returning) / 3:25 mins average visit duration / 4410 page views
    -   *Pages most visited*: External data (921 page views) / External models (642 visits) / Training (363 visits)
