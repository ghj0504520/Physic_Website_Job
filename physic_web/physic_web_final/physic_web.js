


$(document).ready(function() {

	/*=========================使用者可更改部分開始=============================*/
	
	/*
	使用youtube->分享->嵌入(裡面的src="http....")
	改變art的網址
	*/
	var videoART1="https://www.youtube.com/embed/oA1LqxAUyYc";
	var	videoART2="https://www.youtube.com/embed/BCkHnvDGWOY";
	var videoART3="https://www.youtube.com/embed/aHmuLioUUcQ";
	/*改link的名字*/
	var name1="多人花式跳傘";
	var name2="飛鼠裝滑翔運動";
	var name3="【開創歷史】跳傘好手不用降傘 從2.5萬呎高空成功跳落安全網";
	
	var videoArt1=videoART1+"?enablejsapi=1";
	var videoArt2=videoART2+"?enablejsapi=1";
	var videoArt3=videoART3+"?enablejsapi=1";
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


	
	/*設定底下的pdf長度*/
	/*長度大小:不要讓內部的pdf有右邊的拉把(scroll bar)即可*/
	var art_html_height = 900; 
	var eng_html_height = 1300;
	var tec_html_height = 2400;
	var sci_html_height = 3500;
	var math_html_height = 4000;
	var oth_html_height = 16000;
	
	
	/*=========================使用者更改部分結束==================================*/
	
	
	

	
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
	//$( "#art_btn" ).trigger( "click" );
	/*if(screen.width<1366 && screen.width>600)
		$('.inner-html').attr('height','400vw');*/
	
	$("#link1").click(function(){
		$("#for_changing_video").attr("href", videoArt1);
		$("#art_btn" ).trigger( "click");
	});
	$("#link2").click(function(){
		$("#for_changing_video").attr("href", videoArt2);
		$("#art_btn" ).trigger( "click");
	});
	$("#link3").click(function(){
		$("#for_changing_video").attr("href", videoArt3);
		$("#art_btn" ).trigger( "click");
	});
	
	$('a#link1').text(name1);
	$('a#link2').text(name2);
	$('a#link3').text(name3);
	
	$("#art_btn").click(function(){
		
		var videoArt = "";
		videoArt = $("#for_changing_video").attr("href");
		//videoArt = videoArt +"?enablejsapi=1";
		
		//alert(videoArt);
		
		var parent2 = $('#totalVideo').parent();
		var newframe = "<iframe id='totalVideo' src='' frameborder=0 allowfullscreen></iframe>";
		
		$('#totalVideo').remove();
		if(videoArt!="")
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
		var newElement = "<embed src='../heading_pdf/engineering.pdf' id='inner-html'>";
	
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
		var newElement = "<embed src='../heading_pdf/technology.pdf' id='inner-html'>";
	
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
		var newElement = "<embed src='../heading_pdf/science.pdf' id='inner-html'>";
	
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
		var newElement = "<embed src='../heading_pdf/math.pdf' id='inner-html'>";
	
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
		var newElement = "<embed src='../heading_pdf/other.pdf' id='inner-html'>";
	
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
