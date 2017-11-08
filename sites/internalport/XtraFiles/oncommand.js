if (document.all)    {netscape=0;ie=1;netscape6=0;fShow="visible";fHide="hidden";}
if (document.layers) {netscape=1;ie=0;fShow="show";   fHide="hide";}
if (document.getElementById&&!document.all) {netscape6=1;netscape=0;ie=0}

function writePlayingThisMonth(){
var HTMLStr = "";
//alert(HTMLStr);
	if (netscape){
		HTMLStr += "<ilayer id=testplay visibility=show>";
		HTMLStr += "<layer id=menuplayingthismonth visibility=show top='112px' left='347px' WIDTH='133px' >";
			HTMLStr += "&nbsp;&nbsp;<a href='action.htm'><font color='#FFFFFF' size='2'>Action</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='comedy1.htm'><font color='#FFFFFF' size='2'>Comedy</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='Drama.htm'><font color='#FFFFFF' size='2'>Drama</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='kids.htm'><font color='#FFFFFF' size='2'>Kids&Family</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<font color='#FFFFFF' size='2'>&nbsp;&nbsp;Best of TV";
		HTMLStr += "<BR> ";
		HTMLStr += "<font color='#FFFFFF' size='2'>&nbsp;&nbsp;Adults";

		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div id=testplay style='background:#1473B8; LEFT: 347px; WIDTH: 133px;TOP : 112px; POSITION: absolute;'>";
		HTMLStr += "<SPAN id=menuplayingthismonth style='DISPLAY: none'><p align='left'>"
       		HTMLStr += "&nbsp;&nbsp;<a href='action.htm'><font color='#FFFFFF' size='2'>Action</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='comedy1.htm'><font color='#FFFFFF' size='2'>Comedy</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='Drama.htm'><font color='#FFFFFF' size='2'>Drama</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='kids.htm'><font color='#FFFFFF' size='2'>Kids&Family</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<font color='#FFFFFF' size='2'>&nbsp;&nbsp;Best of TV";
		HTMLStr += "<BR> ";
		HTMLStr += "<font color='#FFFFFF' size='2'>&nbsp;&nbsp;Adults";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";
	}	
//alert(HTMLStr);
	document.write(HTMLStr);
}	

function writeVidOpsForms(){
var HTMLStr = "";
//alert(HTMLStr);
	if (netscape){
		HTMLStr += "<ilayer id=testforms visibility=show>";
		HTMLStr += "<layer id=menuvidopsforms visibility=show top='112px' left='481px' WIDTH='94px'>";
			HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>1</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>2</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>3</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>4</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<font color='#FFFFFF' size='2'>5";
		HTMLStr += "<BR> ";
		HTMLStr += "<font color='#FFFFFF' size='2'>6";

		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div id=testforms style='background:#1473B8; LEFT: 481px; WIDTH: 94px;TOP : 112px; POSITION: absolute;'>";
		HTMLStr += "<SPAN id=menuvidopsforms style='DISPLAY: none'><p align='left'>"
       		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>1</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>2</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>3</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>4</a>";
		HTMLStr += "<BR>";
		HTMLStr += "<font color='#FFFFFF' size='2'>5";
		HTMLStr += "<BR> ";
		HTMLStr += "<font color='#FFFFFF' size='2'>6";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";

	}	
//alert(HTMLStr);
	document.write(HTMLStr);
}	
<!-----------------------------------------------------start ->
function writeOncommandLinks(){
var HTMLStr = "";
//alert(HTMLStr);
	if (netscape){
		HTMLStr += "<ilayer id=testoncommandlinks visibility=show>";
		HTMLStr += "<layer id=menuoncommandlinks visibility=show top='112px' left='481px' WIDTH='94px'>";
			HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>1</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>2</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>3</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>4</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<font color='#FFFFFF' size='2'>5";
		HTMLStr += "<BR> ";
		HTMLStr += "&nbsp;&nbsp;<font color='#FFFFFF' size='2'>6";
		HTMLStr += "</layer>";
		HTMLStr += "</ilayer>";
	} else {
		HTMLStr += "<div id=testoncommandlinks style='background:#1473B8; LEFT: 576px; WIDTH: 134px;TOP : 112px; POSITION: absolute;'>";
		HTMLStr += "<SPAN id=menuoncommandlinks style='DISPLAY: none'><p align='left'>"
       		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>1</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>2</a>";
      		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>3</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<a href='#'><font color='#FFFFFF' size='2'>4</a>";
		HTMLStr += "<BR>";
		HTMLStr += "&nbsp;&nbsp;<font color='#FFFFFF' size='2'>5";
		HTMLStr += "<BR> ";
		HTMLStr += "&nbsp;&nbsp;<font color='#FFFFFF' size='2'>6";
		HTMLStr += "</SPAN>";
		HTMLStr += "</div>";
	}	
//alert(HTMLStr);
	document.write(HTMLStr);
}	
<!--------------------------------------------------------------------------end ->

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

function showhide(what){

if (netscape){
	if(document.layers["test"].visibility == 'show'){
		document.layers["test"].visibility = 'hidden';
	}else{
		document.layers["test"].visibility = 'show';
	}
}else{
	if (what.style.display=='none'){
		what.style.display='';
	}
	else{
		what.style.display='none'
	}
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



