---
layout: default
title: Near-global 1-km freshwater variables - EarthEnv
short_title: Near-global freshwater environmental variables
menu_title: Freshwater variables
mainpage: false
weight: 6
permalink: /streams
---

Near-global environmental information for freshwater ecosystems in 1km resolution
---------------------------------------------------------------------------------

<img style="border-width:0" src="/images/streams.png" />

The dataset consists of near-global, spatially continuous, and freshwater-specific environmental variables in a standardized 1km grid. We delineated the sub-catchment for each grid cell along the HydroSHEDS river network and summarized the upstream environment (climate, topography, land cover, surface geology and soil) to each grid cell using various metrics (average, minimum, maximum, range, sum, inverse distance-weighted average and sum). All variables were subsequently averaged across single lakes and reservoirs of the Global lakes and Wetlands Database that are connected to the river network. Monthly climate variables were summarized into 19 long-term climatic variables following the “bioclim” framework.
To facilitate the generation of freshwater variables for custom study areas and spatial grains, we provide the "_r.stream.watersheds_" and "_r.stream.variables_" add-ons for the GRASS GIS software.

Please see the associated journal article for further information:

{:.litreference}
[Domisch, S., Amatulli, G., and Jetz, W. (2015) Near-global freshwater-specific environmental variables for
biodiversity analyses in 1 km resolution. _Scientific Data_ 2:150073 doi:10.1038/sdata.2015.73](http://www.nature.com/articles/sdata201573)

{:.extra-spacing}
### Dataset details

We provide a variety of different metrics of the upstream environment along the stream network, resulting in a total of 324 layers. Each variable comes in the netCDF-4 format (network Common Data Form version 4) in a cell size of 30 arc-seconds (~1km at the Equator) in the WGS84 coordinate system with an extent of 60°N to 5°S latitude and 145°W to 180°E longitude. All variables consists of 39000 columns and 13920 rows. Each netCDF file contains one variable (e.g. upstream average land cover) where the single layers are stacked as single bands (e.g. 12 landcover classes). The pixel type of the layers ranges from Byte (upstream land cover) to Float64 (upstream precipitation).

{:.extra-spacing}
### Dataset download

The variables can be downloaded in the netCDF-4 format. See the ReadMe for an overview of the variables and the band number, as well as [Table 2](http://www.nature.com/articles/sdata201573/tables/2) of the associated publication for additional information.

{:.table-bordered}
| Category        | Download link                                                                                                                      |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------|
|                 | [ReadMe](http://data.earthenv.org/streams/ReadMe.txt)                                                                               |
| Climate         | [Monthly minimum temperature (average)](http://data.earthenv.org/streams/monthly_tmin_average.nc)                                 |
| Climate         | [Monthly maximum temperature (average)](http://data.earthenv.org/streams/monthly_tmax_average.nc)                                 |
| Climate         | [Monthly upstream precipitation (sum)](http://data.earthenv.org/streams/monthly_prec_sum.nc)                                      |
| Climate         | [Monthly minimum temperature (distance-weighted average)](http://data.earthenv.org/streams/monthly_tmin_weighted_average.nc)     |
| Climate         | [Monthly maximum temperature (distance-weighted average)](http://data.earthenv.org/streams/monthly_tmax_weighted_average.nc)     |
| Climate         | [Monthly upstream precipitation (distance-weighted sum)](http://data.earthenv.org/streams/monthly_prec_weighted_sum.nc)          |
| Climate         | [Hydroclimatic variables (average and sum)](http://data.earthenv.org/streams/hydroclim_average+sum.nc)                             |
| Climate         | [Hydroclimatic variables (distance-weighted average and sum)](http://data.earthenv.org/streams/hydroclim_weighted_average+sum.nc) |
| Topography      | [Upstream elevation (min, max, range, avg)](http://data.earthenv.org/streams/elevation.nc)                                          |
| Topography      | [Upstream slope (min, max, range, avg)](http://data.earthenv.org/streams/slope.nc)                                                  |
| Topography      | [Stream length and flow accumulation](http://data.earthenv.org/streams/flow_acc.nc)                                                |
| Land cover      | [Upstream landcover coverage (minimum)](http://data.earthenv.org/streams/landcover_minimum.nc)                                     |
| Land cover      | [Upstream landcover coverage (maximum)](http://data.earthenv.org/streams/landcover_maximum.nc)                                     |
| Land cover      | [Upstream landcover coverage (range)](http://data.earthenv.org/streams/landcover_range.nc)                                         |
| Land cover      | [Upstream landcover coverage (average)](http://data.earthenv.org/streams/landcover_average.nc)                                     |
| Land cover      | [Upstream landcover coverage (distance-weighted average)](http://data.earthenv.org/streams/landcover_weighted_average.nc)         |
| Geology         | [Upstream geology (distance-weighted count)](http://data.earthenv.org/streams/geology_weighted_sum.nc)                            |
| Soil            | [Upstream soil (minimum)](http://data.earthenv.org/streams/soil_minimum.nc)                                                        |
| Soil            | [Upstream soil (maximum)](http://data.earthenv.org/streams/soil_maximum.nc)                                                        |
| Soil            | [Upstream soil (range)](http://data.earthenv.org/streams/soil_range.nc)                                                            |
| Soil            | [Upstream soil (average)](http://data.earthenv.org/streams/soil_average.nc)                                                        |
| Soil            | [Upstream soil (distance-weighted average)](http://data.earthenv.org/streams/soil_weighted_average.nc)                            |
| Quality control | [Quality control layers](http://data.earthenv.org/streams/quality_control.nc)                                                      |

{:.extra-spacing}
### Notes

We recommend to use the [software R](http://www.r-project.org/) to load and process the variables. We provide example code that shows how to [load, crop, extract and export the variables in the netCDF format in R](http://github.com/domisch/stream_layers/blob/master/crop_netCDF.R), how to [snap points to the gridded variables and extract the variables for each point](http://github.com/domisch/stream_layers/blob/master/snap_points.R), and how and to use the GRASS GIS add-ons “_r.stream.watersheds_” and “_r.stream.variables_” to calculate similar variables for custom study areas and different spatial grains (see the tutorial on [spatial-ecology.net](http://spatial-ecology.net/dokuwiki/doku.php?id=wiki:grassrivarvariable)).

{:.extra-spacing}
### Distribution

EarthEnv Near-global environmental information for freshwater ecosystems in 1km resolution Version 1 by Domisch et al. is licensed under a “Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License”. Permissions beyond the scope of this license may be available at [http://www.earthenv.org/](http://www.earthenv.org/).

{:.extra-spacing}
### Dataset citation

Domisch, S., Amatulli, G., and Jetz, W. (2015) Near-global freshwater-specific environmental variables for
biodiversity analyses in 1 km resolution. _Scientific Data_ 2:150073 doi: 10.1038/sdata.2015.73. Data available online at [http://www.earthenv.org/](http://www.earthenv.org/).


{:.extra-spacing}
<iframe src="http://streams.earthenv-maps.map-of-life.appspot.com"
name="map" frameborder="0" width="100%" height="600"></iframe>


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
            ga('send', 'event', 'landcover data', 'GeoTIFF download', 'class ' + lcclass + ' ' + version);
          });
          links.last().click(function() {
            ga('send', 'event', 'landcover data', 'LAS view', 'class ' + lcclass + ' ' + version);
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
