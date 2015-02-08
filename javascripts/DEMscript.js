/**
 * Defines functions, etc. that are used by the DEM download page.
 *
 * Taken (mostly unmodified) from the original page hosted on http://dem.earth-env.appspot.com/.
 **/


/**
 * Code for coordinate input section.
 **/

// Enable text boxes when appropriate coord input type is selected
function Activate() {
	// initialize form with empty fields
	var Ipts = document.forms[0].getElementsByTagName("input");
	for (var i = 0; i < Ipts.length; i++) {
		if (Ipts[i].type == "text") {
			Ipts[i].disabled = false;
			Ipts[i].value = "";
		}
	}
	if (document.getElementsByName("Option")[0].checked == true) {
		Ipts[2].disabled = false;
		Ipts[3].disabled = false;
		Ipts[10].disabled = false;
		Ipts[11].disabled = false;
		Ipts[4].disabled = true;
		Ipts[5].disabled = true;
		Ipts[6].disabled = true;
		Ipts[7].disabled = true;
		Ipts[8].disabled = true;
		Ipts[9].disabled = true;
		Ipts[12].disabled = true;
		Ipts[13].disabled = true;
		Ipts[14].disabled = true;
		Ipts[15].disabled = true;
		Ipts[16].disabled = true;
		Ipts[17].disabled = true;
		Ipts[18].disabled = false;
	} else if (document.getElementsByName("Option")[1].checked == true) {
		Ipts[2].disabled = true;
		Ipts[3].disabled = true;
		Ipts[10].disabled = true;
		Ipts[11].disabled = true;
		Ipts[4].disabled = false;
		Ipts[5].disabled = false;
		Ipts[6].disabled = false;
		Ipts[7].disabled = false;
		Ipts[8].disabled = false;
		Ipts[9].disabled = false;
		Ipts[12].disabled = false;
		Ipts[13].disabled = false;
		Ipts[14].disabled = false;
		Ipts[15].disabled = false;
		Ipts[16].disabled = false;
		Ipts[17].disabled = false;
		Ipts[18].disabled = false;
	}
}

//Parse user inputs to feed into functions for downloading files
//If input= deg., min., sec- convert to dec. deg. first
var gList = null;
//Global list to be repaced by funct. output, so list can be returned
function GetInputs() {
	var InList = new Array();
	if (document.getElementsByName("Option")[0].checked == true) {
		MinLonHem = document.getElementsByTagName("input")[2].value[0];
		MinLon = document.getElementsByTagName("input")[2].value.substring(1);
		MaxLonHem = document.getElementsByTagName("input")[3].value[0];
		MaxLon = document.getElementsByTagName("input")[3].value.substring(1);
		MinLatHem = document.getElementsByTagName("input")[10].value[0];
		MinLat = document.getElementsByTagName("input")[10].value.substring(1);
		MaxLatHem = document.getElementsByTagName("input")[11].value[0];
		MaxLat = document.getElementsByTagName("input")[11].value.substring(1);
	} else if (document.getElementsByName("Option")[1].checked == true) {
		if (document.getElementsByTagName("input")[4].value.valueOf() < 0) {
			MinLonHem = 'W';
			MinDeglon = Math.abs(Math.round(document.getElementsByTagName("input")[4].value.valueOf() * 1000000.));
		} else {
			MinLonHem = 'E';
			MinDeglon = Math.round(document.getElementsByTagName("input")[4].value.valueOf() * 1000000.);
		}
		MinMinlon = Math.round(document.getElementsByTagName("input")[5].value.valueOf() * 1000000.);
		MinSeclon = Math.round(document.getElementsByTagName("input")[6].value.valueOf() * 1000000.);
		if (document.getElementsByTagName("input")[7].value.valueOf() < 0) {
			MaxLonHem = 'W';
			MaxDeglon = Math.abs(Math.round(document.getElementsByTagName("input")[7].value.valueOf() * 1000000.));
		} else {
			MaxLonHem = 'E';
			MaxDeglon = Math.round(document.getElementsByTagName("input")[7].value.valueOf() * 1000000.);
		}
		MaxMinlon = Math.round(document.getElementsByTagName("input")[8].value.valueOf() * 1000000.);
		MaxSeclon = Math.round(document.getElementsByTagName("input")[9].value.valueOf() * 1000000.);
		if (document.getElementsByTagName("input")[12].value.valueOf() < 0) {
			MinLatHem = 'S';
			MinDeglat = Math.abs(Math.round(document.getElementsByTagName("input")[12].value.valueOf() * 1000000.));
		} else {
			MinLatHem = 'N';
			MinDeglat = Math.round(document.getElementsByTagName("input")[12].value.valueOf() * 1000000.);
		}
		MinMinlat = Math.round(document.getElementsByTagName("input")[13].value.valueOf() * 1000000.);
		MinSeclat = Math.round(document.getElementsByTagName("input")[14].value.valueOf() * 1000000.);
		if (document.getElementsByTagName("input")[15].value.valueOf() < 0) {
			MaxLatHem = 'S';
			MaxDeglat = Math.abs(Math.round(document.getElementsByTagName("input")[15].value.valueOf() * 1000000.));
		} else {
			MaxLatHem = 'N';
			MaxDeglat = Math.round(document.getElementsByTagName("input")[15].value.valueOf() * 1000000.);
		}
		MaxMinlat = Math.round(document.getElementsByTagName("input")[16].value.valueOf() * 1000000.);
		MaxSeclat = Math.round(document.getElementsByTagName("input")[17].value.valueOf() * 1000000.);
		MinLon = Math.round(MinDeglon + (MinMinlon / 60.) + (MinSeclon / 3600.)) * (1 / 1000000);
		MaxLon = Math.round(MaxDeglon + (MaxMinlon / 60.) + (MaxSeclon / 3600.)) * (1 / 1000000);
		MinLat = Math.round(MinDeglat + (MinMinlat / 60.) + (MinSeclat / 3600.)) * (1 / 1000000);
		MaxLat = Math.round(MaxDeglat + (MaxMinlat / 60.) + (MaxSeclat / 3600.)) * (1 / 1000000);
	}
	InList.push(MinLat, MinLatHem, MaxLat, MaxLatHem, MinLon, MinLonHem, MaxLon, MaxLonHem);
	gList = InList;
	//Replace global list with output to return output list
}

