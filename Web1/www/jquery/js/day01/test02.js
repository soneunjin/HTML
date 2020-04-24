$(document).ready(function(){
	$('#btn1').click(function(){
		$('[href="a.jpg"]').addClass('w3-col w3-pink w3-border w3-padding w3-center');
		var clslist = $('[href="a.jpg"]').attr('class');
		alert(clslist);
	});
	
	$('#btn2').click(function(){
		$('[href="b.jpg"]').addClass('w3-col w3-yellow w3-border w3-padding-32 w3-center');
		var clslist1 = $('[href="b.jpg"]').attr('class');
		alert(clslist1);
	});
});