$(document).ready(function(){
	function f01(){
		$('#box').animate({'left':'+=250px', 'top':'+=500px'}, 2000);
		$('#box1').animate({'opacity':'0'}, 2000);
		$('#box').animate({'left':'+=250px', 'top':'-=500px'}, 2000);
		$('#box1').animate({'opacity':'1'}, 2000);
		$('#box').animate({'left':'-=500px'}, 2000);
	}
	
	setInterval(f01,0);
});