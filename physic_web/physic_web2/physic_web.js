
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
	var videoTec=videoTEC+"?enablejsapi=1";
	/*改變science的網址*/
	var videoSCI="";
	var videoSci=videoSCI+"?enablejsapi=1";
	/*改變math的網址*/
	var videoMATH="";
	var videoMath=videoMATH+"?enablejsapi=1";

	var path = "html/";
	/*
	var art_html = "art.htm";
	var eng_html = "engineering.htm";
	var tec_html = "technology.htm";
	var sci_html = "science.htm";
	var math_html = "math.htm";
	*/
	
	/*設定底下的html長度*/
	var art_html_height = 500;
	var eng_html_height = 700;
	var tec_html_height = 1500;
	var sci_html_height = 2000;
	var math_html_height = 2500;
	var oth_html_height = 4000;
	
	/*======================================================================*/
	
	
	

	/*改變下方資料背景顏色*/
	$('.inner-html').css("background-color", "white");


	/*=======================================================================*/
	/*video function*/
	//$('#totalVideo').attr('src', videoEng + "&autoplay=1");
	//videoMove();
	/*=======================================================================*/
	/*Button function*/
	
	/*function reload_html(html,height){
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/"+htm+"' id"+"='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",height);
		$("#inner-html").attr("width","100%");
		
	}
	$("#art_btn").click(reload_html('art.htm',art_html_height));*/
	
	
	
	$("#m_art_btn").click(function(){

		window.location.href = "test.html";
		//alert("zz");
		
		
		var parent = document.getElementById("inner-html").parent();
		//var parent = $('#inner-html').parent();
		var newemb = "<embed src='html/art.htm' id='inner-html'>";
		$('#inner-html').remove();
		parent.append(newemb);
		$("#inner-html").attr("height",art_html_height);
		$("#inner-html").attr("width","100%"); 
			

	});
	
	//videoMove();
	
	$("#art_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","600");
		$("#totalVideo").attr("width","60%");
		$('#totalVideo').attr('src', videoArt + "&autoplay=1");
		
		
		
		var parent = $('#inner-html').parent();
		var newemb = "<embed src='html/art.htm' id='inner-html'>";
		$('#inner-html').remove();
		parent.append(newemb);
		$("#inner-html").attr("height",art_html_height);
		$("#inner-html").attr("width","100%"); 
		
		
		
	});
	$("#eng_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='https://www.youtube.com/embed/II1g92jFItE' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","600");
		$("#totalVideo").attr("width","60%");
		$('#totalVideo').attr('src', videoEng + "&autoplay=1");
	
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/engineering.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",eng_html_height);
		$("#inner-html").attr("width","100%");
	});
	$("#tec_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","0");
		$("#totalVideo").attr("width","0");
		
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/technology.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",tec_html_height);
		$("#inner-html").attr("width","100%");
	});
	$("#sci_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","0");
		$("#totalVideo").attr("width","0");
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/science.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",sci_html_height);
		$("#inner-html").attr("width","100%");
	});
	$("#math_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","0");
		$("#totalVideo").attr("width","0");
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/math.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",math_html_height);
		$("#inner-html").attr("width","100%");
	});
	$("#oth_btn").click(function(){
		
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		parent2.append(newframe);
		$("#totalVideo").attr("height","0");
		$("#totalVideo").attr("width","0");
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='html/other.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",oth_html_height);
		$("#inner-html").attr("width","100%");
	});
	/*=======================================================================*/
	

	/*Screen resize============================================*/
	$(window).resize(function() {

		if(screen.height>=800)
		{
			$('#iframeArt').attr("height", 400);
			$('#iframeEng').attr("height", 400);
			$('#iframeTec').attr("height", 400);
			$('#iframeSci').attr("height", 400);
			$('#iframeMath').attr("height", 400);

		}
		else if(screen.height<800 && screen.height>=650)
		{
			$('#iframeArt').attr("height", 300);
			$('#iframeEng').attr("height", 300);
			$('#iframeTec').attr("height", 300);
			$('#iframeSci').attr("height", 300);
			$('#iframeMath').attr("height", 300);

		}
		else if(screen.height<650)
		{
			$('#iframeArt').attr("height", 200);
			$('#iframeEng').attr("height", 200);
			$('#iframeTec').attr("height", 200);
			$('#iframeSci').attr("height", 200);
			$('#iframeMath').attr("height", 200);

		}

	});
	
	
	//elementMove();
});
