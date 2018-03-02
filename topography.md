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
-------------------------------

<!--
{::options parse_block_html="true" /}
-->

<iframe class="mapframe_right"
      src="https://earthenv-dot-map-of-life.appspot.com/3/0.000/0.000?collections=topographyv2&layers="
      name="map" frameborder="0"
      allowfullscreen="true"></iframe>


  <div class="col-md-12 extra-spacing">
    
    <div class="col-md-6 extra-spacing">
        <h3>Derived topographic continuous variables</h3>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fdataset">Dataset</label>
            <select id="fdataset" class="form-control">
              <option value="elevation">Elevation</option>
              <option value="slope">Slope</option>
              <option value="aspectcosine">Aspect Cosine</option>
              <option value="aspectsine">Aspect Sine</option>
              <option value="eastness">Aspect Eastness</option>
              <option value="northness">Aspect Northness</option>
              <option value="roughness">Roughness</option>
              <option value="tpi">Topographic Position Index</option>
              <option value="tri">Terrain Ruggedness Index</option>
              <option value="vrm">Vector Ruggedness Measure</option>
              <option value="dx">First order partial derivative (E-W slope)</option>
              <option value="dxx">Second order partial derivative (E-W slope)</option>
              <option value="dy">First order partial derivative (N-S slope)</option>
              <option value="dyy">Second order partial derivative (N-S slope)</option>
              <option value="pcurv">Profile curvature</option>
              <option value="tcurv">Tangential curvature</option>
            </select>       
          </div>

          <div class="form-group">
            <label for="faggr">Aggregation</label>
            <select id="faggr" class="form-control">
              <option value="md">Median</option>
              <option value="mn">Mean</option>
              <option value="mi">Minimum</option>
              <option value="ma">Maximum</option>
              <option value="sd">Standard deviation</option>
            </select>
          </div>

          <div class="form-group">
            <label for="fsrc">Sources</label>
            <select id="fsrc" class="form-control">
              <option value="GMTED">GMTED2010</option>
              <option value="SRTM">SRTM4.1dev</option>
            </select>
          </div>

          <div class="form-group">
            <label for="fres">Resolution</label>
            <select id="fres" class="form-control">
              <option value="1KM">1KM</option>
              <option value="5KM">5KM</option>
              <option value="10KM">10KM</option>
              <option value="50KM">50KM</option>
              <option value="100KM">100KM</option>
            </select>
          </div>

          <button id="fcondownload" class="btn btn-primary extra-spacing">Download</button>

        </form>
      </div>    

    <div class="col-md-6 extra-spacing">
        <h3>Derived topographic categorical variables</h3>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fcatdataset">Dataset</label>
            <select id="fcatdataset" class="form-control">
              <option value="geomflat_{KM}perc_GMTEDmd">Flat geomorphological landform - Percentage</option>
              <option value="geompeak_{KM}perc_GMTEDmd">Peak geomorphological landform - Percentage</option>
              <option value="geomridge_{KM}perc_GMTEDmd">Ridge geomorphological landform - Percentage</option>
              <option value="geomshoulder_{KM}perc_GMTEDmd">Shoulder geomorphological landform - Percentage</option>
              <option value="geomspur_{KM}perc_GMTEDmd">Spur geomorphological landform - Percentage</option>
              <option value="geomfootslope_{KM}perc_GMTEDmd">Slope geomorphological landform - Percentage</option>
              <option value="geomhollow_{KM}perc_GMTEDmd">Hollow geomorphological landform - Percentage</option>
              <option value="geomslope_{KM}perc_GMTEDmd">Footslope geomorphological landform - Percentage</option>
              <option value="geomvalley_{KM}perc_GMTEDmd">Valley geomorphological landform - Percentage</option>
              <option value="geompit_{KM}perc_GMTEDmd">Pit geomorphological landform - Percentage</option>
              <option value="geom_{KM}maj_GMTEDmd">Majority of geomorphological landforms</option>
              <option value="geom_{KM}count_GMTEDmd">Count of geomorphological landforms</option>
              <option value="geom_{KM}sha_GMTEDmd">Shannon index of geomorphological landforms</option>
              <option value="geom_{KM}ent_GMTEDmd">Entropy of geomorphological landforms</option>
              <option value="geom_{KM}uni_GMTEDmd">Uniformity of geomorphological landforms</option>
            </select>       
          </div>

          <div class="form-group">
            <label for="fcatres">Resolution</label>
            <select id="fcatres" class="form-control">
              <option value="1KM">1KM</option>
              <option value="5KM">5KM</option>
              <option value="10KM">10KM</option>
              <option value="50KM">50KM</option>
              <option value="100KM">100KM</option>
            </select>
          </div>

          <button id="fcatdownload" class="btn btn-primary extra-spacing">Download</button>

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
    var url = base_url + fdv + '_' + frv + fav + '_' + fsv + ((fsv=='SRTM')?'':fav) + '.tif';
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
