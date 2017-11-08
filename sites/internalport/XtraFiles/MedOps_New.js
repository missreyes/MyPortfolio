if (document.all)    {netscape=0;ie=1;netscape6=0;fShow="visible";fHide="hidden";}
if (document.layers) {netscape=1;ie=0;fShow="show";   fHide="hide";}
if (document.getElementById&&!document.all) {netscape6=1;netscape=0;ie=0}

function writeSatellite(){
var HTMLStr = "";
	if (netscape){
		HTMLStr += "<ilayer id=testjsspansatellite visibility=show>";
		HTMLStr += "<layer id=jsspansatellite visibility=show top='110px' left='13px' WIDTH='123px' >";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>1</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>2</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>3</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>4</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>5</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>6</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>7</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>8</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<BR>";
		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div style='background:#595959; LEFT: 13px; WIDTH: 123px;TOP : 110px; POSITION: absolute;'>";
		HTMLStr += "<SPAN onmouseover=showMenu1(jsspansatellite) id=jsspansatellite style='DISPLAY: none'><p align='left'>"
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Site list</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Master Lineup</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Menu Config Tbl</a>";
		HTMLStr += "<BR>";
       		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Catcher Down List</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Transmission Time</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Wildcard Definition</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "<a href=''><font color='#FFFFFF' size='2'>Procedures</a>";
		HTMLStr += "<BR>";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";
	}	
	document.write(HTMLStr);
}	

function writeBb(){
var HTMLStr = "";
	if (netscape){
		HTMLStr += "<ilayer id=testjsspanbb visibility=show>";
		HTMLStr += "<layer id=jsspanbb visibility=show top='150px' left='13px' WIDTH='123px' >";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Year Calendar</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href='MedOpsFiles/Dec%202005%20Master.xls'><font color='#000000' size='2'>Master Lineup</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>PDS Version</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Menu Pkg List</a>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Backgrounds</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div style='background:#595959; LEFT: 13px; WIDTH: 123px; TOP : 150px; POSITION: absolute;'>";
		HTMLStr += "<SPAN onmouseover=showMenu1(jsspanbb) id=jsspanbb style='DISPLAY: none'><p align='left'>"
		HTMLStr += "&nbsp;<a href='MedOpsFiles/Dec%202005%20Master.xls'><font color='#FFFFFF' size='2'>Master</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>PDS Version</a>";
		HTMLStr += "<BR>";
       		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Menu Pkg list</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Backgrounds </a>";
      		HTMLStr += "<BR>";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";
	}	
	document.write(HTMLStr);
}	

function writeInternational(){
var HTMLStr = "";
	if (netscape){
		HTMLStr += "<ilayer id=testjsspaninternational visibility=show>";
		HTMLStr += "<layer id=jsspaninternational visibility=show top='126px' left='13px' WIDTH='170px'>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#000000' size='2'>Mexico</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Canada</a>";
		HTMLStr += "<BR>";
		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div  style='background:#595959; LEFT: 13px; WIDTH: 123px;TOP : 183px; POSITION: absolute;'>";
		HTMLStr += "<SPAN onmouseover=showMenu1(jsspaninternational) id=jsspaninternational style='DISPLAY: none'><p align='left'>"
       		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Mexico</a><BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Canada</a><BR>";
		HTMLStr += "<BR>";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";

	}	
	document.write(HTMLStr);
}	

function writeResources(){
var HTMLStr = "";
	if (netscape){
		HTMLStr += "<ilayer id=testjsspanresources visibility=show>";
		HTMLStr += "<layer id=jsspanresources visibility=show top='220px' left='13px' WIDTH='123px'>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'>Call Center Contact list</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'></a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'></a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'></a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;<a href=''><font color='#FFFFFF' size='2'></a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;&nbsp;";
		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div style='background:#595959; LEFT: 13px; WIDTH: 123px;TOP : 222px; POSITION: absolute;'>";
		HTMLStr += "<SPAN id=jsspanresources style='DISPLAY: none'><p align='left'>"
       		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Call Center contacts</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Motion Control Spec.</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Main Menu Map</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Help Menu Map</a>";
		HTMLStr += "<BR>"
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>2257 Compliance</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;<a href=''><font color='#FFFFFF' size='2'>Karin's Tech List</a>";
		HTMLStr += "<BR>";
		
						HTMLStr += "</SPAN>";
		HTMLStr += "</div>";
	}	
	document.write(HTMLStr);
}	

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

function showMenu1(what){
	if (netscape){
		document.layers["test"+what.id].visibility = 'show';
	}else{
		what.style.display='';
	}
}


function hideMenue1(what){
//alert("what:::"+what.id);
	if (netscape){
		document.layers["test"+what.id].visibility = 'hidden';
	}else{
		what.style.display='none';
	}
}


var preloadFlag = false;
function preloadImages() {
 if (document.images) {
  logo1_01_up = newImage("logo1_01-up.gif");
  preloadFlag = true;
 }
 changeImages('logo1_01', 'logo1_01-up.gif');
}

function ShowState_ca() {
	changeImages('logo1_01', 'logo1_01_up') ;
}



