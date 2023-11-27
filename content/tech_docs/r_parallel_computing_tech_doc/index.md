---
title: ''
authors:
- vgranda
- mcaceres
categories: tech_docs
tags:
- R
- parallelization
- programming
draft: false
featured: false
date: '2023-11-20'
lastmod: '2023-11-27'
summary: This technical document explains with code examples how to parallelize code
  in R.
model_repository: ''
data_repository: ''
links:
  url_doi: ''
  url_pdf: ''
  url_source: https://github.com/emf-creaf/r_parallel_computing_tech_doc
  url_docs: ''
---

<script  src="r_parallel_computing_tech_doc_files/libs/quarto-diagram/mermaid-postprocess-shim.js"></script>

## Introduction

This document will explain the basic concepts of parallel computing in R, with code examples to
illustrate the concepts presented here. The topics covered include:

-   What is parallel computing?  
-   When can we use it?  
-   A little introduction to loops and maps in R (`for`, `lapply`, `map`...)  
-   Ways to use parallelization in your code (`parallel`, `furrr`...)  
-   How to check if is worth the hassle  

## What is parallel computing?

<p>
<svg width="768" height="480" viewbox="0.00 0.00 290.00 194.98" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 190.98)">
<title>
G
</title>
<polygon fill="white" stroke="transparent" points="-4,4 -4,-190.98 286,-190.98 286,4 -4,4"></polygon>
<g id="clust1" class="cluster">
<title>
cluster_cpu1
</title>
<polygon fill="lightgrey" stroke="lightgrey" points="8,-8 8,-178.98 137,-178.98 137,-8 8,-8"></polygon>
<text text-anchor="middle" x="72.5" y="-162.38" font-family="Times,serif" font-size="14.00">CPU #1</text>
</g>
<g id="clust2" class="cluster">
<title>
cluster_cpu2
</title>
<polygon fill="lightgrey" stroke="lightgrey" points="145,-8 145,-178.98 274,-178.98 274,-8 145,-8"></polygon>
<text text-anchor="middle" x="209.5" y="-162.38" font-family="Times,serif" font-size="14.00">CPU #2</text>
</g>
<!-- core2 -->
<g id="node1" class="node">
<title>
core2
</title>
<polygon fill="white" stroke="white" points="128.59,-146.22 81.41,-146.22 81.41,-99.04 128.59,-99.04 128.59,-146.22"></polygon>
<polyline fill="none" stroke="white" points="93.41,-146.22 81.41,-134.22 "></polyline>
<polyline fill="none" stroke="white" points="81.41,-111.04 93.41,-99.04 "></polyline>
<polyline fill="none" stroke="white" points="116.59,-99.04 128.59,-111.04 "></polyline>
<polyline fill="none" stroke="white" points="128.59,-134.22 116.59,-146.22 "></polyline>
<text text-anchor="middle" x="105" y="-118.43" font-family="Times,serif" font-size="14.00">core2</text>
</g>
<!-- core4 -->
<g id="node3" class="node">
<title>
core4
</title>
<polygon fill="white" stroke="white" points="128.59,-63.13 81.41,-63.13 81.41,-15.95 128.59,-15.95 128.59,-63.13"></polygon>
<polyline fill="none" stroke="white" points="93.41,-63.13 81.41,-51.13 "></polyline>
<polyline fill="none" stroke="white" points="81.41,-27.95 93.41,-15.95 "></polyline>
<polyline fill="none" stroke="white" points="116.59,-15.95 128.59,-27.95 "></polyline>
<polyline fill="none" stroke="white" points="128.59,-51.13 116.59,-63.13 "></polyline>
<text text-anchor="middle" x="105" y="-35.34" font-family="Times,serif" font-size="14.00">core4</text>
</g>
<!-- core2&#45;&gt;core4 -->
<!-- core1 -->
<g id="node2" class="node">
<title>
core1
</title>
<polygon fill="white" stroke="white" points="63.59,-146.22 16.41,-146.22 16.41,-99.04 63.59,-99.04 63.59,-146.22"></polygon>
<polyline fill="none" stroke="white" points="28.41,-146.22 16.41,-134.22 "></polyline>
<polyline fill="none" stroke="white" points="16.41,-111.04 28.41,-99.04 "></polyline>
<polyline fill="none" stroke="white" points="51.59,-99.04 63.59,-111.04 "></polyline>
<polyline fill="none" stroke="white" points="63.59,-134.22 51.59,-146.22 "></polyline>
<text text-anchor="middle" x="40" y="-118.43" font-family="Times,serif" font-size="14.00">core1</text>
</g>
<!-- core3 -->
<g id="node4" class="node">
<title>
core3
</title>
<polygon fill="white" stroke="white" points="63.59,-63.13 16.41,-63.13 16.41,-15.95 63.59,-15.95 63.59,-63.13"></polygon>
<polyline fill="none" stroke="white" points="28.41,-63.13 16.41,-51.13 "></polyline>
<polyline fill="none" stroke="white" points="16.41,-27.95 28.41,-15.95 "></polyline>
<polyline fill="none" stroke="white" points="51.59,-15.95 63.59,-27.95 "></polyline>
<polyline fill="none" stroke="white" points="63.59,-51.13 51.59,-63.13 "></polyline>
<text text-anchor="middle" x="40" y="-35.34" font-family="Times,serif" font-size="14.00">core3</text>
</g>
<!-- core1&#45;&gt;core3 -->
<!-- core6 -->
<g id="node5" class="node">
<title>
core6
</title>
<polygon fill="white" stroke="white" points="265.59,-146.22 218.41,-146.22 218.41,-99.04 265.59,-99.04 265.59,-146.22"></polygon>
<polyline fill="none" stroke="white" points="230.41,-146.22 218.41,-134.22 "></polyline>
<polyline fill="none" stroke="white" points="218.41,-111.04 230.41,-99.04 "></polyline>
<polyline fill="none" stroke="white" points="253.59,-99.04 265.59,-111.04 "></polyline>
<polyline fill="none" stroke="white" points="265.59,-134.22 253.59,-146.22 "></polyline>
<text text-anchor="middle" x="242" y="-118.43" font-family="Times,serif" font-size="14.00">core6</text>
</g>
<!-- core8 -->
<g id="node7" class="node">
<title>
core8
</title>
<polygon fill="white" stroke="white" points="265.59,-63.13 218.41,-63.13 218.41,-15.95 265.59,-15.95 265.59,-63.13"></polygon>
<polyline fill="none" stroke="white" points="230.41,-63.13 218.41,-51.13 "></polyline>
<polyline fill="none" stroke="white" points="218.41,-27.95 230.41,-15.95 "></polyline>
<polyline fill="none" stroke="white" points="253.59,-15.95 265.59,-27.95 "></polyline>
<polyline fill="none" stroke="white" points="265.59,-51.13 253.59,-63.13 "></polyline>
<text text-anchor="middle" x="242" y="-35.34" font-family="Times,serif" font-size="14.00">core8</text>
</g>
<!-- core6&#45;&gt;core8 -->
<!-- core5 -->
<g id="node6" class="node">
<title>
core5
</title>
<polygon fill="white" stroke="white" points="200.59,-146.22 153.41,-146.22 153.41,-99.04 200.59,-99.04 200.59,-146.22"></polygon>
<polyline fill="none" stroke="white" points="165.41,-146.22 153.41,-134.22 "></polyline>
<polyline fill="none" stroke="white" points="153.41,-111.04 165.41,-99.04 "></polyline>
<polyline fill="none" stroke="white" points="188.59,-99.04 200.59,-111.04 "></polyline>
<polyline fill="none" stroke="white" points="200.59,-134.22 188.59,-146.22 "></polyline>
<text text-anchor="middle" x="177" y="-118.43" font-family="Times,serif" font-size="14.00">core5</text>
</g>
<!-- core7 -->
<g id="node8" class="node">
<title>
core7
</title>
<polygon fill="white" stroke="white" points="200.59,-63.13 153.41,-63.13 153.41,-15.95 200.59,-15.95 200.59,-63.13"></polygon>
<polyline fill="none" stroke="white" points="165.41,-63.13 153.41,-51.13 "></polyline>
<polyline fill="none" stroke="white" points="153.41,-27.95 165.41,-15.95 "></polyline>
<polyline fill="none" stroke="white" points="188.59,-15.95 200.59,-27.95 "></polyline>
<polyline fill="none" stroke="white" points="200.59,-51.13 188.59,-63.13 "></polyline>
<text text-anchor="middle" x="177" y="-35.34" font-family="Times,serif" font-size="14.00">core7</text>
</g>
<!-- core5&#45;&gt;core7 -->
</g>
</svg>
</p>