//Use user inputs to identify 5 x 5 tiles of interest
function GetCoords(input, Hemi) {
	if (input.valueOf() <= 5) {//Special treatment for inputs between 0 and 5
		num1 = 0;
	} else {
		num1 = 5;
	}
	if (Hemi == 'S' || Hemi == 'W') {//Get LL coords based on hemi (e.g. W4.5 has LL= -5, E4.5 has LL= 0)
		pre = -1;
		num2 = 5;
	} else {
		pre = 1;
		num2 = 0;
	}
	Eqn = pre * ((Math.floor(input) - ((Math.floor(input) - num1) % 5)) + num2);
	//Obtain LL coordinate
	return (Eqn);
}

//Create list of lower-left lat or lon for tiles of interest
var globalArray = null;
//Global array to be repaced by funct. output, so array can be returned
function CreateList(maxl, minl, NegHemi, PosHemi) {
	var CoordList = new Array();
	if (Math.abs(maxl.valueOf() - minl.valueOf()) < 5) {//If user inputs are very close, only one tile needed
		CoordList.push(minl.valueOf());
	} else {//Otherwise, create list of needed tiles
		if (maxl.valueOf() < 0) {//If maximum coordinate is in positive hemisphere
			for (var i = maxl.valueOf(), l = minl.valueOf() + 5; i < l; i += 5) {
				CoordList.push(i);
			}
		} else {//If maximum coordinate is in negative hemisphere
			for (var i = minl.valueOf(), l = maxl.valueOf() + 5; i < l; i += 5) {
				CoordList.push(i);
			}
		}
	}
	for (var i = 0; i < CoordList.length; i++) {//List coords as in EarthEnv_DEM90 filenames
		if (CoordList[i] < 0) {
			CoordList[i] = NegHemi + (Math.abs(CoordList[i])).toString();
		} else {
			CoordList[i] = PosHemi + (CoordList[i]).toString();
		}
	}
	globalArray = CoordList;
	//Replace global array with output to return output array
}

