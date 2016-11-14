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
	/*video function*/
	$('#totalVideo').attr('src', videoEng + "&autoplay=1");
	videoMove();




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

	elementMove();
});

var videoMove=function () {
	// 取得其 top 值
	var $totalVideo= $('#totalVideo'),
		_top = $totalVideo.offset().top;

	// 當網頁捲軸捲動時
	var $win = $(window).scroll(function(){
		// 如果現在的 scrollTop 大於原本的 top+300 時
		if($win.scrollTop() >= _top+300){
			$('#totalVideo')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		}
	});
}

var elementMove=function () {

	// 取得其 top 值
	var $allBTN= $('#allBTN'),
		_top = $allBTN.offset().top;

	// 當網頁捲軸捲動時
	var $win = $(window).scroll(function(){
		// 如果現在的 scrollTop 大於原本的 top 時
		if($win.scrollTop() >= _top){
			// 如果座標系統不是 fixed 的話
			if($allBTN.css('position')!='fixed'){
				// 設定座標系統為 fixed
				$allBTN.css({
					position: 'fixed',
					top:15
				});
			}
		}else{
			// 還原座標系統為 absolute
			$allBTN.css({
				position: 'absolute',
				top:'15%'
			});
		}
	});
}