


$(document).ready(function() {

	/*======================================================================*/
	

	/*改變art的網址*/
	/*使用youtube->分享->嵌入*/
	var videoART;
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
	/*改變other的網址*/
	var videoOTHER="";
	var videoOther=videoOther+"?enablejsapi=1";

	var path = "html/";
	/*
	var art_html = "art.htm";
	var eng_html = "engineering.htm";
	var tec_html = "technology.htm";
	var sci_html = "science.htm";
	var math_html = "math.htm";
	*/
	
	/*設定底下的html長度*/
	/*長度大小:不要讓內部的html有右邊的拉把(bar)即可*/
	var art_html_height = 900; 
	var eng_html_height = 1100;
	var tec_html_height = 2100;
	var sci_html_height = 2700;
	var math_html_height = 2900;
	var oth_html_height = 7200;
	
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
	
	
	
	/*$("#m_art_btn").click(function(){

		window.location.href = "test.html";
		//alert("zz");
		
		
		var parent = document.getElementById("inner-html").parent();
		//var parent = $('#inner-html').parent();
		var newemb = "<embed src='html/art.htm' id='inner-html'>";
		$('#inner-html').remove();
		parent.append(newemb);
		$("#inner-html").attr("height",art_html_height);
		$("#inner-html").attr("width","100%"); 
			

	});*/
	
	//videoMove();
	

	$("#art_btn").click(function(){
		
		videoArt = $("#for_changing_video").attr("href");
		videoArt = videoArt +"?enablejsapi=1";
		
		//alert(videoArt);
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		
		$('#totalVideo').remove();
		if(videoART!="")
		{
			parent2.append(newframe);

			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoArt + "&autoplay=1");
		}
		
		
		var parent = $('#inner-html').parent();
		var newemb = "<embed src='data/art.htm' id='inner-html'>";
		$('#inner-html').remove();
		parent.append(newemb);
		$("#inner-html").attr("height",art_html_height);
		$("#inner-html").addClass("inner-html"); 
		
		
		
	});
		
	
	$("#eng_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		
		if(videoENG!="")
		{
			parent2.append(newframe);
			/*$("#totalVideo").attr("height","600");
			$("#totalVideo").attr("width","60%");*/
			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoEng + "&autoplay=1");
	
		}
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='data/engineering.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",eng_html_height);
		$("#inner-html").addClass("inner-html"); 
	});
	$("#tec_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		if(videoTEC!="")
		{
			parent2.append(newframe);
			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoTec + "&autoplay=1");
		}
		
		/*$("#totalVideo").attr("height","0");
		$("#totalVideo").attr("width","0");*/
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='data/technology.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",tec_html_height);
		$("#inner-html").addClass("inner-html"); 
	});
	$("#sci_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		
		if(videoSCI!="")
		{
			parent2.append(newframe);
			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoSci + "&autoplay=1");
		}
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='data/science.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",sci_html_height);
		$("#inner-html").addClass("inner-html"); 
	});
	$("#math_btn").click(function(){
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		
		if(videoMATH!="")
		{
			parent2.append(newframe);

			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoMath + "&autoplay=1");
		}
		
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='data/math.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",math_html_height);
		$("#inner-html").addClass("inner-html"); 
	});
	$("#oth_btn").click(function(){
		
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		$('#totalVideo').remove();
		
		if(videoOTHER!="")
		{
			parent2.append(newframe);
		
			$("#totalVideo").addClass("video-style");
			$('#totalVideo').attr('src', videoOther + "&autoplay=1");
		}
		
		
		var parent = $('#inner-html').parent();
		var newElement = "<embed src='data/other.htm' id='inner-html'>";
	
		$('#inner-html').remove();
		parent.append(newElement);
		
		$("#inner-html").attr("height",oth_html_height);
		$("#inner-html").addClass("inner-html"); 
	});
	/*=======================================================================*/
	

	/*Screen resize============================================*/
	/*$(window).resize(function() {

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

	});*/
	
	
	//elementMove();
});
