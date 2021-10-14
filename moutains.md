---
layout: default
title: GMBA Mountain Inventory v2
short_title: GMBA Mountain Inventory
menu_title: GMBA Mountain Inventory
mainpage: false
weight: 4
permalink: /mountains
---


<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Dataset",
  "@id": "https://doi.org/10.48601/earthenv-t9k2-1407",
  "url": "https://earthenv.org/mountains",
  "additionalType": "Geospatial vector layer",
  "name": "GMBA Mountain Inventory v2",
  "author": {
    "name": "Global Mountain Biodiversity Assessment",
    "affiliation": {
      "@type": "Organization",
      "@id": "https://ror.org/02k7v4d05",
      "name": "University of Bern"
    },
    "@type": "Organization",
    "@id": "Global Mountain Biodiversity Assessment"
  },
  "editor": [
    {
      "name": "Mark Snethlage",
      "givenName": "Mark",
      "familyName": "Snethlage",
      "affiliation": {
        "@type": "Organization"
      },
      "contributorType": "ContactPerson",
      "@type": "Person",
      "@id": "Mark Snethlage"
    },
    {
      "name": "Mark Snethlage",
      "givenName": "Mark",
      "familyName": "Snethlage",
      "affiliation": {
        "@type": "Organization"
      },
      "contributorType": "DataManager",
      "@type": "Person",
      "@id": "Mark Snethlage"
    },
    {
      "name": "Davnah Urbach",
      "givenName": "Davnah",
      "familyName": "Urbach",
      "affiliation": {
        "@type": "Organization"
      },
      "contributorType": "ProjectLeader",
      "@type": "Person",
      "@id": "Davnah Urbach"
    }
  ],
  "description": "A standardized delineation of the worlds’ mountains has many applications in research, education, and the science-policy interface. Here we provide a new inventory of 8619 mountain ranges developed under the auspices of the Global Mountain Biodiversity Assessment (GMBA). Building on an earlier compilation, the presented geospatial database uses a further advanced and generalized mountain definition and a semi-automated method to enable globally standardized, transparent delineations of mountain ranges worldwide. The inventory is presented on EarthEnv at various hierarchical levels, allowing users to select their preferred level of regional aggregation from continents to small subranges according to their needs and the scale of their analyses. The clearly defined, globally consistent and hierarchical nature of the presented mountain inventory offers a standardized resource for referencing and addressing mountains across basic and applied natural, social sciences research and a range of other uses in science communication and education.",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
  "version": "2.0",
  "keywords": "FOS: Earth and related environmental sciences, FOS: Earth and related environmental sciences",
  "inLanguage": "en",
  "contentSize": "322mb",
  "encodingFormat": "Shapefile",
  "datePublished": "2021",
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "address": "World",
      "box": "-56 -180 84 180"
    }
  },
  "schemaVersion": "http://datacite.org/schema/kernel-4",
  "publisher": {
    "@type": "Organization",
    "name": "GMBA-EarthEnv"
  },
  "funder": {
    "@id": "https://doi.org/10.13039/501100004902",
    "@type": "Organization",
    "name": "Akademie der Naturwissenschaften"
  },
  "provider": {
    "@type": "Organization",
    "name": "datacite"
  }
}
</script>

## GMBA Mountain Inventory v2


<div class="pull-right">
  <a href="https://www.gmba.unibe.ch/" target="_blank"><img src="/images/logos/gmba_logo.png" width="260px" /></a>
</div>

### A hierarchical inventory of the world’s mountains for global comparative mountain science

A standardized delineation of the worlds’ mountains has many applications in research, education, and the science-policy interface. Here we provide a new inventory of 8619 mountain ranges developed under the auspices of the Global Mountain Biodiversity Assessment (GMBA). Building on an earlier compilation, the presented geospatial database uses a further advanced and generalized mountain definition and a semi-automated method to enable globally standardized, transparent delineations of mountain ranges worldwide. The inventory is presented on EarthEnv at various hierarchical levels, allowing users to select their preferred level of regional aggregation from continents to small subranges according to their needs and the scale of their analyses. The clearly defined, globally consistent and hierarchical nature of the presented mountain inventory offers a standardized resource for referencing and addressing mountains across basic and applied natural, social sciences research and a range of other uses in science communication and education.

### Citation
#### Publication
{:.litreference}
[Mark A. Snethlage, Davnah Urbach, Jonas Geschke, Eva M. Spehn, Ajay Ranipeta, Nigel G. Yoccoz, Christian Körner, Walter Jetz, Markus Fischer. (2021) A hierarchical inventory of the world’s mountains for global comparative mountain science. Scientific Data. ](https://www.nature.com/sdata/).

#### Dataset
{:.litreference}
[Global Mountain Biodiversity Assessment (2021) GMBA Mountain Inventory v2. GMBA-EarthEnv. doi:10.48601/earthenv-t9k2-1407](https://www.earthenv.org/mountains).

_**Note**: When using the GMBA Inventory v2.0, both the publication and the dataset must be cited._

<!--
{::options parse_block_html="true" /}
-->

<div class="col-md-12 extra-spacing">
<iframe class="mapframe_right" style="float: none; min-width: 70%; width: 100%"
      src="https://dev-dot-earthenv-dot-map-of-life.appspot.com/mountains"
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
    <p>
      <strong>Information about custom downloads:</strong> <br />
      <small>For more details, see publication</small>
    </p>
    
    <strong>Extent:</strong>
    <ul>
      <li>Standard: is the main version of the GMBA Inventory v2.0, where the polygons represent actual (only slightly generalized) mountain ranges (according to the GMBA Definition v2.0). This layer can be used as such for analysis, but can also be intersected with the GMBA Definition v2.0 for more precision.</li>
      <li>Broad: is a version of the GMBA Inventory 2.0 where the polygons extend well beyond the GMBA Definition v2.0, into the surrounding landscape. The polygons in this layer include more than actual mountainous terrain, and should therefore always be intersected with a mountain definition layer, such as those found on the <a href="https://rmgsc.cr.usgs.gov/gme/" target="_blank">Global Mountain Explorer</a> (GME) before analysis</li>
    </ul>
    
    <strong>Layers:</strong>
    <ul>
      <li>All: is the complete GMBA Inventory v2.0 consisting of 8329 overlapping polygons ('Standard') and 8619 overlapping polygons ('Broad') at all different levels of the hierarchy.</li>
      <li>Basic: is the subset of 6719 ('Standard') and 6994 ('Broad') smallest non-overlapping mapping units of the inventory, i.e. those having no 'child' sub-range</li>
      <li>300 selection: is a subset of 291 ('Standard') and 292 ('Broad') non overlapping major mountain systems and ranges</li>
    </ul>
    </div>

</div>


<div class="col-md-12 extra-spacing">
  <h4>Code</h4>
  <p>
    Additional information and tools for using the inventory are available on 
    <a href="https://github.com/gmba-biodiversity/inventory" target="_blank">GitHub</a>.
  </p>
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
