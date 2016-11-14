$(document).ready(function() {

	/*======================================================================*/


	/*����art�����}*/
	var videoART="https://www.youtube.com/embed/BCkHnvDGWOY";
	var videoArt=videoART+"?enablejsapi=1";
	/*����engineering�����}*/
	var videoENG="https://www.youtube.com/embed/II1g92jFItE";
	var videoEng=videoENG+"?enablejsapi=1";
	/*����technology�����}*/
	var videoTEC="";
	var  videoTec=videoTEC+"?enablejsapi=1";
	/*����science�����}*/
	var videoSCI="";
	var videoSci=videoSCI+"?enablejsapi=1";
	/*����math�����}*/
	var videoMATH="";
	var videoMath=videoMATH+"?enablejsapi=1";


	/*======================================================================*/


	/*���ܤU���ƭI���C��*/
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
	// ���o�� top ��
	var $totalVideo= $('#totalVideo'),
		_top = $totalVideo.offset().top;

	// ��������b���ʮ�
	var $win = $(window).scroll(function(){
		// �p�G�{�b�� scrollTop �j��쥻�� top+300 ��
		if($win.scrollTop() >= _top+300){
			$('#totalVideo')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		}
	});
}

var elementMove=function () {

	// ���o�� top ��
	var $allBTN= $('#allBTN'),
		_top = $allBTN.offset().top;

	// ��������b���ʮ�
	var $win = $(window).scroll(function(){
		// �p�G�{�b�� scrollTop �j��쥻�� top ��
		if($win.scrollTop() >= _top){
			// �p�G�y�Шt�Τ��O fixed ����
			if($allBTN.css('position')!='fixed'){
				// �]�w�y�Шt�ά� fixed
				$allBTN.css({
					position: 'fixed',
					top:15
				});
			}
		}else{
			// �٭�y�Шt�ά� absolute
			$allBTN.css({
				position: 'absolute',
				top:'15%'
			});
		}
	});
}