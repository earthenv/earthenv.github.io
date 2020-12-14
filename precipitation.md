---
layout: default
title: Global daily 1km land surface precipitation based on cloud cover-informed downscaling
short_title: Precipitation
menu_title: Precipitation
mainpage: false
weight: 4
permalink: /precipitation
---

Global daily 1km land surface precipitation based on cloud cover-informed downscaling
-------------------------------

High-resolution climatic data are essential to many questions and applications in 
environmental research and ecology. Here we develop and implement a new semi-mechanistic 
downscaling approach for daily precipitation estimate that incorporates high resolution 
(30 arc sec) satellite-derived cloud frequency. The downscaling algorithm incorporates 
orographic predictors such as wind fields, valley exposition, and boundary layer height, 
with a subsequent bias correction. We apply the method to the ERA5 precipitation archive 
and MODIS monthly cloud cover frequency to develop a daily gridded precipitation time series 
in 1km resolution for the years 2003 onward. Comparison of  the predictions with existing 
gridded products and station data from the Global Historical Climate Network indicates an 
improvement in the spatio-temporal performance of the downscaled data in predicting 
precipitation. Regional scrutiny of the cloud cover correction from a topographically 
highly heterogeneous area further confirms that CHELSA-EarthEnv performs well in 
comparison to other precipitation products such as numerical weather models. The 
presented CHELSA-EarthEnv daily precipitation product improves the temporal accuracy 
compared to ERA5 but with an additional improved spatial accuracy and much better 
representation of precipitation in complex terrain.

{:.litreference}
[Karger, D., Wilson, A., Mahony, C., Zimmermann. N.E., Jetz, W. (in prep) Earth-Env CHELSA . DOI: doi:xx.xxxx/xxxx.2020.xx](http://www.earthenv.org/).

<!--
{::options parse_block_html="true" /}
-->

_**Maps and point information tool to come in early Jan 2021**_


  <div class="col-md-12 extra-spacing">
    
    <div class="col-md-6 extra-spacing">
        <h3>Select year and month to download</h3>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fyear">Year</label>
            <select id="fyear" class="form-control"></select>
          </div>

          <div class="form-group">
            <label for="fmonth">Month</label>
            <select id="fmonth" class="form-control"></select>
          </div>

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
    // window.open(dlurl);
    console.log(dlurl);

    return false;
  });
</script>
