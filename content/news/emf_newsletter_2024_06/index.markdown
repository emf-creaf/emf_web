---
title: "EMF Newsletter June 2024"
authors: ["emf"]
date: 2024-06-17
lastmod: 2024-06-17


categories: ["news"]
tags: ["news", "emf"]
summary: "Activity conducted at EMF between *28/10/2023* and *14/06/2024*"  
---

Activity conducted at EMF between *28/10/2023* and *14/06/2024*

### Basic support activity

-   **Programming support**: J. Sardans, L. Stewart, T. Bakx
-   **Data management support**: E. Pla, L. Andreu-Hayles
-   **Statistical support**: M. Riba, S. Albacete, S. Silvestre, J. Peñuelas, O. Boet, C. Sabaté
-   **Modelling support**: L. Andreu-Hayles, J. Rhoades, E. Pla, C. Azpiazu, M. Mostiga

### Participation in research projects

-   **WILDE** (EU - Researchers: J.M. Espelta, L. Brotons): Participation in a workshop on scenario definition and post-doc hiring to work on the Barcelona case study (<https://www.wilde-project.eu/>)
-   **RESONATE** (EU - Researchers: J. Martínez, F. Lloret, J.M. Espelta): Assisting in the use of MEDFATE for the evaluation of forest ecosystem services.
-   **FORGENIUS** (EU - Researchers: M. Mencuccini): Collaboration with Nicolas Martin-StPaul on comparison and parameterization of models of plant hydraulics.
-   **BOMFORES** (Spain - IP: M. De Cáceres): Design of new processes and development of model initialisation routines.
-   **DRASTIC** (Spain - IP: M. Mencuccini): Tree water use and Drought responses: the roles of allometry, water storage and transport under climate change
-   **C4N** (EU - IP: A. Broekman): Transfer knowledge and best practices, as well as harmonising policies, to tackle the challenges related to biodiversity protection and climate change.
-   **TOFU** (Catalunya - IP: J. Oliva (UdL)): Healthier forests for a sustainable future.
-   **CARDIMED** (EU - CREAF coordinator: P. Andrés): Climate Adaptation and Resilience Demonstrated In the MEDiterranean region

- Submission of a project proposal at the National level (MICINN), co-led by M. De Cáceres and J.M. Espelta.

### Participation in transfer projects

-   **Contract with Centre de la Propietat Forestal** (A. Tovar, J. Vayreda, M. De Cáceres, R. Molowny): Methodological revision of the effects of changes in silvicultural practices on carbon sequestration and forest function using modelling approaches.
-   **Contracte programa / Oficina Catalana de Canvi Climàtic** (M. De Cáceres, J. Vayreda, M. Banqué, R. Molowny): Simulation of forest projections including management scenarios and climate scenarios.
-   **Grup de treball de Carboni al Sòl** (R. Molowny, several CREAF researchers and other 7 Research Centers in Catalonia): Soil carbon modelling for Catalonia (Generalitat).
-   **VULNEMAP** (M. Banqué, J. Vayreda, V. Granda): Modelling the vulnerability of Catalonian forest to drought events (Generalitat).

### Network building

-   Researcher Nicolas Martin-StPaul visited CREAF on a 3-month sabbatical, thanks to Severo Ochoa visitor program, to work with EMF on plant hydraulic model comparison and parameter estimation.

-   M. De Cáceres, R. Balaguer-Romano (WildE postdoc) and A. Sañé (Msc student) visited INRAE-URFM avignon to collaborate on a study focused on live fuel moisture content (LFMC) modelling and in general to strengthen collaboration.

-   The forest modelling framework led by EMF (packages `medfate`, `medfateland`, `meteoland` and `traits4models`) are now part of a collaborative effort between CREAF, CTFC and INRAE-URFM (Avignon), with the aim to become a reference at the Mediterranean level. 

-   Software hackaton held in CREAF (2 days), with researchers from U.Zaragoza, U.P. Valencia and Forschungszentrum Julich (Germany) to progress in the coupling between `medfateland` and the hydrological model SERGHEI.

### Training & mentoring

**Courses taught**:
-   Introduction to R and basic statistics, tidyverse, ggplot2, Rmarkdown and Quarto (V. Granda and R. Molowny, Facultat de Biologia, UB).

**Mentoring**:

-   Ms.C. level: A. Sañé
-   Ph.D level: J. Dávila, J. De la Casa
-   Ph.D level (visitors): V. Saponaro (U. Tuscia, Italy)
-   Ph.D level (co-supervision R. Molowny): F. Andrade (CREAF)
-   Post-doc level: R. Balaguer-Romano, F. D'Adamo

### Model development

**Design and implementation**:

-   Development of R package `forestables` (alpha version) for loading and harmonizing national forest inventory from several countries (Spain, France, USA). Currently available on EMF GitHub only. 

-   Revision of soil hydrology in package `medfate` and of lateral transfer processes in the implementation of model TETIS in package `medfateland`, in collaboration with María González Sanchís (CTFC).

-   Development of R package `traits4models` aiming at facilitating the process of estimating plant species parameters for process-based models (harmonization of plant trait data bases and parameter table filling)

-   Development of R package `dendrohist` as companion software for the namesake DENDROHIST project led by Dr. L. Andreu-Hayles.

**Parameter estimation**:

-   Development of model initialization routines for simulations in spatial contexts (forest inventory locations and continuous landscapes), to be used with package `medfateland`.

-   Harmonization of plant trait data sources and development of plant species parameter datasets for Spain, France, US and Australia.

### New software & updates

-   New version of package `meteospain` (v. 0.1.4) released on CRAN
-   New version of package `meteoland` (v.2.2.1) released on CRAN
-   New version of package `medfate` (v. 4.3.1) released on CRAN
-   Package `medfateland` (v. 2.4.3) released on CRAN for the first time
-   Update of the *Laboratori Forestal Català* web:
    -   Update of DEBOSCAT App to include 2023 data.
    -   Maintenance of all apps to keep up to date library dependencies and web tools.

### New datasets in the EMF catalog

**External datasets**:

  +   [*IFN Andorra*](https://ari-sostenibilitat.notion.site/1r-Inventari-Nacional-Forestal-d-Andorra-169c7041481549fdbc3a1590a9fef448): Inventari Forestal Nacional d’Andorra.
  +   [*CPTD 2.0*](https://doi.org/10.6084/m9.figshare.19448219.v6): The China plant trait database version 2.
  +   [*BROT 2.0*](https://doi.org/10.6084/m9.figshare.c.3843841.v1): A functional trait database for Mediterranean Basin plants.
  +   [*AusTraits*](https://doi.org/10.6084/m9.figshare.14545755): A curated plant trait database for the Australian flora.
  +   [*Tundra Trait Team*](https://github.com/TundraTraitTeam/TraitHub): A database of plant traits spanning the tundra biome.
  +   [*FunAndes*](https://doi.org/10.6084/m9.figshare.19665471): A functional trait database of Andean plants. 
  +   [*FLAMITS*](https://doi.org/10.5061/dryad.h18931zr3): A global database of plant flammability traits. 
  +   [*RSIP*](https://doi.org/10.1111/nph.18031): Root systems of individual plants.
  +   [*RecruitNet*](https://doi.org/10.5281/zenodo.6567608): A global database of plant recruitmentnetworks.

**CREAF datasets**:

  +   [*DEBOSCAT App*](https://laboratoriforestal.creaf.cat/deboscat_app/) data updated to 2023.
  
### New workflows

-   [*Parallel computation in R*](https://emf.creaf.cat/tech_docs/r_parallel_computing_tech_doc/) 

### Publications developing/using EMF tools

-   Sánchez-Dávila J, De Cáceres M, Vayreda J, Retana J (2024) Regional patterns and drivers of modelled water flows along environmental, functional and stand structure gradients in Spanish forests. Hydrol. Earth Syst. Sci. Discuss ([in press](https://hess.copernicus.org/preprints/hess-2023-255/)).

-   Cabon A, Ameztegui A, Anderegg WRL, Martínez-Vilalta J, De Cáceres M (2024). Probing the interplay of biophysical constraints and photosynthesis to model tree growth. Agriculture and Forest Meteorology 345: 109852 (https://doi.org/10.1016/j.agrformet.2023.109852).

### Publications from other collaborations

-   Grünig M, Rammer W, Albrich K, André F, Augustynczik ALD, Bohn F, Bouwman M, Bugmann H, Collalti A, Cristal I, Dalmonech D, De Cáceres M, De Coligny D, Dobor L, Dollinger C, Forrester DI, Garcia-Gonzalo JG, González JR, Hiltner U, Hlásny T, Honkaniemi J, Huber N, Jonard M, Jönsson AM, Lagergren F, Nieberg M, Mina M, Mohren F, Moos C, Morin X, Muys B, Peltoniemi M, Reyer CPO, Storms I, Thom D, Toïgo M, Seidl R (2024). A harmonized database of European forest simulations under climate change. Data in Brief 54: 110384 (https://doi.org/10.1016/j.dib.2024.110384).

-   Torres-Ruiz JM, Cochard H, Delzon S, Boivin T, Burlett R, Cailleret M, Corso D, Delmas C, De Caceres M, Diaz-Espejo A, Fernandez-Conradi P, Guillemot J, Lamarque L, Limousin, JM, Mantova M, Mencuccini M, Morin X, Pimont F, Resco de Dios V, Ruffault J, Trueba S, Martin-StPaul, N (2024). Plant hydraulics at the heart of plant, crops and ecosystem functions in the face of climate change. New Phytologist (https://doi.org/10.1111/nph.19463).

### Communication

-   Oral presentation given and participation in round table on the *Dia internacional dels boscos*, focusing on water-related issues, held in 21/03/2024.

### EMF Online impact 21/10/2023 - 14/06/2024

-   Laboratori Forestal Català (LFC):
    -   *Stats*: 819 visits / 7:26 mins average visit duration / 2889 page views
    -   *Apps most used*: IFN App (391 times) / Allometrapp (265 times) / DeBosCat App (239 times)
-   EMF Web:
    -   *Stats*: 1133 visits / 3:43 mins average visit duration / 3625 page views
    -   *Pages most visited*: External models (578 visits) / External Data (353 visits) / CREAF models (350 visits)