Figure 1: Modern CPU and cores

First of all we need to understand a little about CPUs (Central Processing Unit) and cores.
Modern computers ([Figure 1](#fig-cpu)) have multiple CPUs, and those can have one or multiple cores. Each core
is responsible of running individual processes.

Think of a simple algebraic operation, adding two numbers (`1 + 1`). In a nutshell, that operation
is translated to machine code and a process is started in one core to perform the operation
([Figure 2](#fig-sum)).

<p>
<svg width="768" height="480" viewbox="0.00 0.00 416.00 276.26" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 272.26)">
<title>
G
</title>
<polygon fill="white" stroke="transparent" points="-4,4 -4,-272.26 412,-272.26 412,4 -4,4"></polygon>
<g id="clust1" class="cluster">
<title>
cluster_cpu1
</title>
<polygon fill="lightgrey" stroke="lightgrey" points="8,-8 8,-260.26 218,-260.26 218,-8 8,-8"></polygon>
<text text-anchor="middle" x="113" y="-243.66" font-family="Times,serif" font-size="14.00">CPU #1</text>
</g>
<g id="clust2" class="cluster">
<title>
cluster_cpu2
</title>
<polygon fill="lightgrey" stroke="lightgrey" points="226,-25.31 226,-260.26 400,-260.26 400,-25.31 226,-25.31"></polygon>
<text text-anchor="middle" x="313" y="-243.66" font-family="Times,serif" font-size="14.00">CPU #2</text>
</g>
<!-- core2 -->
<g id="node1" class="node">
<title>
core2
</title>
<polygon fill="green" stroke="green" points="210.42,-227.67 139.58,-227.67 139.58,-156.83 210.42,-156.83 210.42,-227.67"></polygon>
<polyline fill="none" stroke="green" points="151.58,-227.67 139.58,-215.67 "></polyline>
<polyline fill="none" stroke="green" points="139.58,-168.83 151.58,-156.83 "></polyline>
<polyline fill="none" stroke="green" points="198.42,-156.83 210.42,-168.83 "></polyline>
<polyline fill="none" stroke="green" points="210.42,-215.67 198.42,-227.67 "></polyline>
<text text-anchor="middle" x="175" y="-196.45" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="175" y="-179.65" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core4 -->
<g id="node3" class="node">
<title>
core4
</title>
<polygon fill="green" stroke="green" points="210.42,-103.94 139.58,-103.94 139.58,-33.1 210.42,-33.1 210.42,-103.94"></polygon>
<polyline fill="none" stroke="green" points="151.58,-103.94 139.58,-91.94 "></polyline>
<polyline fill="none" stroke="green" points="139.58,-45.1 151.58,-33.1 "></polyline>
<polyline fill="none" stroke="green" points="198.42,-33.1 210.42,-45.1 "></polyline>
<polyline fill="none" stroke="green" points="210.42,-91.94 198.42,-103.94 "></polyline>
<text text-anchor="middle" x="175" y="-72.72" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="175" y="-55.92" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core2&#45;&gt;core4 -->
<!-- core1 -->
<g id="node2" class="node">
<title>
core1
</title>
<polygon fill="green" stroke="green" points="104.42,-227.67 33.58,-227.67 33.58,-156.83 104.42,-156.83 104.42,-227.67"></polygon>
<polyline fill="none" stroke="green" points="45.58,-227.67 33.58,-215.67 "></polyline>
<polyline fill="none" stroke="green" points="33.58,-168.83 45.58,-156.83 "></polyline>
<polyline fill="none" stroke="green" points="92.42,-156.83 104.42,-168.83 "></polyline>
<polyline fill="none" stroke="green" points="104.42,-215.67 92.42,-227.67 "></polyline>
<text text-anchor="middle" x="69" y="-196.45" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="69" y="-179.65" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core3 -->
<g id="node4" class="node">
<title>
core3
</title>
<polygon fill="red" stroke="red" points="121.54,-121.06 16.46,-121.06 16.46,-15.98 121.54,-15.98 121.54,-121.06"></polygon>
<polyline fill="none" stroke="red" points="28.46,-121.06 16.46,-109.06 "></polyline>
<polyline fill="none" stroke="red" points="16.46,-27.98 28.46,-15.98 "></polyline>
<polyline fill="none" stroke="red" points="109.54,-15.98 121.54,-27.98 "></polyline>
<polyline fill="none" stroke="red" points="121.54,-109.06 109.54,-121.06 "></polyline>
<text text-anchor="middle" x="69" y="-72.72" font-family="Times,serif" font-size="14.00">'1 + 1'</text>
<text text-anchor="middle" x="69" y="-55.92" font-family="Times,serif" font-size="14.00">process running</text>
</g>
<!-- core1&#45;&gt;core3 -->
<!-- core6 -->
<g id="node5" class="node">
<title>
core6
</title>
<polygon fill="green" stroke="green" points="392.42,-227.67 321.58,-227.67 321.58,-156.83 392.42,-156.83 392.42,-227.67"></polygon>
<polyline fill="none" stroke="green" points="333.58,-227.67 321.58,-215.67 "></polyline>
<polyline fill="none" stroke="green" points="321.58,-168.83 333.58,-156.83 "></polyline>
<polyline fill="none" stroke="green" points="380.42,-156.83 392.42,-168.83 "></polyline>
<polyline fill="none" stroke="green" points="392.42,-215.67 380.42,-227.67 "></polyline>
<text text-anchor="middle" x="357" y="-196.45" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="357" y="-179.65" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core8 -->
<g id="node7" class="node">
<title>
core8
</title>
<polygon fill="green" stroke="green" points="392.42,-103.94 321.58,-103.94 321.58,-33.1 392.42,-33.1 392.42,-103.94"></polygon>
<polyline fill="none" stroke="green" points="333.58,-103.94 321.58,-91.94 "></polyline>
<polyline fill="none" stroke="green" points="321.58,-45.1 333.58,-33.1 "></polyline>
<polyline fill="none" stroke="green" points="380.42,-33.1 392.42,-45.1 "></polyline>
<polyline fill="none" stroke="green" points="392.42,-91.94 380.42,-103.94 "></polyline>
<text text-anchor="middle" x="357" y="-72.72" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="357" y="-55.92" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core6&#45;&gt;core8 -->
<!-- core5 -->
<g id="node6" class="node">
<title>
core5
</title>
<polygon fill="green" stroke="green" points="304.42,-227.67 233.58,-227.67 233.58,-156.83 304.42,-156.83 304.42,-227.67"></polygon>
<polyline fill="none" stroke="green" points="245.58,-227.67 233.58,-215.67 "></polyline>
<polyline fill="none" stroke="green" points="233.58,-168.83 245.58,-156.83 "></polyline>
<polyline fill="none" stroke="green" points="292.42,-156.83 304.42,-168.83 "></polyline>
<polyline fill="none" stroke="green" points="304.42,-215.67 292.42,-227.67 "></polyline>
<text text-anchor="middle" x="269" y="-196.45" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="269" y="-179.65" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core7 -->
<g id="node8" class="node">
<title>
core7
</title>
<polygon fill="green" stroke="green" points="304.42,-103.94 233.58,-103.94 233.58,-33.1 304.42,-33.1 304.42,-103.94"></polygon>
<polyline fill="none" stroke="green" points="245.58,-103.94 233.58,-91.94 "></polyline>
<polyline fill="none" stroke="green" points="233.58,-45.1 245.58,-33.1 "></polyline>
<polyline fill="none" stroke="green" points="292.42,-33.1 304.42,-45.1 "></polyline>
<polyline fill="none" stroke="green" points="304.42,-91.94 292.42,-103.94 "></polyline>
<text text-anchor="middle" x="269" y="-72.72" font-family="Times,serif" font-size="14.00">Available</text>
<text text-anchor="middle" x="269" y="-55.92" font-family="Times,serif" font-size="14.00"> core</text>
</g>
<!-- core5&#45;&gt;core7 -->
</g>
</svg>
</p>

Figure 2: One core is performing the '1 +1' operation. This leaves the other cores available to concurrently start other procesess

So CPU cores can be used to run the the same process with different data in parallel to speed up
long tasks. **In theory**, this can make things $1/n_{cores}$ faster, but in reality, other factors
must be added (time consumed transferring data to each process, time consumed gathering results
from different processes and join them, time consumed spawning new processes...) so the time
gain highly depends on the type of operations, data types used...

> **Note**
>
> In fact, sometimes workflows are slower when parallelized, so we always need to check if we are really
> saving time and effort. See [below](#hassle) for more information on this.
{.alert .alert-info}

#### R is a single process software

`R` is designed to run in only one CPU process. This is due to the time when `S` (`R` predecessor)
and `R` were developed, where CPUs had mostly one core and multitasking and parallel computation
were still not widely available or technologies were still undeveloped.

Given the `R` limitations explained before, parallel computing in `R` is not available
*out-of-the-box*. We will need to use extra packages/libraries and we can only use it in
specific cases and data types.

## When can we use it?

You have been using parallel computing in `R` without knowing it. A lot of `R` base functions are
calls to methods written in languages that support multitasking (`C++`, `Rust`...). For example,
matrix operations and other linear algebra functions (common operations when calculating
regression coefficients when using `lm` and other model functions) are calls to `C++` methods that
are parallelized and use the CPU cores available in your system (**?@lst-matrix**)

``` r
observations <- matrix(rnorm(1e6 * 100), 1e6, 100)
predictions <- rnorm(100)
system.time(outcome <- drop(observations %*% predictions) + rnorm(1e6))
##    user  system elapsed 
##   0.228   0.012   0.246
```

> **Note**
>
> Some other `R` packages have implemented the methods we'll explain in the following sections and
> offer arguments to the user to choose if and how parallelization must be done. For example, `boot`
> package offer parallelization options when bootstrapping model coefficients.
{.alert .alert-info}

### Working with embarrassingly parallel problems

*[Embarrassingly parallel problems](https://en.wikipedia.org/wiki/Embarrassingly_parallel)*
are those where we can easily separate the problem into several parallel tasks
[^1]. This kind of problems are very usual
in scientific and statistics fields. Think of the classic data analysis showed below
([Figure 3](#fig-daworkflow)).

<p>
<svg viewbox="0 0 788.5 120" height="480" aria-labelledby="chart-title-mermaid-1701105898772 chart-desc-mermaid-1701105898772" role="img" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="768" id="mermaid-figure-1">
<title id="chart-title-mermaid-1701105898772">
</title>
<desc id="chart-desc-mermaid-1701105898772"></desc>
<style>#mermaid-figure-1 {font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-figure-1 .error-icon{fill:#552222;}#mermaid-figure-1 .error-text{fill:#552222;stroke:#552222;}#mermaid-figure-1 .edge-thickness-normal{stroke-width:2px;}#mermaid-figure-1 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-figure-1 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-figure-1 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-figure-1 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-figure-1 .marker{fill:#333333;stroke:#333333;}#mermaid-figure-1 .marker.cross{stroke:#333333;}#mermaid-figure-1 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-figure-1 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-figure-1 .cluster-label text{fill:#333;}#mermaid-figure-1 .cluster-label span{color:#333;}#mermaid-figure-1 .label text,#mermaid-figure-1 span{fill:#333;color:#333;}#mermaid-figure-1 .node rect,#mermaid-figure-1 .node circle,#mermaid-figure-1 .node ellipse,#mermaid-figure-1 .node polygon,#mermaid-figure-1 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-figure-1 .node .label{text-align:center;}#mermaid-figure-1 .node.clickable{cursor:pointer;}#mermaid-figure-1 .arrowheadPath{fill:#333333;}#mermaid-figure-1 .edgePath .path{stroke:#333333;stroke-width:2.0px;}#mermaid-figure-1 .flowchart-link{stroke:#333333;fill:none;}#mermaid-figure-1 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-figure-1 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-figure-1 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-figure-1 .cluster text{fill:#333;}#mermaid-figure-1 .cluster span{color:#333;}#mermaid-figure-1 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-figure-1 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style>
<g transform="translate(0, 0)"><marker orient="auto" markerheight="12" markerwidth="12" markerunits="userSpaceOnUse" refy="5" refx="9" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"></path></marker><marker orient="auto" markerheight="12" markerwidth="12" markerunits="userSpaceOnUse" refy="5" refx="0" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"></path></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5" refx="11" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5" refx="-1" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5.2" refx="12" viewbox="0 0 11 11" class="marker cross flowchart" id="flowchart-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5.2" refx="-1" viewbox="0 0 11 11" class="marker cross flowchart" id="flowchart-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-single LE-single" id="L-single-single-0" d="M677,50.695410292072324L681.1666666666666,50.57950857672694C685.3333333333334,50.46360686138155,693.6666666666666,50.231803430690775,702,51.78256838201205C710.3333333333334,53.333333333333336,718.6666666666666,56.666666666666664,722.8333333333334,58.333333333333336L727,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-single LE-single" id="L-single-single-0" d="M727,60L722.8333333333334,61.666666666666664C718.6666666666666,63.333333333333336,710.3333333333334,66.66666666666667,702,68.21743161798794C693.6666666666666,69.76819656930923,685.3333333333334,69.53639313861845,681.1666666666666,69.42049142327306L677,69.30458970792768"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(0.5, 0)" class="root"><g class="clusters"><g id="single" class="cluster default"><rect height="104" width="669" y="8" x="8" ry="0" rx="0" style=""></rect><g transform="translate(304, 13)" class="cluster-label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Process 1</tspan></text></g></g></g><g class="edgePaths"><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-read LE-process" id="L-read-process-0" d="M117,60L121.16666666666667,60C125.33333333333333,60,133.66666666666666,60,142,60C150.33333333333334,60,158.66666666666666,60,162.83333333333334,60L167,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-process LE-model" id="L-process-model-0" d="M306,60L310.1666666666667,60C314.3333333333333,60,322.6666666666667,60,331,60C339.3333333333333,60,347.6666666666667,60,351.8333333333333,60L356,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-model LE-visualize" id="L-model-visualize-0" d="M460,60L464.1666666666667,60C468.3333333333333,60,476.6666666666667,60,485,60C493.3333333333333,60,501.6666666666667,60,505.8333333333333,60L510,60"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(581, 60)" id="flowchart-visualize-9" class="node default default"><rect height="34" width="142" y="-17" x="-71" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-63.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Visualize results</tspan></text></g></g><g transform="translate(75, 60)" id="flowchart-read-6" class="node default default"><rect height="34" width="84" y="-17" x="-42" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-34.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Read file</tspan></text></g></g><g transform="translate(236.5, 60)" id="flowchart-process-7" class="node default default"><rect height="34" width="139" y="-17" x="-69.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-62, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Transform data</tspan></text></g></g><g transform="translate(408, 60)" id="flowchart-model-8" class="node default default"><rect height="34" width="104" y="-17" x="-52" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-44.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Model data</tspan></text></g></g></g></g><g transform="translate(727, 60)" id="single---single" class="label edgeLabel"><rect height="0" width="0"></rect><g transform="translate(-54, -25.5)" style="" class="label"><rect height="51.125" width="108.625" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve">`Repeat after</tspan><tspan class="row" x="0" dy="1em" space="preserve">we finish</tspan><tspan class="row" x="0" dy="1em" space="preserve">with a file`</tspan></text></g></g></g></g></g>
</svg>
</p>

Figure 3: Classic data analysis workflow

In this process, we need to ingest the data, processing it to clean/transform/... it, modelling
the data and finally visualize/store the results. Now imagine we have to repeat the same process for
hundred or thousands of data files (*i.e.*, remote sensing images, genomic analyses, historical and
projections climatic analyses...). Instead of processing each task one after another (in a
sequential way) we can divide the input (names of the files to read) in chunks and send each chunk
to CPU processes that run in parallel, which can save a lot of time and effort ([Figure 4](#fig-daworflowpar)).

<p>
<svg viewbox="0 0 940 428" height="480" aria-labelledby="chart-title-mermaid-1701105899156 chart-desc-mermaid-1701105899156" role="img" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="768" id="mermaid-figure-2">
<title id="chart-title-mermaid-1701105899156">
</title>
<desc id="chart-desc-mermaid-1701105899156"></desc>
<style>#mermaid-figure-2 {font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-figure-2 .error-icon{fill:#552222;}#mermaid-figure-2 .error-text{fill:#552222;stroke:#552222;}#mermaid-figure-2 .edge-thickness-normal{stroke-width:2px;}#mermaid-figure-2 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-figure-2 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-figure-2 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-figure-2 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-figure-2 .marker{fill:#333333;stroke:#333333;}#mermaid-figure-2 .marker.cross{stroke:#333333;}#mermaid-figure-2 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-figure-2 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-figure-2 .cluster-label text{fill:#333;}#mermaid-figure-2 .cluster-label span{color:#333;}#mermaid-figure-2 .label text,#mermaid-figure-2 span{fill:#333;color:#333;}#mermaid-figure-2 .node rect,#mermaid-figure-2 .node circle,#mermaid-figure-2 .node ellipse,#mermaid-figure-2 .node polygon,#mermaid-figure-2 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-figure-2 .node .label{text-align:center;}#mermaid-figure-2 .node.clickable{cursor:pointer;}#mermaid-figure-2 .arrowheadPath{fill:#333333;}#mermaid-figure-2 .edgePath .path{stroke:#333333;stroke-width:2.0px;}#mermaid-figure-2 .flowchart-link{stroke:#333333;fill:none;}#mermaid-figure-2 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-figure-2 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-figure-2 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-figure-2 .cluster text{fill:#333;}#mermaid-figure-2 .cluster span{color:#333;}#mermaid-figure-2 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-figure-2 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style>
<g transform="translate(0, 0)"><marker orient="auto" markerheight="12" markerwidth="12" markerunits="userSpaceOnUse" refy="5" refx="9" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"></path></marker><marker orient="auto" markerheight="12" markerwidth="12" markerunits="userSpaceOnUse" refy="5" refx="0" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"></path></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5" refx="11" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5" refx="-1" viewbox="0 0 10 10" class="marker flowchart" id="flowchart-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"></circle></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5.2" refx="12" viewbox="0 0 11 11" class="marker cross flowchart" id="flowchart-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><marker orient="auto" markerheight="11" markerwidth="11" markerunits="userSpaceOnUse" refy="5.2" refx="-1" viewbox="0 0 11 11" class="marker cross flowchart" id="flowchart-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-file_name LE-one" id="L-file_name-one-0" d="M66.27922077922078,197L77.39935064935065,174.16666666666666C88.51948051948052,151.33333333333334,110.75974025974027,105.66666666666667,126.04653679653678,82.83333333333333C141.33333333333334,60,149.66666666666666,60,153.83333333333334,60L158,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-file_name LE-two" id="L-file_name-two-0" d="M108,214L112.16666666666667,214C116.33333333333333,214,124.66666666666667,214,133,214C141.33333333333334,214,149.66666666666666,214,153.83333333333334,214L158,214"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-file_name LE-three" id="L-file_name-three-0" d="M66.27922077922078,231L77.39935064935065,253.83333333333334C88.51948051948052,276.6666666666667,110.75974025974027,322.3333333333333,126.04653679653678,345.1666666666667C141.33333333333334,368,149.66666666666666,368,153.83333333333334,368L158,368"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-one LE-one_finish" id="L-one-one_finish-0" d="M827,60L831.1666666666666,60C835.3333333333334,60,843.6666666666666,60,852,60C860.3333333333334,60,868.6666666666666,60,872.8333333333334,60L877,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-two LE-two_finish" id="L-two-two_finish-0" d="M827,214L831.1666666666666,214C835.3333333333334,214,843.6666666666666,214,852,214C860.3333333333334,214,868.6666666666666,214,872.8333333333334,214L877,214"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-three LE-three_finish" id="L-three-three_finish-0" d="M827,368L831.1666666666666,368C835.3333333333334,368,843.6666666666666,368,852,368C860.3333333333334,368,868.6666666666666,368,872.8333333333334,368L877,368"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(150.5, 308)" class="root"><g class="clusters"><g id="three" class="cluster default"><rect height="104" width="669" y="8" x="8" ry="0" rx="0" style=""></rect><g transform="translate(304, 13)" class="cluster-label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Process 3</tspan></text></g></g></g><g class="edgePaths"><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-read_n LE-process_n" id="L-read_n-process_n-0" d="M117,60L121.16666666666667,60C125.33333333333333,60,133.66666666666666,60,142,60C150.33333333333334,60,158.66666666666666,60,162.83333333333334,60L167,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-process_n LE-model_n" id="L-process_n-model_n-0" d="M306,60L310.1666666666667,60C314.3333333333333,60,322.6666666666667,60,331,60C339.3333333333333,60,347.6666666666667,60,351.8333333333333,60L356,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-model_n LE-visualize_n" id="L-model_n-visualize_n-0" d="M460,60L464.1666666666667,60C468.3333333333333,60,476.6666666666667,60,485,60C493.3333333333333,60,501.6666666666667,60,505.8333333333333,60L510,60"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(581, 60)" id="flowchart-visualize_n-33" class="node default default"><rect height="34" width="142" y="-17" x="-71" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-63.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Visualize results</tspan></text></g></g><g transform="translate(75, 60)" id="flowchart-read_n-30" class="node default default"><rect height="34" width="84" y="-17" x="-42" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-34.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Read file</tspan></text></g></g><g transform="translate(236.5, 60)" id="flowchart-process_n-31" class="node default default"><rect height="34" width="139" y="-17" x="-69.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-62, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Transform data</tspan></text></g></g><g transform="translate(408, 60)" id="flowchart-model_n-32" class="node default default"><rect height="34" width="104" y="-17" x="-52" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-44.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Model data</tspan></text></g></g></g></g><g transform="translate(150.5, 154)" class="root"><g class="clusters"><g id="two" class="cluster default"><rect height="104" width="669" y="8" x="8" ry="0" rx="0" style=""></rect><g transform="translate(304, 13)" class="cluster-label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Process 2</tspan></text></g></g></g><g class="edgePaths"><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-read_2 LE-process_2" id="L-read_2-process_2-0" d="M117,60L121.16666666666667,60C125.33333333333333,60,133.66666666666666,60,142,60C150.33333333333334,60,158.66666666666666,60,162.83333333333334,60L167,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-process_2 LE-model_2" id="L-process_2-model_2-0" d="M306,60L310.1666666666667,60C314.3333333333333,60,322.6666666666667,60,331,60C339.3333333333333,60,347.6666666666667,60,351.8333333333333,60L356,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-model_2 LE-visualize_2" id="L-model_2-visualize_2-0" d="M460,60L464.1666666666667,60C468.3333333333333,60,476.6666666666667,60,485,60C493.3333333333333,60,501.6666666666667,60,505.8333333333333,60L510,60"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(581, 60)" id="flowchart-visualize_2-29" class="node default default"><rect height="34" width="142" y="-17" x="-71" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-63.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Visualize results</tspan></text></g></g><g transform="translate(75, 60)" id="flowchart-read_2-26" class="node default default"><rect height="34" width="84" y="-17" x="-42" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-34.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Read file</tspan></text></g></g><g transform="translate(236.5, 60)" id="flowchart-process_2-27" class="node default default"><rect height="34" width="139" y="-17" x="-69.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-62, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Transform data</tspan></text></g></g><g transform="translate(408, 60)" id="flowchart-model_2-28" class="node default default"><rect height="34" width="104" y="-17" x="-52" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-44.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Model data</tspan></text></g></g></g></g><g transform="translate(150.5, 0)" class="root"><g class="clusters"><g id="one" class="cluster default"><rect height="104" width="669" y="8" x="8" ry="0" rx="0" style=""></rect><g transform="translate(304, 13)" class="cluster-label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Process 1</tspan></text></g></g></g><g class="edgePaths"><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-read LE-process" id="L-read-process-0" d="M117,60L121.16666666666667,60C125.33333333333333,60,133.66666666666666,60,142,60C150.33333333333334,60,158.66666666666666,60,162.83333333333334,60L167,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-process LE-model" id="L-process-model-0" d="M306,60L310.1666666666667,60C314.3333333333333,60,322.6666666666667,60,331,60C339.3333333333333,60,347.6666666666667,60,351.8333333333333,60L356,60"></path><path marker-end="url(#flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-model LE-visualize" id="L-model-visualize-0" d="M460,60L464.1666666666667,60C468.3333333333333,60,476.6666666666667,60,485,60C493.3333333333333,60,501.6666666666667,60,505.8333333333333,60L510,60"></path></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><rect height="0" width="0" ry="0" rx="0"></rect><text style=""><tspan class="row" x="0" dy="1em" space="preserve"></tspan></text></g></g></g><g class="nodes"><g transform="translate(581, 60)" id="flowchart-visualize-25" class="node default default"><rect height="34" width="142" y="-17" x="-71" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-63.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Visualize results</tspan></text></g></g><g transform="translate(75, 60)" id="flowchart-read-22" class="node default default"><rect height="34" width="84" y="-17" x="-42" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-34.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Read file</tspan></text></g></g><g transform="translate(236.5, 60)" id="flowchart-process-23" class="node default default"><rect height="34" width="139" y="-17" x="-69.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-62, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Transform data</tspan></text></g></g><g transform="translate(408, 60)" id="flowchart-model-24" class="node default default"><rect height="34" width="104" y="-17" x="-52" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-44.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">Model data</tspan></text></g></g></g></g><g transform="translate(58, 214)" id="flowchart-file_name-34" class="node default default"><rect height="34" width="100" y="-17" x="-50" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-42.5, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">File names</tspan></text></g></g><g transform="translate(904.5, 60)" id="flowchart-one_finish-39" class="node default default"><rect height="34" width="55" y="-17" x="-27.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-20, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">done</tspan></text></g></g><g transform="translate(904.5, 214)" id="flowchart-two_finish-41" class="node default default"><rect height="34" width="55" y="-17" x="-27.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-20, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">done</tspan></text></g></g><g transform="translate(904.5, 368)" id="flowchart-three_finish-43" class="node default default"><rect height="34" width="55" y="-17" x="-27.5" ry="0" rx="0" style="" class="basic label-container"></rect><g transform="translate(-20, -9.5)" style="" class="label"><text style=""><tspan class="row" x="0" dy="1em" space="preserve">done</tspan></text></g></g></g></g></g>
</svg>
</p>

Figure 4: Same data analysis workflow as before but running in parallel, each process in a different CPU core

This kind of *embarrasingly parallel tasks* are the ones that beneficiate most of parallelization.

## A little introduction to loops and maps in R (`for`, `lapply`, `map`...)

### Loops

We talk before about *embarrassingly parallel problems*, repetitive tasks that have little or not
connection between each other more than the origin of the inputs and can be easily separated into
parallel tasks.  
These tasks are usually the ones we think about when we talk about `for` loops. One example can
be bootstrapping model coefficients (**?@lst-loop**). For example, we are interested in the relationship
between sepal length and *Iris* species (example extracted from the `doParallel` package
vignette):

``` r
# libraries
library(dplyr)

# data needed
n_repetitions <- 1e4
res_coefs <- list()
iris_data <- iris |>
  dplyr::filter(Species != "setosa")
# we measure the time for illustration purposes
system.time({
  for (index in 1:n_repetitions) {
    sample_individuals <- sample(85, 85, replace = TRUE)
    model_res <- glm(
      iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
      family = binomial
    )
    res_coefs[[index]] <- coefficients(model_res)
  }
})
##    user  system elapsed 
##  21.631   0.004  21.676
```

We can see the user time (CPU time) is roughly the same as the elapsed time (real time), as we
should expect from a sequential `for` loop.

### lapply

The same problem can be solved with `lapply`, but we need to encapsulate the logic of the `for`
loop in a function (**?@lst-lapply**):

``` r
# create the function to process data from one state
coef_function <- function(repetition) {
  sample_individuals <- sample(85, 85, replace = TRUE)
  model_res <- glm(
    iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
    family = binomial
  )
  return(coefficients(model_res))
}
# number of repetitions
n_repetitions <- 1e4
# data
iris_data <- iris |>
  dplyr::filter(Species != "setosa")

# and now the lapply (we monitorize the time again for illustration purposes)
system.time(
  res_coefs <- lapply(1:n_repetitions, coef_function)
)
##    user  system elapsed 
##  22.749   0.000  22.797
```

As we see, the time is the same as with the `for` loop, something we would expect.

### map

If using [`tidyverse` packages](https://www.tidyverse.org/), instead of `lapply` we will use `map`
function in the `purrr` package (**?@lst-purrr**):

``` r
# libraries
library(purrr)

coef_function <- function(repetition) {
  sample_individuals <- sample(85, 85, replace = TRUE)
  model_res <- glm(
    iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
    family = binomial
  )
  return(coefficients(model_res))
}
# number of repetitions
n_repetitions <- 1e4
# data
iris_data <- iris |>
  dplyr::filter(Species != "setosa")

# and now the map (we monitorize the time again for illustration purposes)
system.time({
  res_coefs <- purrr::map(1:n_repetitions, .f = coef_function)
})
##    user  system elapsed 
##  22.399   0.000  22.434
```

Again times are similar to the other workflows.

## Ways to use parallelization in your code (`parallel`, `furrr`...)

If we can use loops, `lapply` or `map`, then we can parallelize without any problem. In this
section we will see the different options we can do it.

### Preparations

Before we start, we need to know how many cores are available in our system. This can be done
with `parallel::detectCores()`. In the system this document has been created the available cores
are:

``` r
library(parallel)
parallel::detectCores()
## [1] 24
```

> **Tip**
>
> In the following examples we will be using 4 cores, but if your system has less than that, please
> change it to a valid number.
{.alert .alert-info}

### `foreach` and `doParallel`

In a very similar way to a `for` loop we can use the `foreach` and `doParallel` packages to build
a loop that will run the files in paralell (**?@lst-foreach**):

``` r
# libraries
library(parallel)
library(foreach)
library(doParallel)

# data needed
n_repetitions <- 1e4
res_coefs <- list()
iris_data <- iris |>
  dplyr::filter(Species != "setosa")

# set the number of cores to use, in this example 4
doParallel::registerDoParallel(cores = 4)

# foreach loop (for illustration purposes, we check the time used)
system.time(
  {res_coefs <- foreach::foreach(index = 1:n_repetitions) %dopar% {
    sample_individuals <- sample(85, 85, replace = TRUE)
    model_res <- glm(
      iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
      family = binomial
    )
    coefficients(model_res)
  }}
)
##    user  system elapsed 
##  24.626   0.298   7.518
```

As we can see, time has reduced almost four times when compared with processing the files
sequentially. We are really close to the ideal $1/4$ reduction in time we should expect from using
4 cores, but not quite, as starting the extra R processes, sending the data and retrieving the
results takes some time. With bigger datasets we can see that elapsed time increases because of this communication overload.

### `mclapply`

If we prefer the `lapply` syntax, we can use `mclapply` to run the same expression concurrently.
`mclapply` belongs to the `parallel` pacakge and works exactly the same as lapply (**?@lst-mclapply**):

``` r
# create the function to process data from one state
coef_function <- function(repetition) {
  sample_individuals <- sample(85, 85, replace = TRUE)
  model_res <- glm(
    iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
    family = binomial
  )
  return(coefficients(model_res))
}
# number of repetitions
n_repetitions <- 1e4
# data
iris_data <- iris |>
  dplyr::filter(Species != "setosa")

# and now the lapply (we monitorize the time again for illustration purposes)
system.time({
  res_coefs <- mclapply(1:n_repetitions, coef_function, mc.cores = 4)
})
##    user  system elapsed 
##  17.314   0.260   6.032
```

We see again the time reduction in time with `mclapply`.

### `future_map`

`furrr` package offers parallelized versions of `purrr::map` family of functions. We can use it to
run the `map` example above in parallel (**?@lst-furrr**):

``` r
# libraries
library(future)
library(furrr)

coef_function <- function(repetition) {
  sample_individuals <- sample(85, 85, replace = TRUE)
  model_res <- glm(
    iris_data[sample_individuals, "Species"] ~ iris_data[sample_individuals, "Petal.Length"],
    family = binomial
  )
  return(coefficients(model_res))
}
# number of repetitions
n_repetitions <- 1e4
# data
iris_data <- iris |>
  dplyr::filter(Species != "setosa")

# setting core options
future::plan(future.callr::callr, workers = 4)

# and now the map (we monitorize the time again for illustration purposes)
system.time({
  state_models <- furrr::future_map(1:n_repetitions, .f = coef_function)
})
##    user  system elapsed 
##  26.898   0.431   6.969
```

This is the method that returns the worst time running in parallel (but better than sequential).
This is because `future_map` works setting a more complete environment in the parallelized
processes that takes more time. In larger datasets and more complex functions, `future_map` is a
good option for paralellization.

> **Tip**
>
> Calculating bootstrapped coefficients is a toy example for illustration purposes. There are R
> packages that can bootstrap in more efficient ways, including parallelization already included,
> like the [`boot` package](https://cran.r-project.org/package=boot).
{.alert .alert-info}

## How to check if parallelization is worthy the hassle

We have been using `system.time` to check the time our code takes to run. This is one way of
check if the benefit of parallelization outweighs the inconvenience of setting it up. Other ways
include using other benchmarking libraries, like `bench` or `rbenchmark`. Their documentation
explain everything you need to know about timing code.

In any case, as a rule of thumb, parallelization is not worthy in the following scenarios:

1.  We are parallelizing *fast* operations: In this scenario, when the operations we want to
    paralellize are fast (math operations, indexing or assigning) the overhead of sending data
    to cores, and retrieving and joining the results usually is greater than the time of performing
    the operation.

2.  We are parallelizing processes that involve sending a lot of data to each spawned parallel
    process. Think for example in working with a global raster at 5km resolution. If we want to
    parallelize a process involving calculation with this kind of objects then the overhead of
    sending the data could be bigger than the process itself.

3.  Related to the previous, when performing memory intensive processes. Take into account that
    each spawned parallel process is going to need to use memory as in the sequential process.
    Parallelizing in the same computing multiplies the memory needed for almost the number of
    cores used, so is easy to run out of memory if we are not careful.

[^1]: Also known as *perfectly parallel*, *delightfully parallel* or *pleasingly parallel* problems,
    but those names don't have that ring on it
