$(document).ready(function(){
	$('#id').blur(function(){
		// 할일
		// 인풋태그의 내용 읽어오고
		var sid = $('#id').val();
		// 읽은 내용 h3태그에 넣어주고
		$('#txt').text(sid);
		// 상위태그(#dl) 보이게 하고
		$('#dl').stop().slideToggle();
		
	});
	
	$('#pw, #repw').keyup(function(){
		// 할일
		// 1. 데이터 읽고 변수에 담는다.
		var spw = $('#pw').val();
		var repw = $('#repw').val();
		// 2. 데이터를 비교한다.
		if(spw == repw) {
			// 3. 출력한다.
			$('#pwmsg').text('*** 비밀번호가 일치합니다. ***');
//			 태그의 스타일 속성을 변경 또는 읽는 함수 css()
			 $('#pwmsg').css('color', 'blue');
//			$('#pwmsg').addClass('w3-blue');
			 $('.repw').css('display', 'none');
		} else {
			$('.repw').css('display', '');
			$('#pwmsg').text('*** 비밀번호가 일치하지 않습니다. ***');
			$('#pwmsg').css('color', 'red');
			
		}
		
	});
	
	$('#btn1').mouseenter(function(){
		$('#btn1').removeClass('w3-button');
		$('#btn1').removeClass('w3-red');
		$('#btn1').css('background-color', 'orange');
	});
	$('#btn2').mouseenter(function(){
		$('#btn2').removeClass('w3-button');
		$('#btn2').removeClass('w3-blue');
		$('#btn2').css('background-color', 'aqua');
	});
	
	$('#btn1').mouseleave(function(){
		$('#btn1').addClass('w3-button');
		$('#btn1').addClass('w3-red');
	});
	$('#btn2').mouseleave(function(){
		$('#btn2').addClass('w3-button');
		$('#btn2').addClass('w3-blue');
	});
	
	// btn1 을 클릭하면 아이디가 id인 태그에
	// w3-input 클래스가 적용되어 있는지 확인하자.
	$('#btn1').click(function() {
		var bool =$('#id').hasClass('w3-input');
		alert('w3-input : ' + bool);
	});
	
	$('#btn2').click(function(){
//		location.href= 'day02.txt'; // 자바스크립트 처리 구문
//		$(location).attr('href', 'day02.txt'); // jquery 구문
		
		// 문제 ] 이 버튼이 클릭이 되면 아이디와 비밀 번호를
		// result1.html 페이지에 출력되게 하세요.
		
		// 할일
		// 1. 데이터 읽고
		 var sid = $('#id').val();
		 var spw = $('#pw').val();
		// 2. 데이터 채워주고
		 $('#fid').val(sid);
		 $('#fpw').val(spw);
		// 3. 폼태그 전송하고
		 $('#frm').submit();
		
	});
	
});

	// 문제 ] 버튼에 마우스가 올려지면 
	// 버튼의 색상을 red -> orange , blue -> aqua 변경시키는 이벤트를 추가하세요.
	// 단, w3.css 클래스는 사용하지 않는것으로 한다.