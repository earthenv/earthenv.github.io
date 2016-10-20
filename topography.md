---
layout: default
title: Global 1,5,10,100-km Topography - EarthEnv
short_title: Topography
menu_title: Topography
mainpage: false
weight: 4
permalink: /topography
---

Global 1,5,10,100-km Topography
-----------------------

{::options parse_block_html="true" /}


<iframe class="mapframe_right"
      src="http://earthenv.map-of-life.appspot.com/3/0.000/0.000?collections=topographyv2&layers="
      name="map" frameborder="0"
      allowfullscreen="true"></iframe>

<div class="row">
<div class="col-md-12">

{:.table .table-bordered .table-condensed .datalayers .extra-spacing}
Dataset | Download 1KM | Download 5KM | Download 10KM | Download 50KM | Download 100KM | Preview
-- | -- | -- | --  {% for dataset in site.data.topography_files_full %}
{{ dataset.title }} | [Download 1KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.filename1km }}.tif){:.btn .btn-default .btn-xs} | [Download 5KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.filename5km }}.tif){:.btn .btn-default .btn-xs} | [Download 10KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.filename10km }}.tif){:.btn .btn-default .btn-xs} | [Download 50KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.filename50km }}.tif){:.btn .btn-default .btn-xs} | [Download 100KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.filename100km }}.tif){:.btn .btn-default .btn-xs} | ![{{ dataset.title }} preview](/images/topography_previews/{{ dataset.filename10km }}.png "{{ dataset.title }} preview"){:.center-block} {% endfor %}

</div>
</div>
