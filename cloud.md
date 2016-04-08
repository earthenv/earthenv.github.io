---
layout: default
title: Global 1-km Cloud Cover - EarthEnv
short_title: Cloud cover climatology
menu_title: Cloud cover
mainpage: false
weight: 4
permalink: /cloud
---

Global 1-km Cloud Cover
-----------------------

{::options parse_block_html="true" /}


<iframe class="mapframe_right"
      src="http://earthenv.map-of-life.appspot.com/3/0.000/0.000?collections=cloud&layers=Seasonality"
      name="map" frameborder="0"
      allowfullscreen="true"></iframe>

The datasets integrate 15 years of twice-daily remote sensing-derived cloud observations at 1-km resolution. For additional information about the integration approach and the evaluations of the datasets, please see the associated journal article:

{:.litreference}
Wilson AM, Jetz W (2016) Remotely Sensed High-Resolution Global Cloud Dynamics for Predicting Ecosystem and Biodiversity Distributions. <a target="_blank" href="http://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002415">PLoS Biol 14(3): e1002415. doi:10.1371/journal. pbio.1002415</a>

{:.extra-spacing}
### Dataset Details

Cloud cover can influence numerous important ecological processes including reproduction, growth, survival, and behavior, yet our assessment of its importance at the appropriate spatial scales has remained remarkably limited. If captured over large extent yet at sufficiently fine spatial grain cloud cover dynamics may provide key information for delineating a variety of habitat types and predicting species distributions. Here we develop new near-global, fine-grain (≈1km) monthly cloud frequencies from 15 years of twice-daily MODIS satellite images that expose spatio-temporal cloud cover dynamics of previously undocumented global complexity. We demonstrate that cloud cover varies strongly in its geographic heterogeneity and that the direct, observation-based nature of cloud-derived metrics can improve predictions of habitats, ecosystem, and species distributions with reduced spatial autocorrelation compared to commonly used interpolated climate data. These findings support the fundamental role of remote sensing as an effective lens through which to understand and globally monitor the fine-grain spatial variability of key biodiversity and ecosystem properties. 

<div class="col-md-6">

