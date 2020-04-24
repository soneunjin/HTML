$(document).ready(function(){
	$('div div').addClass('w3-col m2 w3-button');
	
	$('.w3-pink').addClass('w3-card-4 w3-margin-left w3-margin-right');
	$('.w3-blue').addClass('w3-hover-aqua');
	
	$('.w3-button').click(function(){
		alert($(this).attr('id'));
		$(this).toggleClass('w3-padding-64');
	});
	
});