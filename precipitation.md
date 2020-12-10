---
layout: default
title: CHELSA - EarthEnv Precipitation
short_title: CHELSA - EarthEnv Precipitation
menu_title: CHELSA - EarthEnv
mainpage: false
weight: 4
permalink: /precipitation
---

CHELSA - EarthEnv Precipitation
-------------------------------

[INFO about CHELSA - EarthEnv Precipitation goes here]

{:.litreference}
[Karger, D., Jetz, W. (2020) Earth-Env CHELSA . DOI: doi:xx.xxxx/sdata.2020.xx](https://www.mol.org/).

<!--
{::options parse_block_html="true" /}
-->

<iframe class="mapframe_right"
      src="https://earthenv-dot-map-of-life.appspot.com/3/0.000/0.000?collections=topographyv2&layers="
      name="map" frameborder="0"
      allowfullscreen="true"></iframe>


  <div class="col-md-12 extra-spacing">
    
    <div class="col-md-6 extra-spacing">
        <h3>Select year to download</h3>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fdataset">Dataset</label>
            <select id="fdataset" class="form-control">
              <option value="2001">2003</option>
              <option value="2001">2004</option>
              <option value="2001">2005</option>
              <option value="2001">2006</option>
              <option value="2001">2007</option>
              <option value="2001">2008</option>
              <option value="2001">2009</option>
              <option value="2001">2010</option>
              <option value="2001">2011</option>
              <option value="2001">2012</option>
              <option value="2001">2013</option>
              <option value="2001">2014</option>
              <option value="2001">2015</option>
              <option value="2001">2016</option>
              <option value="2001">2017</option>
              <option value="2001">2018</option>
            </select>       
          </div>

          <button id="fcondownload" class="btn btn-primary extra-spacing">Download</button>

        </form>
      </div>    

  </div>
  

<!--
<div class="row">
<div class="col-md-12">

{:.table .table-bordered .table-striped .table-hover .table-condensed .datalayers .extra-spacing}
Dataset | Download 1KM | Download 5KM | Download 10KM | Download 50KM | Download 100KM | Preview
-- | -- | -- | --  {% for dataset in site.data.topography_files_full2 %}
{{ dataset.title }} | [Download GMTED 1KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.GMTED1km }}.tif){:.btn .btn-primary .btn-xs .extra-spacing}{% if dataset.SRTM1km %}[Download SRTM 1KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.SRTM1km }}.tif){:.btn .btn-default .btn-xs .extra-spacing}{% endif %} | [Download GMTED 5KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.GMTED5km }}.tif){:.btn .btn-primary .btn-xs .extra-spacing}{% if dataset.SRTM5km %}[Download SRTM 5KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.SRTM5km }}.tif){:.btn .btn-default .btn-xs .extra-spacing}{% endif %} | [Download GMTED 10KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.GMTED10km }}.tif){:.btn .btn-primary .btn-xs .extra-spacing}{% if dataset.SRTM10km %}[Download SRTM 10KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.SRTM10km }}.tif){:.btn .btn-default .btn-xs .extra-spacing}{% endif %} | [Download GMTED 50KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.GMTED50km }}.tif){:.btn .btn-primary .btn-xs .extra-spacing}{% if dataset.SRTM50km %}[Download SRTM 50KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.SRTM50km }}.tif){:.btn .btn-default .btn-xs .extra-spacing}{% endif %} | [Download GMTED 100KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.GMTED100km }}.tif){:.btn .btn-primary .btn-xs .extra-spacing}{% if dataset.SRTM100km %}[Download SRTM 100KM GeoTIFF](http://data.earthenv.org/topography/{{ dataset.SRTM100km }}.tif){:.btn .btn-default .btn-xs .extra-spacing}{% endif %} | ![{{ dataset.title }} preview](/images/topography_previews/{{ dataset.GMTED10km }}.png "{{ dataset.title }} preview"){:.center-block} {% endfor %}

</div>
</div>
-->


<script type="text/javascript">

  var base_url = 'https://data.earthenv.org/topography/';

  // continuous downloads
  $('#fcondownload').click(function() {
    var fdv = $('#fdataset').val();
    var frv = $('#fres').val();
    var fav = $('#faggr').val();
    var fsv = $('#fsrc').val();
    var fav2 = (fdv == 'elevation') ? fav : 'md';
    var url = base_url + fdv + '_' + frv + fav + '_' + fsv + ((fsv=='SRTM')?'':fav2) + '.tif';
    window.open(url);

    return false;
  });

  // categorical downloads
  $('#fcatdownload').click(function() {
    var fdv = $('#fcatdataset').val();
    var frv = $('#fcatres').val();
    var url = base_url + fdv.replace('{KM}', frv) + '.tif';
    window.open(url);

    return false;
  });  

  // hide the SRTM option for some continuous datasets
  $('#fdataset').change(function() {
    if ( $(this)[0].selectedIndex > 9 ) {
      // disable the SRTM option
      $('#fsrc option:contains("SRTM")').prop('disabled', 'disabled');

      // change the value to GMTED
      $('#fsrc option:first').prop('selected', true);
    } else {
      $('#fsrc option:contains("SRTM")').prop('disabled', '');
    }
  });
</script>
