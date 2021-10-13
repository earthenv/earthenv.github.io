---
layout: default
title: GMBA Mountain Inventory v2
short_title: GMBA Mountain Inventory
menu_title: GMBA Mountain Inventory
mainpage: false
weight: 4
permalink: /mountains
---


## GMBA Mountain Inventory v2


### A hierarchical inventory of the world’s mountains for global comparative mountain science

A standardized inventory of the world’s’ mountains is an essential tool for comparative mountain science and policy-making. Here we provide a new inventory of 8619 hierarchically organised mountain ranges, which we developed based on a new definition of mountains and the application of a semi-automated method to achieve high levels of accuracy in the outlining of the digitized shapes. By allowing users to define different levels of aggregation from continents to small subranges according to their needs and the scale of their analyses this inventory and its hierarchical structure represent a key resource for mountain research across the natural and social sciences.

### Citation
#### Publication
{:.litreference}
[Mark Snethlage, Davnah Payne, Jonas Geschke, Eva Spehn, Ajay Ranipeta, Nigel G. Yoccoz, Christian Körner, Walter Jetz, Markus Fischer. (2021) A hierarchical inventory of the world’s mountains for global comparative mountain science. Scientific Data. doi: ](https://www.nature.com/sdata/).

#### Dataset
{:.litreference}
[Mark Snethlage, Davnah Payne, Jonas Geschke, Eva Spehn, Ajay Ranipeta, Nigel G. Yoccoz, Christian Körner, Walter Jetz, Markus Fischer. (2021) GMBA Mountain Inventory v2. GMBA-EarthEnv. doi:10.48601/earthenv-t9k2-1407](https://www.earthenv.org/mountains).

<!--
{::options parse_block_html="true" /}
-->

<div class="col-md-12 extra-spacing">
<div class="pull-right"><img src="/images/logos/gmba_logo.png" width="230px" /></div>
<iframe class="mapframe_right" style="float: none; min-width: 70%; width: 100%"
      src="https://dev-dot-earthenv-dot-map-of-life.appspot.com/gmba"
      name="map" frameborder="0" allowfullscreen="true"></iframe>
</div>

<div class="col-md-12 extra-spacing">

    <h3>Downloads</h3>
    <p class="lead">Download the default layer <a href="https://data.earthenv.org/mountains/standard/GMBA_Inventory_v2.0.zip">here</a> (Standard extent - All layers).</p>

    <div class="col-md-6 extra-spacing">
        <h3>Custom</h3>
        <form class="form-horizontal">

          <div class="form-group">
            <label for="fextent">Extent</label>
            <select id="fextent" class="form-control">
              <option value="standard">Standard</option>
              <option value="broad">Broad</option>
            </select>       
          </div>

          <div class="form-group">
            <label for="flayer">Layers</label>
            <select id="flayer" class="form-control">
              <option value="all">All</option>
              <option value="300">300 selection</option>
              <option value="basic">Basic</option>
            </select>
          </div>

          <button id="fcatdownload" class="btn btn-primary extra-spacing">Download</button>

        </form>
    </div>
    
    <div class="col-md-6 extra-spacing">
    <p><strong>Information about custom downloads:</strong></p>
    
    <strong>Extent:</strong>
    <ul>
      <li>Standard: </li>
      <li>Broad: </li>
    </ul>
    
    <strong>Layers:</strong>
    <ul>
      <li>All: </li>
      <li>300 selection: </li>
      <li>Basic: </li>
    </ul>
    </div>

</div>


<script type="text/javascript">

  var base_url = 'https://data.earthenv.org/mountains/';

  // custom downloads
  $('#fcatdownload').click(function() {
    var fext = $('#fextent').val();
    var flyr = $('#flayer').val();

    var fext_file = (fext == 'broad') ? '_broad' : '';
    
    var url = base_url + fext + '/GMBA_Inventory_v2.0{fext_file}_{lyr}.zip';
    url = url.replace('{fext_file}', fext_file);
    url = url.replace('{lyr}', flyr);
    url = url.replace('_all.zip', '.zip');
    
    window.open(url);

    return false;
  });  
</script>
