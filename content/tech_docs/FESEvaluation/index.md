---
title: Evaluation of Forest Ecosystem Services
authors:
- mcaceres
- jvroces
- jmartinezvilalta
- jvayreda
- mbanque
- fdadamo
- jmespelta
categories: tech_docs
tags:
- forest
- ecosystem services
- catalonia
draft: false
featured: false
date: '2023-09-04'
lastmod: '2023-10-10'
summary: This technical document provides the definition and operational estimation
  procedures of a number of forest ecosystem services to be evaluated for Catalonia
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/FESEvaluation
  url_docs: ''
---
## Introduction

This technical document provides the definition and operational
estimation procedures of a number of forest ecosystem services to be
evaluated for Catalonia (NE Spain) both in historical assessments (using
forest inventory data) and future projections (using model simulations
of forest function and dynamics).

The following table, modified from Jose V. Roces-Díaz et al. (2018),
provides a summary of definitions and indicators included:

| Category     | Forest ecosystem service   | Indicator                                  | Definition                                                                                                                                                                                        |
|--------------|----------------------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Provisioning | Provision of raw materials | Potential timber and firewood supply       | Potential timber and firewood harvested in forest stands per year, assessed as the annual increase in standing stocks                                                                             |
| Provisioning | Provision of raw materials | Actual timber and firewood supply          | Actual timber and firewood harvested in forest stands per year                                                                                                                                    |
| Provisioning | Food provision             | Mushroom production                        | Edible mushroom production for pine per year                                                                                                                                                      |
| Provisioning | Water provision            | Blue water                                 | Water exported by surface runoff or deep drainage into the water table                                                                                                                            |
| Provisioning | Water provision            | Runoff coefficient                         | Water exported in relative terms, as the ratio of blue water over precipitation                                                                                                                   |
| Regulating   | Climate regulation         | Forest carbon sink                         | Forest carbon accumulation in above-ground and below-ground woody tissues of vegetation                                                                                                           |
| Regulating   | Water regulation           | Vegetation and soil water storage capacity | Sum of vegetation water storage capacity and soil water holding capacity of the forest stand                                                                                                      |
| Regulating   | Erosion control            | Erosion control                            | Amount of rainfall erosive potential that is mitigated due to vegetation cover                                                                                                                    |
| Cultural     | Recreational               | Potential recreational value               | The perception of the value of the forest stand for recreational purposes as a function of its structure and composition                                                                          |
| Supporting   | Biodiversity potential     | Biodiversity Potential Index               | Potential of the forest stand to serve as habitat for biodiversity, on the basis of its diversity of woody species, vertical structure, presence of large trees and standing and downed dead wood |

The next sections detail the metrics and estimation procedures of each
ecosystem service.

## Provision services

### Provision of materials (1)

**Indicator**: Potential timber and firewood supply

**Definition**: Potential timber and firewood harvested in forest stands
per year, assessed as the annual increase in standing stocks

**Metric and units**: $m^3 \cdot ha^{-1} \cdot yr^{-1}$ of timber and
firewood

**Estimation procedures**: For historic periods, potential harvesting
can be obtained comparing standing stock volumes between consecutive
surveys of forest inventories (Jose V. Roces-Díaz et al. 2021). This
assessment should preferably exclude forest plots where management has
occurred between surveys, because otherwise the potential supply may be
underestimated. For future projections, simulated forest dynamics should
not include forest management, either. A distinction is made between
timber (wood for construction, furniture or other uses) and firewood
(wood for burning), on the basis of tree diameter at breast height (DBH)
and species:

- *Timber*: Changes in stem wood volume of trees from all species except
  firewood species (*Quercus ilex*, *Q. pubescens*, *Q. faginea*, *Q.
  cerrioides*, *Arbutus unedo* and *Erica arborea*), and DBH \> 22.5
- *Firewood*: Changes in stem wood volume of firewood species (*Quercus
  ilex*, *Q. pubescens*, *Q. faginea*, *Q. cerrioides*, *Arbutus unedo*
  and *Erica arborea*), with DBH \> 7.5, or stem wood volume of trees of
  other species and 7.5 \< DBH \< 22.5.

