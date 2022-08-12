---
layout: default
title: Tropical Cloud Forests
short_title: Tropical Cloud Forests
menu_title: Tropical Cloud Forests
mainpage: false
weight: 4
permalink: /cloudforest
---

<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Dataset",
  "name" : "Tropical cloud forests (TCFs) are one of the world’s most species- and endemism-rich terrestrial ecosystems. TCFs are threatened by direct human pressures and climate change, yet the fate of these extraordinary ecosystems remains insufficiently quantified. With discussions of the post-2020 biodiversity framework underway, TCFs are a defining test case of the success and promise of recent policy targets and their associated mechanisms to avert the global biodiversity crisis. Here we present a global assessment of the recent status and trends of TCFs and their biodiversity and evaluate the efficacy of current protection measures. We find that cloud forests occupied 0.4% of the global land surface in 2001 and harboured ~3,700 species of birds, mammal, amphibians and tree ferns (~15% of the global diversity of those groups), with half of those species entirely restricted to cloud forests. Worldwide, ~2.4% of cloud forests (in some regions, more than 8%) were lost between 2001 and 2018, especially in readily accessible places. While protected areas have slowed this decline, a large proportion of loss in TCF cover is still occurring despite formal protection. Increased conservation efforts are needed to avert the impending regional or global demise of TCFs and their unique biodiversity.",
  "temporalCoverage" : "2001-01-01/2018-12-31",
  "spatialCoverage" : {
    "@type":"Place",
    "geo":{
      "@type":"GeoShape",
      "box":"180 -84 180 84"
    }
  },
  "version" : "2.1",
  "identifier" : "10.1038/s41559-021-01450-y",
  "license" : "https://creativecommons.org/publicdomain/zero/1.0",
  "distribution" : {
    "@type" : "DataDownload",
    "encodingFormat" : "GeoTIFF",
    "contentUrl" : "https://earthenv.org/cloudforest"
  },
  "sourceOrganization" : "EarthEnv",
  "datePublished" : "2021-01-01",
  "creator": [
    {
        "@type": "Person",
        "sameAs": "http://orcid.org/0000-0001-7770-6229",
        "givenName": "Dirk",
        "familyName": "Karger",
        "name": "Dirk Karger"
    },
    {
        "@type": "Person",
        "sameAs": "http://orcid.org/0000-0002-1971-7277",
        "givenName": "Walter",
        "familyName": "Jetz",
        "name": "Walter Jetz"
    },
    {
        "@type": "Organization",
        "sameAs": "http://earthenv.org/",
        "name": "EarthEnv"
    }
  ],
  "citation": "Karger, D.N., Kessler, M., Lehnert, M. et al. Limited protection and ongoing loss of tropical cloud forest biodiversity and ecosystems worldwide. Nat Ecol Evol 5, 854–862 (2021). https://doi.org/10.1038/s41559-021-01450-y"
}
</script>

## Limited protection and ongoing loss of tropical cloud forest biodiversity and ecosystems worldwide

Tropical cloud forests (TCFs) are one of the world’s most species- and endemism-rich terrestrial ecosystems. TCFs are threatened by direct human pressures and climate change, yet the fate of these extraordinary ecosystems remains insufficiently quantified. With discussions of the post-2020 biodiversity framework underway, TCFs are a defining test case of the success and promise of recent policy targets and their associated mechanisms to avert the global biodiversity crisis. Here we present a global assessment of the recent status and trends of TCFs and their biodiversity and evaluate the efficacy of current protection measures. We find that cloud forests occupied 0.4% of the global land surface in 2001 and harboured ~3,700 species of birds, mammal, amphibians and tree ferns (~15% of the global diversity of those groups), with half of those species entirely restricted to cloud forests. Worldwide, ~2.4% of cloud forests (in some regions, more than 8%) were lost between 2001 and 2018, especially in readily accessible places. While protected areas have slowed this decline, a large proportion of loss in TCF cover is still occurring despite formal protection. Increased conservation efforts are needed to avert the impending regional or global demise of TCFs and their unique biodiversity.

{:.litreference}
Karger, D.N., Kessler, M., Lehnert, M. et al. Limited protection and ongoing loss of tropical cloud forest biodiversity and ecosystems worldwide. Nat Ecol Evol 5, 854–862 (2021). [https://doi.org/10.1038/s41559-021-01450-y](https://doi.org/10.1038/s41559-021-01450-y)


<!--
{::options parse_block_html="true" /}
-->

<div class="col-md-12 extra-spacing">
<h3>Map of Tropical Cloud Forests</h3>
<iframe class="mapframe_right" style="float: none; min-width: 70%; width: 100%"
      src="https://dev-dot-earthenv-dot-map-of-life.appspot.com/tcf"
      name="map" frameborder="0" allowfullscreen="true"></iframe>
</div>

  <div class="col-md-12 extra-spacing">
<h3>Downloads:</h3>
<li> <a target="_blank" href="https://data.earthenv.org/tcf/tcf_ensemble_mnv16_2001-2018.tif">Aggregated mean of percent of area covered from 2001-2018 (.tif, 30mb)</a> </li>
<li> <a target="_blank" href="https://data.earthenv.org/tcf/tcf_ensemble_mn_sd_2001-2018_v16.zip">Individual years, percent of area covered from 2001-2018, mean and sd (zipped, 130 MB)</a> </li>
<li> <a target="_blank" href="https://data.earthenv.org/tcf/REPROJ_WDPA_Dec2016-shapefile-polygons_v16.zip">Protected areas (Based of December 2016 WDPA (zipped, 50MB) </a> </li>

  </div>

<script type="text/javascript">

  var base_url = 'https://data.earthenv.org/precipitation/CHELSA_preccor_land_';

  var minYear = 2003, maxYear = 2016;
  var months = ['January', 'February', 'March','April', 'May', 'June', 'July','August', 'September', 'October','November', 'December'];

  for (var m = 0; m < months.length; m++) {$('<option>', {value: (m+1), text: months[m]}).appendTo("#fmonth"); }
  for (var y = minYear; y <= maxYear; y++) { $('<option>', {value: y, text: y}).appendTo("#fyear");}

  // continuous downloads
  $('#fcondownload').click(function() {
    var fy = $('#fyear').val();
    var fm = $('#fmonth').val();
    var dlurl = base_url + fm.toString().padStart(2, "0") + '_' + fy + '.zip';
    window.open(dlurl);

    return false;
  });
</script>
