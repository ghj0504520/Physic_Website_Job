$(document).ready(function() {
	
	/*======================================================================*/
	
	
	/*改變art的網址*/
	var videoART="https://www.youtube.com/embed/BCkHnvDGWOY";
	var videoArt=videoART+"?enablejsapi=1";
	/*改變engineering的網址*/
	var videoENG="https://www.youtube.com/embed/II1g92jFItE";
	var videoEng=videoENG+"?enablejsapi=1";
	/*改變technology的網址*/
	var videoTEC="";
	var  videoTec=videoTEC+"?enablejsapi=1";
	/*改變science的網址*/
	var videoSCI="";
	var videoSci=videoSCI+"?enablejsapi=1";
	/*改變math的網址*/
	var videoMATH="";
	var videoMath=videoMATH+"?enablejsapi=1";


	/*======================================================================*/
	
	
	/*改變下方資料背景顏色*/
	$('.inner-html').css("background-color", "white");
	
	/*=======================================================================*/
	
	$('#art_btn').click();
	$('#iframeArt').attr('src', videoArt+"&autoplay=1");

	if(videoArt!="?enablejsapi=1")
	{
 		$("#collapseArt1").on("show.bs.collapse", function () {
  
 		$('#iframeArt')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
 		});
  
 		$("#collapseArt1").on("hide.bs.collapse", function () {
 			$('#iframeArt')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 		$("#modalArt").on('show.bs.modal', function () {
 			$('#iframeArt').attr('src', videoArt + "&autoplay=1");
 		});
 		$("#modalArt").on('hide.bs.modal', function () {
 			$('#iframeArt').attr('src', videoArt + "&autoplay=0");
 		});
 	}
	else
	{
 		$("#collapseArt1").remove();
 	}



	if(videoEng!="?enablejsapi=1")
	{
 		$("#collapseEng1").on("show.bs.collapse", function () {
  
 			$('#iframeEng')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
 		});
  
 
 		$("#collapseEng1").on("hide.bs.collapse", function () {
 			$('#iframeEng')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 
 		$("#modalEngineering").on('show.bs.modal', function () {
 			$('#iframeEng').attr('src', videoEng + "&autoplay=1");
 		});
 		$("#modalEngineering").on('hide.bs.modal', function () {
 			$('#iframeEng').attr('src', videoEng + "&autoplay=0");
 		});
 	}
 	else
	{
 		$("#collapseEng1").remove();
 	}


	if(videoTec!="?enablejsapi=1")
	{
 		$("#collapseTec1").on("show.bs.collapse", function () {
		$('#iframeTec')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
		});
  
		$("#collapseTec1").on("hide.bs.collapse", function () {
 			$('#iframeTec')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 
 		$("#modalTechnology").on('show.bs.modal', function () {
 			$('#iframeTec').attr('src', videoTec + "&autoplay=1");
 		});
 		$("#modalTechnology").on('hide.bs.modal', function () {
 			$('#iframeTec').attr('src', videoTec + "&autoplay=0");
 		});
 	}
 	else
	{
 		$("#collapseTec1").remove();
 	}



	if(videoSci!="?enablejsapi=1")
	{
 		$("#collapseSci1").on("show.bs.collapse", function () {
  
 
 			$('#iframeSci')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		});
  
 		$("#collapseSci1").on("hide.bs.collapse", function () {
 			$('#iframeSci')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 		$("#modalScience").on('show.bs.modal', function () {
 			$('#iframeSci').attr('src', videoSci + "&autoplay=1");
 		});
 		$("#modalScience").on('hide.bs.modal', function () {
 			$('#iframeSci').attr('src', videoSci + "&autoplay=0");
 		});
 	}
 	else{
 		$("#collapseSci1").remove();
 	}




	if(videoMath!="?enablejsapi=1")
	{
 		$("#collapseMath1").on("show.bs.collapse", function () {
  
 
 			$('#iframeMath')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 
 		$("#collapseMath1").on("hide.bs.collapse", function () {
 			$('#iframeMath')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
 		});
  
 
 		$("#modalMath").on('show.bs.modal', function () {
 			$('#iframeMath').attr('src', videoMath + "&autoplay=1");
 		});
 		$("#modalMath").on('hide.bs.modal', function () {
 			$('#iframeMath').attr('src', videoMath + "&autoplay=0");
 		});
 	}
 	else
	{
 		$("#collapseMath1").remove();
 	}
	
	 
	 
	/*Screen resize============================================*/
	$(window).resize(function() {

		if(screen.height>=800)
		{
			$('#iframeArt')[0].setAttribute("height", 400);
			$('#iframeEng')[0].setAttribute("height", 400);
			$('#iframeTec')[0].setAttribute("height", 400);
			$('#iframeSci')[0].setAttribute("height", 400);
			$('#iframeMath')[0].setAttribute("height", 400);
			
		}
		else if(screen.height<800 && screen.height>=650)
		{
			$('#iframeArt')[0].setAttribute("height", 300);
			$('#iframeEng')[0].setAttribute("height", 300);
			$('#iframeTec')[0].setAttribute("height", 300);
			$('#iframeSci')[0].setAttribute("height", 300);
			$('#iframeMath')[0].setAttribute("height", 300);

		}
		else if(screen.height<650)
		{
			$('#iframeArt')[0].setAttribute("height", 200);
			$('#iframeEng')[0].setAttribute("height", 200);
			$('#iframeTec')[0].setAttribute("height", 200);
			$('#iframeSci')[0].setAttribute("height", 200);
			$('#iframeMath')[0].setAttribute("height", 200);

		}
			
	});
	
});