//Convert user's desired tiles to filenaming scheme for EarthEnv_DEM90 tiles (e.g. XLatYLon)
var Files = null;
//Global list to be filled with desired tiles
function Convert(mnlt, LatminNS, mxlt, LatmaxNS, mnln, LonminEW, mxln, LonmaxEW) {
	Furl = "http://mirrors.iplantcollaborative.org/earthenv_dem_data/EarthEnv-DEM90/EarthEnv-DEM90_"
		var ListFiles = new Array();
	GetCoords(mnlt, LatminNS);
	minlat = Eqn;
	GetCoords(mxlt, LatmaxNS);
	maxlat = Eqn;
	CreateList(maxlat, minlat, 'S', 'N');
	LT = globalArray;
	for (var i = 0; i < LT.length; i++) {//Add 0's to match EarthEnv_DEM90 filenames
		if (LT[i].length == 2) {
			LT[i] = LT[i].substring(0, 1) + '0' + LT[i].substring(1);
		}
	}
	GetCoords(mnln, LonminEW);
	minlon = Eqn;
	GetCoords(mxln, LonmaxEW);
	maxlon = Eqn;
	CreateList(maxlon, minlon, 'W', 'E');
	LN = globalArray;
	for (var i = 0; i < LN.length; i++) {//Add 0's to match EarthEnv_DEM90 filenames
		if (LN[i].length == 2) {
			LN[i] = LN[i].substring(0, 1) + '00' + LN[i].substring(1);
		} else if (LN[i].length == 3) {
			LN[i] = LN[i].substring(0, 1) + '0' + LN[i].substring(1);
		}
	}
	for (var i = 0; i < LN.length; i++) {//Create filenames with LatLon
		for (var j = 0; j < LT.length; j++) {
			ListFiles.push(Furl + LT[j] + LN[i] + ".tar.gz");
		}
	}
	Files = ListFiles;
	//Create output of desired filenames
}

//Set iFrames for tile downloads (new iFrame created for every tile)
function makeFrame(url) {
	ifrm = document.createElement("IFRAME");
	ifrm.setAttribute("style", "display:none;");
	ifrm.setAttribute("src", url);
	//url= url of file to download
	ifrm.style.width = 0 + "px";
	ifrm.style.height = 0 + "px";
	document.body.appendChild(ifrm);
}

// Loop through file list, create iFrame, download tile
function NowGoGetThem() {
	GetInputs();
	Convert(gList[0], gList[1], gList[2], gList[3], gList[4], gList[5], gList[6], gList[7]);
	for ( i = 0; i < Files.length; i++) {
		makeFrame(Files[i]);
		if (Files.length > 1)
			window.setTimeout(function() {
				downloadFiles(Files.slice(1))
			}, 1000);
	}
}

/****
 * Code for clickable map section.
 ****/

//Define coordinates and matching filenames, create area map, get file when tile is clicked
ncols = 72
nrows = 28
equator_row = 16
primem_col = 36
csizepx = 10
cspan = 5

function getCoordString(row, col) {
	var cstr = '';
	var padstr2 = '00';
	var padstr3 = '000';

	if (row <= equator_row) {
		// Northern hemisphere.
		cstr = 'N';
		// Calculate the southern coordinate of the tile, zero-padding if needed.
		cstr += (padstr2 + ((equator_row - row) * cspan)).slice(-2);
	} else {
		cstr = 'S';
		cstr += (padstr2 + ((row - equator_row) * cspan)).slice(-2);
	}

	if (col < primem_col) {
		// Western hemisphere.
		cstr += 'W';
		// Calculate the western coordinate of the tile, zero-padding if needed.
		cstr += (padstr3 + ((primem_col - col) * cspan)).slice(-3);
	} else {
		cstr += 'E';
		cstr += (padstr3 + ((col - primem_col) * cspan)).slice(-3);
	}

	return cstr;
}

function generateMapDownloadAreas() {
	var xcoord, ycoord;

	for (var i = 0; i < nrows; i++) {
		for (var j = 0; j < ncols; j++) {
			xcoord = j * csizepx;
			ycoord = i * csizepx;

			FileName = 'http://mirrors.iplantcollaborative.org/earthenv_dem_data/EarthEnv-DEM90/EarthEnv-DEM90_' + getCoordString(i, j) + '.tar.gz'
			document.write('<area shape="rect" coords="' + xcoord + ',' + ycoord + ',' + (xcoord + csizepx - 1) + ',' + (ycoord + csizepx - 1) + '" href ="' + FileName + '" />')
			//alert(xcoord + ' ' + ycoord + ' ' + (xcoord + csizepx - 1) + ' ' + (ycoord + csizepx - 1));
		}
		//alert(j + ' ' + xcoord + ' ' + getCoordString(i,j));
	}
}

