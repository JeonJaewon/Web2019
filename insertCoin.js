var NIGHT_MODE = false;
var settings_on = false; //설정버튼 클릭했는지?


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


	$("#settings_button").css("top", $(window).height() - 100 + "px")
	$("#up_arrow_button").css("top", $(window).height() - 170 + "px")
	$("#night_mode_button").css("top", $(window).height() - 240 + "px")

	$("#settings_button").click(function(){
		if(!settings_on){
			settings_on = true;
			$("#up_arrow_button").slideDown();
			$("#night_mode_button").slideDown();
		}else{
			settings_on = false;
			$("#up_arrow_button").slideUp();
			$("#night_mode_button").slideUp();
		}
	})
	$("#night_mode_button").click(function(){
		onLightMode();
	});

	$("#up_arrow_button").click(function(){ //화살표 버튼 클릭시 상단 이동
		$('html,body').animate({ scrollTop : 0 } , 400);
	});

/////////////////////////////////////////////////////////////////////////bina added start /////////////////////////////
	$("#hottest").click(function(){
		$('html,body').animate({ scrollTop : 0 } , 400);
	});
	$("#newgame").click(function(){
		$('html,body').animate({ scrollTop : $("#newgamespace").offset().top } , 400);
	}); 
	$("#gameengine").click(function(){
		$('html,body').animate({ scrollTop : $("#gameenginespace").offset().top } , 400);
	}); 
	$("#live").click(function(){
		$('html,body').animate({ scrollTop : $("#livespace").offset().top } , 400);
	}); 
	$("#esports").click(function(){
		$('html,body').animate({ scrollTop : $("#esportsspace").offset().top } , 400);
	});
	var now = new Date();
	var s = now.getMonth();
	switch(s){
		case 0:s = "January";break;
		case 1:s = "February";break;
		case 2:s = "March";break;
		case 3:s = "April";break;
		case 4:s = 'May';break;
		case 5:s = 'June';break;
		case 6:s = 'July';break;
		case 7:s = 'August';break;
		case 8:s = 'September';break;
		case 9:s = 'October';break;
		case 10:s = 'November';break;
		case 11:s = 'December';break;
	}

	$("#month").text(s);

	var w = now.getDate();
	$("#week").text(w);

	$("#esportsbutton").click(function(){
		$('html,body').animate({ scrollTop : $("#partition4").offset().top } , 1000);
	});
	$("#gameengineButton").click(function(){
		$('html,body').animate({ scrollTop : $("#partition3").offset().top } , 1000);
	});
/////////////////////////////////////////////////////////////////////////bina added end/////////////////////////////
$("html").click(function(e){
	 if(!$(e.target).hasClass("small_article")){
		// if(article_expanded){
		// 	article_expanded=false;
		// if(article_expanded){
		// 	article_expanded=false;
			$("div.small_article").css("display","block");
			$("div.small_article").css("width","45%");
			$("div.small_article").css("height","35%");
			$("#article1-1").css("left","1%");
			$("#article1-2").css("top","1%");
			$("#article1-2").css("left","50%");
			$("#article1-2").css("top","1%");
			$("#article1-3").css("top","40%");
			$("#article1-3").css("left","1%");
			$("#article1-4").css("left","50%");
			$("#article1-4").css("top","40%");

			$("#article2-1").css("left","1%");
			$("#article2-1").css("top","1%");
			$("#article2-2").css("left","50%");
			$("#article2-2").css("top","1%");
			$("#article2-3").css("top","40%");
			$("#article2-3").css("left","1%");
			$("#article2-4").css("left","50%");
			$("#article2-4").css("top","40%");

			$("#article3-1").css("left","1%");
			$("#article3-1").css("top","1%");
			$("#article3-2").css("left","50%");
			$("#article3-2").css("top","1%");
			$("#article3-3").css("top","40%");
			$("#article3-3").css("left","1%");
			$("#article3-4").css("left","50%");
			$("#article3-4").css("top","40%");

			$("#article4-1").css("left","1%");
			$("#article4-1").css("top","1%");
			$("#article4-2").css("left","50%");
			$("#article4-2").css("top","1%");
			$("#article4-3").css("top","40%");
			$("#article4-3").css("left","1%");
			$("#article4-4").css("left","50%");
			$("#article4-4").css("top","40%");
		}
		//
		 //}
	
	 //}
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

	
		article_expanded=true;
 		var winWidth=$(window).width()*0.85;
	 	var winHeight=$(window).height()*0.8;
 		var indexNum=$(this).index()+1;	
 		// $("div.small_article").css("display","none");
 		//  $("div.small_article:nth-child("+indexNum+")").css("display","block");
 		// for(var i=0; i<4; i++){
 		// 	var index=i+1;
 			// if(i==indexNum){
	switch(indexNum){
				case 1:$("div.small_article:nth-child("+indexNum+")")
			.animate({height:winHeight, width:winWidth},1000,"swing");
				$(".article2").fadeOut();
				$(".article3").fadeOut();
				$(".article4").fadeOut();
			break;
				case 2:$("div.small_article:nth-child("+indexNum+")")
			.animate({height:winHeight, width:winWidth, left:"40px"},1000,"swing");
				$(".article1").fadeOut();
				$(".article3").fadeOut();
				$(".article4").fadeOut();
			break;
				case 3:$("div.small_article:nth-child("+indexNum+")")
			.animate({height:winHeight, width:winWidth, top:"20px"},1000,"swing");
				$(".article1").fadeOut();
				$(".article2").fadeOut();
				$(".article4").fadeOut();
			break;
				case 4:$("div.small_article:nth-child("+indexNum+")")
			.animate({height:winHeight, width:winWidth, left:"40px", top:"20px"},1000,"swing");
				$(".article1").fadeOut();
				$(".article2").fadeOut();
				$(".article3").fadeOut();
			break;
		}
 				
		
			// }else{
 		// 		$("div.small_article:nth-child("+index+")").css("display","none");
 		// 	}
 		// }
 	});
});



$(window).scroll(function(){  
	var position = $(window).scrollTop()+$(window).height();
	$("#settings_button").stop().animate({ top : position - 100 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절
	$("#up_arrow_button").stop().animate({ top : position - 170 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절
	$("#night_mode_button").stop().animate({ top : position - 240 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절

});	

$(window).resize(function(){
	var position = $(window).scrollTop()+$(window).height();
	$("#settings_button").css("top", $(window).height() - 100 + "px")
	$("#up_arrow_button").stop().animate({ top : position - 170 + "px" } , 700); //position뒤에 빼주는 값으로 위치 지정, 두번째 인자로 따라오는 속도 조절
	$("#night_mode_button").stop().animate({ top : position - 240 + "px" } , 700); 
})


