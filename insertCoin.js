var NIGHT_MODE =false;


function onLightMode(){
	if(!NIGHT_MODE){
		alert("black function start");
		NIGHT_MODE=true;
	}
	else{
		alert("white function start");
		NIGHT_MODE=false;
	}

	switch(NIGHT_MODE){
		case true:
			$("body").css({"background":"#23282C"});
			// $("p2").css({"color":"#6D7278"});
			// $("#btn1").css({"background":"#46505B",
			// 					"color":"#6D7278",
			// 					"border":"none"});
			break;
		case false:
			$("body").css({"background":"white"});
			// $("p2").css({"color":"black"});
			// $("#btn1").removeAttr('style')
			break;
	}
}

$(window).ready(function(){

	

		
	
	


	var slideIndex = 0; //현재 표시되는 슬라이드의 인덱스
	var mainSlides = document.getElementsByClassName("slide");
	mainSlides[slideIndex].style.display="block";


	$("#up_arrow_button").css("top", $(window).height() - 100 + "px")
	$("#night_mode_button").css("top", $(window).height() - 170 + "px")

	$("#night_mode_button").click(function(){
		onLightMode();
	});

	$("#up_arrow_button").click(function(){ //화살표 버튼 클릭시 상단 이동
		$('html,body').animate({ scrollTop : 0 } , 400);
	});


	//슬라이드쇼 함수들
	$("#right_arrow").click(function(){ //슬라이드쇼 오른쪽 화살표 클릭
		$("img.slide").fadeOut(700)
		setTimeout(function() {
			if(slideIndex < mainSlides.length-1){
				slideIndex++;
			}else {
				slideIndex=0;
			}
			var id="#slide"+(slideIndex+1);
			$(id).fadeIn(700);
		},700)
	})

	$("#left_arrow").click(function(){ //슬라이드쇼 왼쪽 화살표 클릭
		$("img.slide").fadeOut(700)
		setTimeout(function() {
			if(slideIndex > 0){
				slideIndex--;
			}else {
				slideIndex = mainSlides.length-1;
			}
			var id="#slide"+(slideIndex+1);
			$(id).fadeIn(700);
		},700)
	})

$("div.small_article").click(function(){
 		var winWidth=$(window).width()*0.85;
	 	var winHeight=$(window).height()*0.8;
 		var indexNum=$(this).index();
 		for(var i=0; i<4; i++){
 			var index=i+1;
 			if(i==indexNum){
 				switch(index){
	 					case 1:$("div.small_article:nth-child("+index+")")
	 				.animate({height:winHeight, width:winWidth},1000,"swing");
	 				break;
	 					case 2:$("div.small_article:nth-child("+index+")")
	 				.animate({height:winHeight, width:winWidth, left:"40px"},1000,"swing");
	 				break;
	 					case 3:$("div.small_article:nth-child("+index+")")
	 				.animate({height:winHeight, width:winWidth, top:"20px"},1000,"swing");
	 				break;
	 					case 4:$("div.small_article:nth-child("+index+")")
	 				.animate({height:winHeight, width:winWidth, left:"40px", top:"20px"},1000,"swing");
	 				break;
	 				}
 				}
 			else{
 				$("div.small_article:nth-child("+index+")").css("display","none");
 			}
 		}
 	});


});

$(window).scroll(function(){  
	var position = $(window).scrollTop()+$(window).height();
	$("#up_arrow_button").stop().animate({ top : position - 100 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절
	$("#night_mode_button").stop().animate({ top : position - 170 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절

});	

$(window).resize(function(){
	var position = $(window).scrollTop()+$(window).height();
	$("#up_arrow_button").stop().animate({ top : position - 100 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절
	$("#night_mode_button").stop().animate({ top : position - 170 + "px" } , 700); 
})


$("html").click(function(e){
	if(!$(e.target).hasClass("small_article")){
		$("div.small_article").css("display","block");
		$("div.small_article").css("width","45%");
		$("div.small_article").css("height","400px");
		$("#article1").css("left","40px");
		$("#article1").css("top","20px");
		$("#article2").css("left","55%");
		$("#article2").css("top","20px");
		$("#article3").css("top","500px");
		$("#article3").css("left","40px");
		$("#article4").css("left","55%");
		$("#article4").css("top","500px");
	}
});
