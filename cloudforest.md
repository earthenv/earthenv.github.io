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
  "name" : "Global daily 1km land surface precipitation based on cloud cover-informed downscaling",
  "description" : "High-resolution climatic data are essential to many questions and applications in environmental research and ecology. Here we develop and implement a new semi-mechanistic downscaling approach for daily precipitation estimate that incorporates high resolution (30 arc sec) satellite-derived cloud frequency. The downscaling algorithm incorporates orographic predictors such as wind fields, valley exposition, and boundary layer height, with a subsequent bias correction. We apply the method to the ERA5 precipitation archive and MODIS monthly cloud cover frequency to develop a daily gridded precipitation time series in 1km resolution for the years 2003 onward. Comparison of the predictions with existing gridded products and station data from the Global Historical Climate Network indicates an improvement in the spatio-temporal performance of the downscaled data in predicting precipitation. Regional scrutiny of the cloud cover correction from a topographically highly heterogeneous area further confirms that CHELSA-EarthEnv performs well in comparison to other precipitation products such as numerical weather models. The presented CHELSA-EarthEnv daily precipitation product improves the temporal accuracy compared to ERA5 but with an additional improved spatial accuracy and much better representation of precipitation in complex terrain.",
  "temporalCoverage" : "2003-01-01/2016-12-31",
  "spatialCoverage" : {
    "@type":"Place",
    "geo":{
      "@type":"GeoShape",
      "box":"180 -84 180 84"
    }
  },
  "version" : "2.1",
  "identifier" : "hdl:10079/MOL/6f52b80d-0a41-40f7-84ec-873458ca6ee6",
  "license" : "https://creativecommons.org/publicdomain/zero/1.0",
  "distribution" : {
    "@type" : "DataDownload",
    "encodingFormat" : "GeoTIFF",
    "contentUrl" : "https://earthenv.org/precipitation"
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
  "citation": "Karger, D., Wilson, A., Mahony, C., Zimmermann. N.E., Jetz, W. (in prep) Earth-Env CHELSA . https://hdl.handle.net/10079/MOL/6f52b80d-0a41-40f7-84ec-873458ca6ee6"
}
</script>

## Tropical Cloud Forests

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
    
    Downloads available shortly

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
