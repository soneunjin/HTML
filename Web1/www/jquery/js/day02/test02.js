$(document).ready(function(){
	$('#btn1').click(function(){
		$('#d1').append('<h3 class="w3-col w3-purple w3-padding mr0 w3-border">Append Test');
		$('h3').dblclick(rmv);
	});
	
	$('#btn2').click(function(){
		$('#d1').prepend('<h3 class="w3-col w3-amber w3-padding mr0 w3-border">Prepend Test Top');
		$('h3').dblclick(rmv);
	});
	
	$('#btn3').click(function(abc){
		reClass();
	});
	
	
	function reClass(){
		$('h3').removeClass('w3-purple');
		$('h3').removeClass('w3-amber');
		$('h3').addClass('w3-lime');
	}
	
	function rmv(){
		$(this).remove();
	}
});