The standing volume ($m^3 \cdot ha^{-1}$) of each tree is obtained
applying allometric volume equations depending on species, DBH and
height, which are provided by the Spanish National Forest Inventory for
each Spanish province and survey (in the case of future projections,
equations from IFN3 are used). Function `IFNvolume()` from the R package
called `IFNallometry` (available at
[GitHub](https://github.com/emf-creaf/IFNallometry)) is used for volume
calculations. When not all trees in the forest plot have been measured,
the standing volume of each measured tree is multiplied by its
corresponding density factor in the plot to obtain the volume per
hectare. Volumes can be aggregated across tree records per species, plot
and/or diametric classes. The difference in standing volume for a given
period (e.g. consecutive inventory surveys or model time steps) is
divided by its duration in years.

**Remarks and potential improvements**: Estimation of potential timber
and firewood supply assumes an extraction rate equal to 100% of growth,
and should be estimated on forest stands where management operations
have not been conducted, whereas actual extraction rates for a target
region can be lower or higher than observed growth. The distinction
among products could be made more sophisticated by considering a table
indicating the proportion of different products for combinations of
species and DBH class.

### Provision of materials (2)

**Indicator**: Actual timber and firewood supply

**Definition**: Actual timber and firewood harvested in forest stands
per year

**Metric and units**: $m^3 \cdot ha^{-1} \cdot yr^{-1}$ of timber and
firewood

**Estimation procedures**: For historic periods, actual (observed)
harvested volumes can be obtained from forestry statistics of the target
area (e.g. Jose V. Roces-Díaz et al. (2018)). In addition, tree cuts
between forest inventories in permanent plots can also be used to
estimate actual harvested wood, if cut trees are identified. For future
projections, simulations of forest dynamics including management
scenarios can be used to estimate actual supply according to the
scenario. As before, a distinction is made between timber (wood for
construction, furniture or other uses) and firewood (wood for burning),
on the basis of tree diameter at breast height (DBH) and species:

- *Timber*: Stem wood volume of cut trees from all species, except
  firewood species (*Quercus ilex*, *Q. pubescens*, *Q. faginea*, *Q.
  cerrioides*, *Arbutus unedo* and *Erica arborea*), and DBH \> 22.5
- *Firewood*: Stem wood volume of cut firewood species (*Quercus ilex*,
  *Q. pubescens*, *Q. faginea*, *Q. cerrioides*, *Arbutus unedo* and
  *Erica arborea*), with DBH \> 7.5, or stem wood volume of cut trees of
  other species and 7.5 \< DBH \< 22.5.

When necessary, the volume ($m^3 \cdot ha^{-1}$) of each product is
obtained applying allometric volume equations depending on species, DBH
and height, which are provided by the Spanish National Forest Inventory
for each Spanish province and survey (in the case of future projections,
equations from IFN3 are used). The volume corresponding to a given cut
tree is multiplied by its corresponding density factor to obtain the
volume per hectare and values are aggregated across tree records. This
aggregated value is divided by its duration (e.g. time interval between
surveys or the model time step) to express it as a rate. Function
`IFNvolume()` from the R package called `IFNallometry` (available at
[GitHub](https://github.com/emf-creaf/IFNallometry)) is used for volume
calculations.

**Remarks and potential improvements**: As before, the distinction among
products could be made more sophisticated by considering a table
indicating the proportion of different products for combinations of
species and DBH class.

### Food provision

**Indicator**: Mushroom production

**Definition**: Edible mushroom production for pine, oak and fir forests
per year

**Metric and units**: Annual production of edible mushrooms,
$kg^{-1} \cdot ha^{-1} \cdot yr^{-1}$

**Estimation procedures**: Empirical models have been developed for
edible mushrooms in Catalan pine forests by de Miguel et al (2014).

**Remarks and potential improvements**: Note that the current procedures
are restricted to mushroom species that can be eaten. There is a need to
include mushroom production models for other forest types such as oaks,
fir, if equations are made available. Food provision should be
complemented by other products, such as pinecones, for which production
models have been published.

### Water provision (1)

**Indicator**: Blue water

**Definition**: Amount of water exported by surface runoff or deep
drainage into the water table per year

**Metric and units**: $mm \cdot yr^{-1} = l \cdot m^2\cdot yr^{-1}$

**Estimation procedures**:

Blue water is defined as the sum of water leaving the forest stand via
overland (surface) runoff and the water draining beyond the reach of
plant roots (i.e. deep drainage). These two flows can be estimated on a
daily scale using a water balance model, and then be aggregated for
period of evaluation and expressed as $mm \cdot yr^{-1}$. In our case,
the MEDFATE model (De Cáceres et al. 2015) is used for performing water
balance simulations over the evaluation period. See model details in
[medfate’s reference
book](https://emf-creaf.github.io/medfatebook/index.html).

**Remarks and potential improvements**: This indicator is appropriate to
estimate the forest service on water supply, in absolute terms, but is
very sensitive on the precipitation occurred during the evaluation
period.

### Water provision (2)

**Indicator**: Runoff ratio

**Definition**: Water exported in relative terms, as the ratio of blue
water (i.e. the sum of surface runoff and deep drainage at the plot
scale) over precipitation for an evaluation period

**Metric and units**: A coefficient ranging between 0 (no water is
exported) and 1 (all water that falls in the stand becomes blue water)

**Estimation procedures**:

This indicator is estimated from the previous one, dividing the amount
of blue water estimated for the evaluation period by the amount of
precipitation in the same period (e.g. Jose V. Roces-Díaz et al.
(2021)).

**Remarks and potential improvements**: Even though this indicator is
defined as a ratio, it is still dependent on the weather data used for
evaluation. Generally speaking, the longer the period of evaluation
(e.g. 5-10 years minimum) the more will the indicator reflect the role
of forest structure and composition on provision, because variation in
the run-off coefficient caused by inter-annual variation in
precipitation will tend to be smoothed out.

## Regulation services

### Climate regulation

**Indicator**: Forest carbon sink

**Definition**: Forest carbon sink in above-ground and below-ground
woody tissues of vegetation

**Metric and units**: $Mg\,\,CO_2 \cdot ha^{-1} \cdot yr^{-1}$ or
$Mg\,\,C \cdot ha^{-1} \cdot yr^{-1}$

**Estimation procedures**: For historic periods, carbon sink can be
obtained comparing wood biomass estimates from permanent plots of forest
inventories. For future projections, simulations of forest dynamics are
also possible. The sink rate is estimated subtracting the wood biomass
at the beginning of the evaluation period from the wood biomass estimate
at the end of the evaluation period, divided by period length. The tree
biomass ($Mg CO_2^3 \cdot ha^{-1}$) is obtained applying allometric
biomass equations for the above-ground and below-ground components,
which depend on DBH and height and come from different publications
(Diéguez-Aranda et al. 2009; Ruiz-Peinado, Rio, and Montero 2011;
Ruiz-Peinado, Montero, and Del Rio 2012). Function `IFNbiomass()` from
the R package `IFNallometry` (available at
[GitHub](https://github.com/emf-creaf/IFNallometry)) is used for biomass
calculations. Forest carbon sink due to changes in shrub biomass can be
also considered, using allometries presented in De Cáceres et al. (2019)
and available in R package `medfuels` (also available at
[GitHub](https://github.com/spif-ctfc/medfuels)). Individual
below-ground shrub biomass can be estimated from individual above-ground
biomass using $B_{shrub, below} = 0.732 \cdot B_{shrub, above}^{0.9427}$
(Silva and Rego 2004).

**Remarks and potential improvements**: Note that it would be possible
to consider the biomass extracted in forest management as additional
source of forest growth that is not observed when comparing the biomass
estimates of standing trees. New allometries for shrub species in Spain
have been presented in Montero et al. (2020).

### Water regulation

**Indicator**: Vegetation and soil water storage capacity

**Definition**: Sum of vegetation water storage capacity and soil water
holding capacity of the forest stand

**Metric and units**: mm = l/m2 of water that can be held in the canopy
and soil

**Estimation procedures**:

The indicator for water regulation service of a forest stand has been
defined as the sum of vegetation ($C_m$) and soil water storage
capacity:

$$WR = C_m + \sum_s{V_{fc,s}}$$

*Vegetation water holding capacity* is estimated from the leaf area
index of herbs and woody plant cohorts in the forest stand (Watanabe and
Mizutani 1996):
$$C_m = LAI_{herb}\cdot S_{herb} + \sum_i{ LAI_i \cdot S_i}$$ where
$LAI_{herb}$ is the leaf area index of the herbaceous layer,
$S_{herb} = 1$ is the water holding capacity per LAI unit of the
herbaceous layer, $LAI_i$ is the leaf area index of plant woody cohort
$i$ and $S_i$ is the water-holding capacity per LAI unit of woody cohort
$i$, which depends on species identity.

*Soil water holding capacity* is estimated as the sum, over all $s$ soil
layers, of the volume that can be held given soil layer depth $d_s$,
texture and percentage of rocks $P_{rocks,s}$:
$$V_{fc,s} = d_s\cdot ((100-P_{rocks,s})/100)\cdot\theta_{fc,s}$$ where
$\theta_{fc,s}$ is the soil moisture content of the soil layer at field
capacity (i.e. at -0.033 MPa), which depends on soil texture and organic
matter content. $\theta_{fc,s}$ is estimated from texture, bulk density
and organic matter using Saxton & Rawls (2006)’s pedotransfer functions.
Calculations are conducted using function `soil_waterFC()` from package
**medfate**.

**Remarks and potential improvements**: Of the two components, only
$C_m$ is dynamic. Moreover, the estimation of $V_{fc,s}$ is very
uncertain unless reliable information is available on $P_{rocks,s}$. The
water regulation service could be estimated as the ratio between deep
drainage flow and the overall water exported from the stand, assuming
that sub-surface flows are better than surface flows from the
perspective of hydrological regulation.

### Erosion control

**Indicator**: Erosion control

**Definition**: Amount of rainfall erosive potential that is mitigated
due to vegetation cover

**Metric and units**: $Mg \cdot ha^{-1} \cdot yr^{-1}$

**Estimation procedures**: The estimation procedure is similar to Guerra
et al. (2016), who re-interpreted the classical Revised Universal Soil
Loss Equation (RUSLE), and Morán-Ordóñez et al. (2020). The RUSLE method
estimates soil erosion as the product of
$K \cdot LS \cdot R \cdot C \cdot P$, where $K$ is soil erodibility (an
intrinsic characteristic of each soil type), $LS$ is the topographic
factor accounting for the slope length and steepness, $R$ is a
non-dimensional factor of physical erosivity of rainfall, $C$ is related
with the type and structure of the vegetation of each stand and finally
$P$ is the conservation practices factor (not considered here).

For our calculations, we first estimate for the evaluation period the
structural impact ($\gamma$), i.e. potential soil erosion if vegetation
were absent: $$\gamma = K \cdot LS \cdot R$$ and the estimated actual
soil loss $\beta$ after vegetation cover is considered:

$$ \beta = K \cdot LS \cdot R \cdot C $$,

and finally calculated the erosion mitigation (mitigated impact) as
their difference:

$$EM = \gamma - \beta = K \cdot LS \cdot R \cdot (1 - C)$$ Erosion
components are estimated as follows:

- $K$ values were sourced from the data base by Panagos et al. (2014) at
  500 m resolution;
- $LS$ were obtained at 25 m of resolution from Panagos et al. (2015).
- $R$ is calculated using the model by Diodato and Bellocchi (2010) and
  daily rainfall data (from “meteoland” package, De Caceres et al.,
  2018).
- $C$ is the mitigation (reduction) effect of vegetation cover. Despite
  the $C$ term promotes its interpretation as cover, a complete
  vegetation cover should have a maximum reduction of erosion, and hence
  $C = 0$. In practice, we estimate $C$ as the faction of
  photosynthetically active radiation (PAR) reaching the ground
  ($FPAR_{ground}$), which can be estimated as a function of leaf area
  index and extinction coefficients:
  $$C = FPAR_{ground}=e^{-0.5 \cdot LAI_{herb}} \cdot e^{-\sum_{i}{k_{i} \cdot LAI_{i}}}$$
  where $LAI_{herb}$ is the leaf area index of herbaceous vegetation
  (when present), $LAI_i$ is the leaf area index of woody cohort $i$,
  $k_i$ is the corresponding extinction coefficient for PAR.

**Remarks and potential improvements**:

## Cultural services

### Recreational

**Indicator**: Potential recreational value

**Definition**: The perception of the value of the forest stand for
recreational purposes as a function of its structure and composition

**Metric and units**: A value between 0 (no potential recreational
value) and 1 (maximum potential recreational value).

**Estimation procedures** (yet to be implemented in a function):

A literature review allowed us to identify a number of key studies
relating vegetation structure and composition to the potential
recreational value of forests. From these papers, we extracted only
those metrics that we believe can be estimated from standard dynamic
model outputs. These are five stand-level metrics, i.e., tree size,
variation in tree size, thickness of vegetation cover, density of ground
vegetation, number of tree and shrub species, and two landscape-level
metrics, i.e., variation between stands (landscape variability) and
uniqueness (areas with the lowest density of plots have higher
uniqueness).

| Definition                            | Level     | Metric                                                       | Range       |
|---------------------------------------|-----------|--------------------------------------------------------------|-------------|
| Tree size                             | Stand     | Maximum DBH                                                  | ca. 0 - 100 |
| Variation in tree size                | Stand     | CV DBH                                                       | 0 - 1.5     |
| Thickness of vegetation cover         | Stand     | LAI (trees + shrubs)                                         | ca. 0 - 8   |
| Density of ground vegetation          | Stand     | Maximum shrub cover                                          | 1 - 90      |
| Number of tree and shrub species      | Stand     | Woody plant species richness (trees + shrubs)                | 1 - 30      |
| Variation of tree size between stands | Landscape | CV of average DBH relative to the nearby stands              | 0 - 1       |
| Uniqueness                            | Landscape | 1 – proportion of forest cover relative to the nearby stands | 0 - 1       |

A questionnaire is used to define the shape of the relationship between
each metric and the potential recreational value. Then, the seven
different functions are combined into an overall potential recreational
value. The weight of the different metrics can be assumed equal or
included in the previous questionnaire and adjusted accordingly in the
calculation.

**Remarks and potential improvements**: The idea was to include also the
amount of natural deadwood, but then the index becomes conceptually
closer to the biodiversity potential (described below). In projections
of forest dynamics, inclusion of species richness into this indicator
requires that the model incorporates colonization processes. Otherwise,
local extinction will always decrease species richness.

## Supporting services

### Biodiversity potential

**Indicator**: A simplified version of the Biodiversity potential index
(BPI)

**Definition**: Potential of the forest stand to serve as habitat for
biodiversity, on the basis of its diversity of woody species, vertical
structure, presence of large trees and standing and downed dead wood.

**Metric and units**: A value between 0 (lowest biodiversity potential)
and 5 (highest biodiversity potential).

**Estimation procedures** (yet to be implemented in a function):

The BPI is a simplified version of the *Index de Biodiversitat
Potencial* (IBP) was adapted to Catalonia region by *Centre de la
Propietat Forestal* (Baiges et al. 2019) from the work by Larrieu and
Gonin (2008). IBP was designed to be applied in the field (including
landscape features) and, therefore, not all its ten components can be
evaluated from model simulation results. Here we adapted the Catalan IBP
focusing on the following four components:

1)  Diversity of native (or archaeophyte) species
2)  Vertical structure of vegetation
3)  The presence of dead wood
4)  The presence of large trees

Moreover the current application of IBP in Catalonia (IBP ver. 3) is
slightly different depending on two biogeographic domains: (D1)
Mediterranean domain; (D2) Montane-subalpine domain. We addressed this
level of complexity by calculating our BPI twice, once assuming one
domain or the other, followed by averaging the two resulting values with
weights depending on the ascription of the tree species occurring in the
stand to the two domains. The following describes how the A-D components
are estimated for each of the two domains and how the final BPI value is
determined.

*$BPI_A$ - Native species*

This component evaluates the diversity of native (or archaeophyte) tree
species with individuals taller than 50 cm height in the stand. The list
of native genus/species is the following: *Quercus*, *Arbutus*,
*Cercis*, *Acer*, *Corylus*, *Abies*, *Betula*, *Castanea*, *Prunus
avium*, *Pinus*, *Fagus sylvatica*, *Fraxinus*, *Ceratonia*, *Celtis*,
*Juglans regia*, *Olea europaea*, *Ulmus*, *Pyrus*, *Malus*, *Populus
alba*, *Juniperus thurifera*, *Salix*, *Sorbus*, *Taxus*, *Tilia*,
*Alnus*, *Cupressus*

The following table describes how component $BPI_A$ is defined depending
on the number of genus of native species present in the stand and the
domain of application:

| $BPI_A$ value | Criterion D1    | Criterion D2    |
|---------------|-----------------|-----------------|
| 0             | 0 or 1 genus    | 0 or 1 genus    |
| 1             | 2 genus         | 2 genus         |
| 2             | 3 or 4 genus    | 3 genus         |
| 5             | 5 or more genus | 4 or more genus |

For D2 we simplified the two tables given in BPI documentation. If the
cover sum of native (or archaephyte) tree species in the stand is less
than 50%, then the value of $BPI_A$ cannot be larger than 2, even if the
number of native genus is higher than 3.

*$BPI_B$ - Vertical structure of vegetation*

Fine strata are considered: herbaceous vegetation, very low (\< 1.5 m),
low (1.5-7 m), intermediate (7-20 m) and high (\> 20 m). Classify woody
cohorts into strata according to their height. Calculate the cover of
each woody cohort (for shrubs is directly in the shrub data, for trees
it comes from an allometry based DBH and open-grown assumption). Sum the
total cover of each strata. Count the number of strata that are more
than 20% cover.

| $BPI_B$ value | Criterion                        |
|---------------|----------------------------------|
| 0             | 0 or 1 stratum with \> 20% cover |
| 1             | 2 strata with \> 20% cover       |
| 2             | 3 or 4 strata \> 20% cover       |
| 5             | 5 or more strata \> 20% cover    |

*$BPI_C$ - Dead wood*

Conversely to the original BPI, we do not distinguishing between
standing dead trees (i.e. snags) and dead trees in the ground
(i.e. logs). Moreover, it is assumed that decay (decomposition) of dead
wood is dealt externally, so that the index is calculated considering
the actual current amount of dead wood in the stand.

First, dead trees are classified into medium or large depending on their
size and biogeographic domain of application:

- For D1, classify dead trees as *medium dead wood (MDW)* if 17.5 \< DBH
  \< 27.5 or *large dead wood (LDW)* if DBH \> 27.5
- For D2, classify dead trees as *medium dead wood (MDW)* if 17.5 \< DBH
  \< 37.5 or *large dead wood (LDW)* if DBH \> 37.5
- Regardless of the domain, if species has a slow growth (Alnus,
  Arbutus, Acer, Pyrus, Malus, Sorbus) then if DBH \> 17.5 cm is already
  considered as LDW

Then, the value of dead wood component is determined from the density of
dead trees in MDW and LDW classes, using the following table:

| $BPI_C$ value | Criterion                  |
|---------------|----------------------------|
| 0             | 1 \< LDW/ha & 1 \< MDW/ha  |
| 1             | 1 \< LDW/ha & 1 \>= MDW/ha |
| 2             | 1 to 3 LDW/ha              |
| 5             | More than 3 LDW/ha         |

*$BPI_D$ - Large trees alive*

First, live trees are classified into large or very large depending on
their size and biogeographic domain of application:

- For D1, classify trees as *large trees (LT)* if 37.5 cm \< DBH \< 57.5
  cm or *very large trees (VLT)* if \> 57.5 cm.
- For D2, classify trees as *large trees (LT)* if 47.5 cm \< DBH \< 67.5
  cm or *very large trees (VLT)* if \> 67.5 cm.
- Regardless of the domain, if species has a slow growth (Alnus,
  Arbutus, Acer, Pyrus, Malus, Sorbus) then if DBH \> 37.5 cm is already
  considered as VLT.

Then, the value of large trees is determined from the density of trees
in LT and VLT classes, using the following table:

| $BPI_D$ value | Criterion                 |
|---------------|---------------------------|
| 0             | 1 \< VLT/ha & 1 \< LT/ha  |
| 1             | 1 \< VLT/ha & 1 \>= LT/ha |
| 2             | 1 to 5 VTL/ha             |
| 5             | More than 5 VTL/ha        |

*Overall Biodiversity Potential Index*

BPI is the average of the four metrics, each one going from 0 to 5.
Double weight is given to dead wood, according to the original BPI
definition of considering snags and logs separately.

$$BPI_{domain} = (BPI_A + BPI_B + 2 \cdot BPI_C + BPI_D)/5$$ For a given
plot, we calculate BPI corresponding to each of the two domains,
i.e. $BPI_{D1}$ and $BPI_{D2}$. Then, we perform a weighted average of
the two BPI values using the sum of basal area of species belonging to
each of the domains, $BA_{D1}$ and $BA_{D2}$ as weights:

$$BPI = \frac{BPI_{D1} \cdot BA_{D1} + BPI_{D2} \cdot BA_{D2}}{BA_{D1} + BA_{D2}}$$

**Remarks and potential improvements**: In projections of forest
dynamics, inclusion of species richness into this indicator requires
that the model incorporates colonization processes. Otherwise, local
extinction will always decrease species richness. A potential
improvement would be to explicitly model dead woody decay using
functions depending on climatic conditions.

## References

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-baiges_teresa_posada_2019" class="csl-entry">

Baiges, Teresa, Teresa Cervera, Noemi Palero, P. Gonin, and P. Larrieu.
2019. “Posada a Punt de l’índex de Biodiversitat Potencial: Un
Termòmetre Per a Mesurar La Capacitat d’allotjar Biodiversitat Dels
Boscos.” *Silvicultura* 80: 26–36.
<https://cpf.gencat.cat/web/.content/or_organismes/or04_centre_propietat_forestal/03_linies_actuacio/transferencia_de_coneixement/IBP_CAT/Binaris/IBP_Silvicultura_2019.pdf>.

</div>

<div id="ref-DeCaceres2019" class="csl-entry">

De Cáceres, Miquel, Pere Casals, Eva Gabriel, and Xavier Castro. 2019.
“Scaling-up Individual-Level Allometric Equations to Predict Stand-Level
Fuel Loading in Mediterranean Shrublands.” *Annals of Forest Science* 76
(3): 87. <https://doi.org/10.1007/s13595-019-0873-4>.

</div>

<div id="ref-DeCaceres2015" class="csl-entry">

De Cáceres, Miquel, Jordi Martínez-Vilalta, Lluís Coll, Pilar Llorens,
Pere Casals, Rafael Poyatos, Juli G. Pausas, and Lluís Brotons. 2015.
“Coupling a Water Balance Model with Forest Inventory Data to Predict
Drought Stress: The Role of Forest Structural Changes Vs. Climate
Changes.” *Agricultural and Forest Meteorology* 213: 77–90.
<https://doi.org/10.1016/j.agrformet.2015.06.012>.

</div>

<div id="ref-de-miguel_impact_2014" class="csl-entry">

de-Miguel, Sergio, José Antonio Bonet, Timo Pukkala, and Juan Martínez
De Aragón. 2014. “Impact of Forest Management Intensity on
Landscape-Level Mushroom Productivity: A Regional Model-Based Scenario
Analysis.” *Forest Ecology and Management* 330 (October): 218–27.
<https://doi.org/10.1016/j.foreco.2014.07.014>.

</div>

<div id="ref-dieguez-aranda_herramientas_2009" class="csl-entry">

Diéguez-Aranda, U., A. Rojo Alboreca, F. Castedo-Dorado, J. G. Álvarez
González, M. Barrio-Anta, F. Crecente-Campo, J. M. González González, et
al. 2009. *Herramientas Selvícolas Para La Gestión Forestal Sostenible
En Galicia*. Dirección Xeral de Montes, Consellería do Medio Rural,
Xunta de Galicia.

</div>

<div id="ref-diodato_medrem_2010" class="csl-entry">

Diodato, Nazzareno, and Gianni Bellocchi. 2010. “MedREM, a Rainfall
Erosivity Model for the Mediterranean Region.” *Journal of Hydrology*
387 (1-2): 119–27. <https://doi.org/10.1016/j.jhydrol.2010.04.003>.

</div>

<div id="ref-guerra_assessment_2016" class="csl-entry">

Guerra, Carlos A., Joachim Maes, Ilse Geijzendorffer, and Marc J.
Metzger. 2016. “An Assessment of Soil Erosion Prevention by Vegetation
in Mediterranean Europe: Current Trends of Ecosystem Service Provision.”
*Ecological Indicators* 60: 213–22.
<https://doi.org/10.1016/j.ecolind.2015.06.043>.

</div>

<div id="ref-larrieu_lindice_2008" class="csl-entry">

Larrieu, Laurent, and Pierre Gonin. 2008. “L’indice de Biodiversité
Potentielle (Ibp) : Une Méthode Simple Et Rapide Pour Évaluer La
Biodiversité Potentielle Des Peuplements Forestiers.” *Revue Forestière
Française*, no. 6. <https://doi.org/10.4267/2042/28373>.

</div>

<div id="ref-montero_produccion_2020" class="csl-entry">

Montero, Gregorio, César López-Leiva, Ricardo Ruiz-Peinado, Eduardo
López-Senespleda, Raquel Onrubia, and María Pasalodos. 2020. *Producción
de Biomasa y Fijación de Carbono Por Los Matorrales Españoles y Por El
Horizonte Orgánico Superficial de Los Suelos Forestales*. Ministerio de
Agricultura, Pesca y Alimentación.

</div>

<div id="ref-moranordonez_future_2020" class="csl-entry">

Morán‐Ordóñez, Alejandra, Andrea Duane, Assu Gil‐Tena, Miquel De
Cáceres, Núria Aquilué, Carlos A. Guerra, Ilse R. Geijzendorffer,
Marie‐Josée Fortin, and Lluís Brotons. 2020. “Future Impact of Climate
Extremes in the Mediterranean: Soil Erosion Projections When Fire and
Extreme Rainfall Meet.” *Land Degradation & Development* 31 (18):
3040–54. <https://doi.org/10.1002/ldr.3694>.

</div>

<div id="ref-roces-diaz_temporal_2021" class="csl-entry">

Roces-Díaz, Jose V., Jordi Vayreda, Miquel De Cáceres, Raúl
García-Valdés, Mireia Banqué-Casanovas, Alejandra Morán-Ordóñez, Lluís
Brotons, Sergio De-Miguel, and Jordi Martínez-Vilalta. 2021. “Temporal
Changes in Mediterranean Forest Ecosystem Services Are Driven by Stand
Development, Rather Than by Climate-Related Disturbances.” *Forest
Ecology and Management* 480 (July 2020): 118623.
<https://doi.org/10.1016/j.foreco.2020.118623>.

</div>

<div id="ref-roces-diaz_assessing_2018" class="csl-entry">

Roces-Díaz, Jose V, Jordi Vayreda, Mireia Banqué-casanovas, Martí Cusó,
Marc Anton, José A Bonet, Lluís Brotons, Miquel De Cáceres, and Sergi
Herrando. 2018. “Assessing the Distribution of Forest Ecosystem Services
in a Highly Populated Mediterranean Region.” *Ecological Indicators* 93
(June): 986–97. <https://doi.org/10.1016/j.ecolind.2018.05.076>.

</div>

<div id="ref-ruiz-peinado_biomass_2012" class="csl-entry">

Ruiz-Peinado, R., G. Montero, and M. Del Rio. 2012. “Biomass Models to
Estimate Carbon Stocks for Hardwood Tree Species.” *Forest Systems* 21
(1): 42. <https://doi.org/10.5424/fs/2112211-02193>.

</div>

<div id="ref-ruiz-peinado_new_2011" class="csl-entry">

Ruiz-Peinado, R., M Rio, and G Montero. 2011. “New Models for Estimating
the Carbon Sink Capacity of Spanish.” *Forest Systems* 20 (1): 176–88.

</div>

<div id="ref-Saxton2006" class="csl-entry">

Saxton, K. E., and W. J. Rawls. 2006. “Soil Water Characteristic
Estimates by Texture and Organic Matter for Hydrologic Solutions.” *Soil
Science Society of America Journal* 70 (5): 1569.
<https://doi.org/10.2136/sssaj2005.0117>.

</div>

<div id="ref-silva_root_2004" class="csl-entry">

Silva, Joaquim S, and Francisco Rego. 2004. “Root to Shoot Relationships
in Mediterranean Woody Plants from Central Portugal.” *Biologia
(Bratisl.)* 59: 1.

</div>

<div id="ref-Watanabe1996" class="csl-entry">

Watanabe, Tsutomu, and Kanji Mizutani. 1996. “Model Study on
Micrometeorological Aspects of Rainfall Interception over an Evergreen
Broad-Leaved.” *Agricultural and Forest Meteorology* 80: 195–214.

</div>

</div>
