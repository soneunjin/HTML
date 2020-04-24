document.getElementById('file').onchange = function(evt){
//	alert(evt);
	var val = this.value;
	
	
	// 문자열로 해결하는 방법
	var val1= val.slice(val.indexOf(".")).toLowerCase();
	
	if(val1 !=".jpg" && val1 !=".jpeg" && val1 !=".png" && val1 !=".gif"){
		alert("썸네일 이미지는 파일( jpg,jpeg,png,gif)만 등록가능합니다");
		
		return;
	}
	
	
	// 정규표현식으로 해결하는 방법
	// 후방탐색으로 해결
	var reg = /^.+(?<=\.(jpg|jpeg|png|gif))$/i;
	var bool = reg.test(val);
	var el = document.getElementById('imgfr');
	if(bool){
		var bool2 = el.classList.contains('dnone');
		if(bool2){
			el.classList.remove('dnone');
		} else {
			el.classList.add('dnone');
		}
	} else {
		el.classList.add('dnone');
		this.value = '';
		return;
	}
	
//	alert(val);
//	location.href = 'Test01.html?file=' + val;
	
	// 파일을 선택하는 경우 파일태그의 value 값은 거짓경로와 파일이름이 입력이되고
	// 파일의 내용은 URL객체에 해당파일을 선택하는 순간 저장이 된다.
	// 따라서 파일을 사용하려면 URL객체에서 꺼내서 사용해야 한다.

/*
	문제]
		선택한 파일이 jpg, jpeg, png, gif 인 파일만 입력이 되게 처리하세요.
 */
	

	// 파일 가져오고
	var vfile = URL.createObjectURL(evt.target.files[0]);
	// img 태그 src 속성 처리
	document.getElementById('img1').setAttribute('src', vfile);
	// 태그의 클래스 변경하고
	document.getElementById('imgfr').classList.remove('dnone');
}


document.getElementById('mgen').onclick = function(){
	if(mgen.checked){
		document.getElementById('img2').classList.remove('dnone');
		document.getElementById('img3').classList.remove('dnone');
		document.getElementById('img4').classList.remove('dnone');
		document.getElementById('img5').classList.add('dnone');
		document.getElementById('img6').classList.add('dnone');
		document.getElementById('img7').classList.add('dnone');
		
		} 
		
	}		
		

	document.getElementById('wgen').onclick = function(){
		if(wgen.checked){
	document.getElementById('img2').classList.add('dnone');
	document.getElementById('img3').classList.add('dnone');
	document.getElementById('img4').classList.add('dnone');
	document.getElementById('img5').classList.remove('dnone');
	document.getElementById('img6').classList.remove('dnone');
	document.getElementById('img7').classList.remove('dnone');
			
		}
	}
	