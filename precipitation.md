---
layout: default
title: Global daily 1km land surface precipitation based on cloud cover-informed downscaling
short_title: Precipitation
menu_title: Precipitation
mainpage: false
weight: 4
permalink: /precipitation
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

## Global daily 1km land surface precipitation based on cloud cover-informed downscaling

High-resolution climatic data are essential to many questions and applications in
environmental research and ecology. Here we develop and implement a new semi-mechanistic
downscaling approach for daily precipitation estimate that incorporates high resolution
(30 arc sec) satellite-derived cloud frequency. The downscaling algorithm incorporates
orographic predictors such as wind fields, valley exposition, and boundary layer height,
with a subsequent bias correction. We apply the method to the ERA5 precipitation archive
and MODIS monthly cloud cover frequency to develop a daily gridded precipitation time series
in 1km resolution for the years 2003 onward. Comparison of the predictions with existing
gridded products and station data from the Global Historical Climate Network indicates an
improvement in the spatio-temporal performance of the downscaled data in predicting
precipitation. Regional scrutiny of the cloud cover correction from a topographically
highly heterogeneous area further confirms that CHELSA-EarthEnv performs well in
comparison to other precipitation products such as numerical weather models. The
presented CHELSA-EarthEnv daily precipitation product improves the temporal accuracy
compared to ERA5 but with an additional improved spatial accuracy and much better
representation of precipitation in complex terrain.

{:.litreference}
[Karger, D.N., Wilson, A.M., Mahony, C., Zimmermann. N.E., Jetz, W. (2021)](https://earthenv.org/) Global daily 1km land surface precipitation based on cloud cover-informed downscaling. _EarthEnv_. [hdl:10079/MOL/6f52b80d-0a41-40f7-84ec-873458ca6ee6](http://hdl.handle.net/10079/MOL/6f52b80d-0a41-40f7-84ec-873458ca6ee6).

<!--
{::options parse_block_html="true" /}
-->

_**Displaying Annual Mean Precipitation for: 2014**_
<iframe class="mapframe_right" style="float: none"
      src="https://dev-dot-earthenv-dot-map-of-life.appspot.com/precipitation"
      name="map" frameborder="0"
      allowfullscreen="true"></iframe>

  <div class="col-md-12 extra-spacing">
    
    <div class="col-md-6 extra-spacing">
        <h3>Select year and month to download</h3>
        <p xmlns:cc="http://creativecommons.org/ns#" >The data is licensed under Creative Commons <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fyear">Year</label>
            <select id="fyear" class="form-control"></select>
          </div>

          <div class="form-group">
            <label for="fmonth">Month</label>
            <select id="fmonth" class="form-control"></select>
          </div>

          <div><em>File size: ~8GB</em></div>

          <button id="fcondownload" class="btn btn-primary extra-spacing">Download</button>

        </form>
      </div>

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
