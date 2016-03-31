---
layout: default
title: DEM90 - EarthEnv
short_title: 90m digital elevation model
menu_title: DEM
mainpage: false
weight: 5
permalink: /DEM
---

<!-- Load the code for handling form inputs to download DEM tiles. -->
<script language="JavaScript" type="text/javascript" src="javascripts/DEMscript.js"></script>

## EarthEnv-DEM90 digital elevation model

{:.extra-spacing}
### Dataset

The data distributed here are in EHdr format, unprojected and
referenced to the WGS84 geodetic datum. They are derived from
<a href="http://www.cgiar-csi.org/data/srtm-90m-digital-elevation-database-v4-1">CGIAR-CSI SRTM v4.1</a>
and <a href="http://asterweb.jpl.nasa.gov/gdem.asp">ASTER GDEM v2</a> data
products. These data have been processed and merged to provide continuous
coverage of ~91% of the globe. Processing and merging methodology are
available in
<a href="http://www.sciencedirect.com/science/article/pii/S0924271613002360">Robinson et al. (2014)</a>.

{:.extra-spacing}
### Distribution

<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" rel="dct:type">EarthEnv Digital Elevation Model Version 1</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.earthenv.org/DEM.html" property="cc:attributionName" rel="cc:attributionURL">Natalie Robinson and the NCEAS Environment and Organisms (ENO) Working Group</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
<br />Permissions beyond the scope of this license may be available at <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.earthenv.org/DEM.html" rel="cc:morePermissions">http://www.earthenv.org/DEM.html</a>.

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
  <img alt="Creative Commons License" style="border-width:0; margin: 0;" src="http://i.creativecommons.org/l/by/4.0/88x31.png" />
</a>

{:.extra-spacing}
### No warranty or liability

EarthEnv-DEM90 is provided without any warranty
of any kind whatsoever, either express or implied, including warranties of
merchantability and fitness for a particular purpose. The creators of the
product shall not be liable for incidental, consequential, or special
damages arising out of the use of any data.

{:.extra-spacing}
### Acknowledgement and citation

Users should cite
<a href="http://www.sciencedirect.com/science/article/pii/S0924271613002360">Robinson et al. (2014)</a>
 in the creation of any reports, publications, new data sets, derived
products, or services resulting from the use of this data set, and if possible
link web pages to the EarthEnv-DEM90 website
(<a href="http://www.earthenv.org/DEM.html">http://www.earthenv.org/DEM.html</a>).
Please refer to acknowledgements
in <a href="http://www.sciencedirect.com/science/article/pii/S0924271613002360">Robinson et al. (2014)</a>
for funding and logistic support for EarthEnv-DEM90.

{:.extra-spacing}
### Reference

<p class="litreference">Robinson, N., Regetz, J., and Guralnick, R. P. (2014). EarthEnv-DEM90: A nearly-global, void-free, multi-scale smoothed, 90m digital elevation model from fused ASTER and SRTM data. ISPRS Journal of Photogrammetry and Remote Sensing, 87:2014, 57-67.  Available at <a href="http://www.sciencedirect.com/science/article/pii/S0924271613002360">http://www.sciencedirect.com/science/article/pii/S0924271613002360</a>.</p>

<!-- Select by coordinates. -->

{:.extra-spacing}
### Get Data by Coordinates

_Internet Explorer users: If multiple tiles are desired, please use an alternative browser._

{:.well}
<!-- Create radio buttons and text boxes. -->
<form name="CoordInput">
	<table class="dem table-bordered">
	<tr>
		<th style="background: none; border: none;" />
		<th style="padding-right: 2em;" colspan="2">
			<input name="Option" value="DD" onClick="Activate()" type="radio">
			<span style="font-weight: bold;">Decimal Degrees</span><br />(e.g. E25, S50)</th>
		<th colspan="2"><input name="Option" value="DMS" onClick="Activate()" type="radio">
			<span style="font-weight: bold;">Degrees: Minutes: Seconds</span><br />(e.g. -50 10 5, 130 20 90)</th>
	</tr>
	<tr>
		<td style="border: none;" />
		<td>Minimum</td><td>Maximum</td><td>Minimum</td><td>Maximum</td>
	</tr>
	<tr>
		<td style="text-align: right;">Longitude:</td>
		<!--DecDeg_LonMin/Max-->
		<td><input name="LonMin" size="5"  disabled="disabled" type="text" maxlength="7"></td>
		<td><input name="LonMax" size="5"  disabled="disabled" type="text" maxlength="7"></td>
		<!--DMS Lon min-->
		<td>
			<input name="LonDMin" size="5"  disabled="disabled" type="text" maxlength="4">
			<input name="LonMMin" size="5"  disabled="disabled" type="text" maxlength="5">
			<input name="LonSMin" size="5"  disabled="disabled" type="text" maxlength="5">
		</td>
		<!--DMS Lon max-->
		<td>
			<input name="LonDMax" size="5"  disabled="disabled" type="text" maxlength="4">
			<input name="LonMMax" size="5"  disabled="disabled" type="text" maxlength="5">
			<input name="LonSMax" size="5"  disabled="disabled" type="text" maxlength="5">
		</td>
	</tr>
	<tr>
		<td style="text-align: right;">Latitude:</td>
		<!--DecDeg_LatMin/Max-->
		<td><input name="LatMin" size="5"  disabled="disabled" type="text" maxlength="6"></td>
		<td><input name="LatMax" size="5"  disabled="disabled" type="text" maxlength="6"></td>
		<!--DMS Lat min-->
		<td>
			<input name="LatDMin" size="5"  disabled="disabled" type="text" maxlength="4">
			<input name="LatMMin" size="5"  disabled="disabled" type="text" maxlength="5">
			<input name="LatSMin" size="5"  disabled="disabled" type="text" maxlength="5">
		</td>
		<!--DMS Lat max-->
		<td>
			<input name="LatDMax" size="5"  disabled="disabled" type="text" maxlength="4">
			<input name="LatMMax" size="5"  disabled="disabled" type="text" maxlength="5">
			<input name="LatSMax" size="5"  disabled="disabled" type="text" maxlength="5">
		</td>
	</tr>
</table>

<input name="goGet" class="btn btn-sm extra-spacing" onClick= "NowGoGetThem()" value="Get Tiles" disabled="disabled" type="button">

<p class="extra-spacing"><em>Note: If the region of interest crosses the International Date Line, please download tiles in separate
	download sessions (e.g. tiles for region E173 to E180, then for region W180 to W156).</em></p>
</form>

<!-- Select by tiles. -->
<h3>Get Data by Tile (click on tile to download)</h3>

<!-- Add gridded world map. -->
<img src="images/CroppedWP_WithGrid.jpg" alt="WorldGrid" usemap="#worldmap" />
<map name="worldmap">
	<script language="JavaScript" type="text/javascript">
		generateMapDownloadAreas();
	</script>
</map>
