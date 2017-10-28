
var check = [];
var num_image = 30;/*Number of picture id*/
var total_image = 66;/*Total picures:66*/

for(var i=0;i<num_image;i++)
{
	check[i] = 0;
}
	

setInterval(function(){
	var num;
	num = Math.floor(Math.random()*num_image);
	/*while(check[num]==1)
		num = Math.floor(Math.random()*num_image);*/
	var length = 150+Math.floor(Math.random()*151);
	
	var name='pictures/pic';
	if(check[num]!=1)
	{
		$('#pic'+(num+1)).find('img').attr('src',name+(Math.floor(Math.random()*total_image))+'.jpg');
		$('#pic'+(num+1)).find('img').attr('height',length+'px');
		$('#pic'+(num+1)).find('img').attr('width',length+'px');
		$('#pic'+(num+1)).addClass("fade-in");
		check[num] = 1;
	}

}, 800);

setInterval(function(){
	
	for(var i=0;i<num_image;i++)
	{
		/*If checked and animation has been over, then reset*/
		if(check[i]==1 && $('#pic'+(i+1)).css("opacity")==0)
		{
			$('#pic'+(i+1)).removeClass("fade-in");
			check[i] = 0;
		}
				
	}

}, 5000);