{:.table .table-bordered .table-condensed .datalayers .extra-spacing}
| Dataset Download                         |                                                                                         |
|------------------------------------------|-----------------------------------------------------------------------------------------|
| Cloud Forest Prediction                  | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_CloudForestPrediction.tif){:.btn .btn-default .btn-xs}      |
| Inter-annual variability (SD)                          | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_interannualSD.tif){:.btn .btn-default .btn-xs}              |
| Intra-Annual variability (SD)                          | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_intraannualSD.tif){:.btn .btn-default .btn-xs}              |
| Mean annual                              | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_meanannual.tif){:.btn .btn-default .btn-xs}                 |
| January mean                             | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_01.tif){:.btn .btn-default .btn-xs}            |
| February mean                            | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_02.tif){:.btn .btn-default .btn-xs}            |
| March mean                               | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_03.tif){:.btn .btn-default .btn-xs}            |
| April mean                               | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_04.tif){:.btn .btn-default .btn-xs}            |
| May mean                                 | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_05.tif){:.btn .btn-default .btn-xs}            |
| June mean                                | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_06.tif){:.btn .btn-default .btn-xs}            |
| July mean                                | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_07.tif){:.btn .btn-default .btn-xs}            |
| August mean                              | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_08.tif){:.btn .btn-default .btn-xs}            |
| September mean                           | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_09.tif){:.btn .btn-default .btn-xs}            |
| October mean                             | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_10.tif){:.btn .btn-default .btn-xs}            |
| November mean                            | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_11.tif){:.btn .btn-default .btn-xs}            |
| December mean                            | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_monthlymean_12.tif){:.btn .btn-default .btn-xs}            |
| Seasonality concentration                | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_seasonality_concentration.tif){:.btn .btn-default .btn-xs} |
| Seasonality RGB                          | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_seasonality_rgb.tif){:.btn .btn-default .btn-xs}           |
| Seasonality theta                        | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_seasonality_theta.tif){:.btn .btn-default .btn-xs}         |
| Seasonality single band with color table | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_seasonality_visct.tif){:.btn .btn-default .btn-xs}         |
| Spatial variability (1 degree SD)                    | [Download GeoTIFF](http://data.earthenv.org/cloud/MODCF_spatialSD_1deg.tif){:.btn .btn-default .btn-xs}            |

</div><div class="col-md-6">

{:#slideshowimages .extra-spacing .center-block}
* ![An image of the global cloud data.](images/cloud_demo-slide1.png "An image of the global cloud data."){:.center-block}
* ![An image of the global cloud data.](images/cloud_demo-slide2.png "An image of the global cloud data."){:.center-block}
* ![An image of the global cloud data.](images/cloud_demo-slide3.png "An image of the global cloud data."){:.center-block}


{:.extra-spacing}
### Metadata
Let $m$ index months ($m \in 1:12)$ and $y$ index years ($y \in 2000: 2014$). The monthly time series of cloud frequency were summarized to “climatological” mean cloud frequencies and standard deviations: $\mu_m = mean(CF_{m,y})$ and $\sigma_m = SD(CF_{m,y})$

*MODCF_meanannual*:  Mean annual cloud frequency (%) over 2000-2014. Valid values range from 0-10,000 and need to be multiplied by 0.01 to result in % cloudy days.

*MODCF_monthlymean_01-12*:  Mean monthly cloud frequency (%) over 2000-2014. Valid values range from 0-10,000 and need to be multiplied by 0.01 to result in % cloudy days.

*MODCF_intraannualSD*: Standard deviation of mean 2000-2014 monthly cloud frequencies. Values need to be multiplied by 0.01 to recover SD. 

*MODCF_interannualSD*: Mean of monthly standard deviations over 2000-2014 monthly cloud frequencies. Values need to be multiplied by 0.01 to recover SD. 


*MODCF_seasonality_concentration*:   Seasonal cloud concentration index (see methods for full description) ranging from 0 (all months equally cloudy) to 100 (all clouds are observed in a single month).  Valid values range from 0-10,000 and need to be multiplied by 0.01.

*MODCF_seasonality_theta*:   Timing of peak seasonal cloud concentration (see methods for full description) expressed as an angle (degrees) ranging from 0 (peak cloudiness observed on January 1st) to 360 (peak cloudiness observed on December 31st).  Valid values range from 0-3600 and need to be multiplied by 0.1 to recover degrees.  To convert to Julian Day (Day of Year), multiply by 0.1013889 instead of 0.01.

*CloudForestPrediction*: Distribution (relative occurrence rate) of tropical montane cloud forests estimated using an inhomogeneous point process model of 529 cloud forest locations with the new cloud metrics and elevation.


### Distribution

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0; float:left; margin-right:1em; margin-top:6px" src="http://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a> <span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" rel="dct:type">EarthEnv Global 1-km Cloud Frequency Version 1</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Wilson & Jetz</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>. Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.earthenv.org/cloud.html" rel="cc:morePermissions">http://www.earthenv.org/cloud.html</a>.

{:.extra-spacing}
### Dataset Citation

"Wilson AM, Jetz W (2016) Remotely Sensed High-Resolution Global Cloud Dynamics for Predicting Ecosystem and Biodiversity Distributions. PLoS Biol 14(3): e1002415. doi:10.1371/journal. pbio.1002415"
Data available on-line at <http://www.earthenv.org/>.

{:.extra-spacing}
### Contacts

* [Adam M. Wilson](http://adamwilson.us)
* [Walter Jetz](http://jetzlab.yale.edu/people/walter-jetz)

</div>

<!-- Load the ulSlide jQuery plugin. -->
<script type="text/javascript" src="javascripts/jquery.ulslide-1.5.5.min.js?v=4"></script>

<script type="text/javascript">
  // Processes the <tr> elements for a data download table and adds the GA event
  // tracking code to the links.
  function addDownloadTracking(rows, version) {
    rows.each(function(cnt, row) {
if (cnt > 0) {
        var tds = $(row).children('td');

        // Get the landcover class.
        var lcclass = $(tds[0]).text();

        // Add the event triggers.
        links = $(tds[2]).children('a');
  links.first().click(function() {
          ga('send', 'event', 'cloud data', 'GeoTIFF download', 'class ' + lcclass + ' ' + version);
        });
        links.last().click(function() {
          ga('send', 'event', 'cloud data', 'LAS view', 'class ' + lcclass + ' ' + version);
        });
      }
    });
  }

  // Initialize the slide show on document load.
  $(function() {						
    $('#slideshowimages').ulslide({
      duration: 800,
      effect: {
        type: 'fade'
      },
      autoslide: 8000
});

    // Add GA event trackers to the data download table links.
    addDownloadTracking($('table#landcoverfull tr'), 'full');
    addDownloadTracking($('table#landcoverreduced tr'), 'reduced');
  });
</script>
