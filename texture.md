---
layout: default
title: Global 1-km Consensus Land Cover - EarthEnv
short_title: Global habitat heterogeneity
menu_title: Heterogeneity
mainpage: false
weight: 2
permalink: /texture
---

Global Habitat Heterogeneity
----------------------------

The datasets contain 14 metrics quantifying spatial heterogeneity of global habitat at multiple resolutions based on the textural features of Enhanced Vegetation Index (EVI) imagery acquired by the Moderate Resolution Imaging Spectroradiometer (MODIS). For additional information about the metrics and the evaluations of their utility for biodiversity modeling, please see the associated journal article:

{:.litreference}
[Tuanmu, M.-N. and W. Jetz. (2015) A global, remote sensing-based characterization of terrestrial habitat heterogeneity for biodiversity and ecosystem modeling. Global Ecology and Biogeography. DOI: 10.1111/geb.12365](http://onlinelibrary.wiley.com/doi/10.1111/geb.12365/abstract).

{:.extra-spacing}
### Dataset Details

Six first-order and 8 second-order texture measures are available at 30 arc-second (~1 km at the equator), 2.5 arc-minute (~5 km) and 12.5 arc-minute (~25 km) resolutions. The first-order texture measures are statistics describing the frequency distribution of EVI values and measureing compositional variability in EVI within an area. The second-order texture measures are statistics of the occurrence probabilities of different EVI combinations among pixel pairs within an area and thus also reflect spatial arrangement and dependency of the EVI values.

{:.extra-spacing}
**First-order texture measures**

{:#landcoverfull .table-bordered .datalayers}
| Metric                   | Measure                      | Value Range                                | Expected Relationship with Heterogeneity |
|--------------------------|------------------------------|--------------------------------------------|------------------------------------------|
| Coefficient of variation | Normalized dispersion of EVI | &gt;=0                                     | Positive                                 |
| Evenness                 | Evenness of EVI              | &gt;=0; &lt;=1                             | Positive                                 |
| Range                    | Range of EVI                 | &gt;=0                                     | Positive                                 |
| Shannon                  | Diversity of EVI             | &gt;=0; &lt;=ln(max \# of different EVI)   | Positive                                 |
| Simpson                  | Diversity of EVI             | &gt;=0; &lt;=1-1/(max \# of different EVI) | Positive                                 |
| Standard deviation       | Dispersion of EVI            | &gt;=0                                     | Positive                                 |

{:.extra-spacing}
**Second-order texture measures**

{:#landcoverfull .table-bordered .datalayers}
| Metric        | Measure                                                          | Value Range     | Expected Relationship with Heterogeneity |
|---------------|------------------------------------------------------------------|-----------------|------------------------------------------|
| Contrast      | Exponentially weighted difference in EVI between adjacent pixels | &gt;=0          | Positive                                 |
| Correlation   | Linear dependency of EVI on adjacent pixels                      | &gt;=-1; &lt;=1 | Nonlinear                                |
| Dissimilarity | Difference in EVI between adjacent pixels                        | &gt;=0          | Positive                                 |
| Entropy       | Disorderliness of EVI                                            | &gt;=0          | Positive                                 |
| Homogeneity   | Similarity of EVI between adjacent pixels                        | &gt;=0; &lt;=1  | Negative                                 |
| Maximum       | Dominance of EVI combinations between adjacent pixels            | &gt;=0; &lt;=1  | Negative                                 |
| Uniformity    | Orderliness of EVI                                               | &gt;=0; &lt;=1  | Negative                                 |
| Variance      | Dispersion of EVI combinations between adjacent pixels           | &gt;=0          | Positive                                 |

All data layers are in WGS84 projection and have a spatial extent from 85ºN - 60ºS and from 180ºW - 180ºE. The pixel values of the data layers should be mulitplied by 0.0001 to obtain the actual values of the metrics.

{:.extra-spacing}
### Dataset Download

**Version 1.0**

{:#landcoverfull .table-bordered .datalayers}
| Metric                   | 30 arc-second (1 km)                                                                                          | 2.5 arc-minute (5 km)                                                                                         | 12.5 arc-minute (25 km)                                                                                         |
|--------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Coefficient of variation | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/cv_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}            | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/cv_01_05_5km_uint32.tif){:.btn .btn-default .btn-xs}            | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/cv_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}            |
| Evenness                 | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/evenness_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/evenness_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/evenness_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}      |
| Range                    | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/range_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}         | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/range_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}         | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/range_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}         |
| Shannon                  | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/shannon_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/shannon_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/shannon_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}       |
| Simpson                  | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/simpson_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/simpson_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/simpson_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}       |
| Standard deviation       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/std_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}           | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/std_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}           | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/std_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}           |
| Contrast                 | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Contrast_01_05_1km_uint32.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Contrast_01_05_5km_uint32.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Contrast_01_05_25km_uint32.tif){:.btn .btn-default .btn-xs}      |
| Correlation              | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Correlation_01_05_1km_int16.tif){:.btn .btn-default .btn-xs}   | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Correlation_01_05_5km_int16.tif){:.btn .btn-default .btn-xs}   | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Correlation_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}   |
| Dissimilarity            | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Dissimilarity_01_05_1km_uint32.tif){:.btn .btn-default .btn-xs} | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Dissimilarity_01_05_5km_uint32.tif){:.btn .btn-default .btn-xs} | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Dissimilarity_01_05_25km_uint32.tif){:.btn .btn-default .btn-xs} |
| Entropy                  | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Entropy_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Entropy_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Entropy_01_05_25km_uint32.tif){:.btn .btn-default .btn-xs}       |
| Homogeneity              | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Homogeneity_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}   | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Homogeneity_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}   | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Homogeneity_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}   |
| Maximum                  | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Maximum_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Maximum_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}       | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Maximum_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}       |
| Uniformity               | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Uniformity_01_05_1km_uint16.tif){:.btn .btn-default .btn-xs}    | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Uniformity_01_05_5km_uint16.tif){:.btn .btn-default .btn-xs}    | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Uniformity_01_05_25km_uint16.tif){:.btn .btn-default .btn-xs}    |
| Variance                 | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/1km/Variance_01_05_1km_uint32.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/5km/Variance_01_05_5km_uint32.tif){:.btn .btn-default .btn-xs}      | [Download GeoTIFF](http://data.earthenv.org/habitat_heterogeneity/25km/Variance_01_05_25km_uint32.tif){:.btn .btn-default .btn-xs}      |

{:.extra-spacing}
### Distribution

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Global Habitat Heterogeneity Metrics Version 1</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.earthenv.org/texture.html" property="cc:attributionName" rel="cc:attributionURL">Tuanmu & Jetz</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.earthenv.org/texture.html" rel="cc:morePermissions">http://www.earthenv.org/texture.html</a>.

{:.extra-spacing}
### Dataset Citation

{:.litreference}
[Tuanmu, M.-N. and W. Jetz. (2015) A global, remote sensing-based characterization of terrestrial habitat heterogeneity for biodiversity and ecosystem modeling. Global Ecology and Biogeography. DOI: 10.1111/geb.12365](http://onlinelibrary.wiley.com/doi/10.1111/geb.12365/abstract).

{:.extra-spacing}
### Contacts

-   [Mao-Ning Tuanmu](http://jetzlab.yale.edu/people/mao-ning-tuanmu)
-   [Walter Jetz](http://jetzlab.yale.edu/people/walter-jetz)


{:.extra-spacing}
<iframe src="https://earthenv-dot-map-of-life.appspot.com/3/-36.607/39.842?collections=texture&layers=range1km"
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
