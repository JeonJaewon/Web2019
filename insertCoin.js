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

	// loading flash
	// $("#main_body").css({"display":"none"});
	// setTimeout(function(){
	// 	$("#loading_body").fadeOut(700);
	// 	$("#main_body").fadeIn(700);
	// },5000);



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
	$(".live_article_menu2").click(function(){
		$('html,body').animate({ scrollTop : $("#partition2").offset().top } , 1000);
	});
	$("#gameengineButton").click(function(){
		$('html,body').animate({ scrollTop : $("#partition3").offset().top } , 1000);
	});
/////////////////////////////////////////////////////////////////////////bina added end/////////////////////////////
	$("#newgamespace").click(function(){
		$('html,body').animate({ scrollTop : $("#partition1").offset().top } , 1000);
	});

	$(".go_back_arrow").click(function(e){
	// $("div.small_article").css("display","block");
	// $("div.small_article").css("width","45%");
	// $("div.small_article").css("height","35%");

	// $("div.small_article").css("display","block");
	// $("div.small_article").css("width","45%");
	// $("div.small_article").css("height","35%");
		e.stopPropagation()
 
		$("#article1-1").fadeIn();
		$("#article1-2").fadeIn();
		$("#article1-3").fadeIn();
		$("#article1-4").fadeIn();

		$("#article2-1").fadeIn();
		$("#article2-2").fadeIn();
		$("#article2-3").fadeIn();
		$("#article2-4").fadeIn();

		$("#article3-1").fadeIn();
		$("#article3-2").fadeIn();
		$("#article3-3").fadeIn();
		$("#article3-4").fadeIn();

		$("#article4-1").fadeIn();
		$("#article4-2").fadeIn();
		$("#article4-3").fadeIn();
		$("#article4-4").fadeIn();

		$(this).closest(".small_article").css("display","block");
		$(this).closest(".small_article").css("width","45%");
		$(this).closest(".small_article").css("height","35%");

		$("#article1-1").css("left","1%");
		$("#article1-1").css("top","1%");
		$("#article1-2").css("left","50%");
		$("#article1-2").css("top","1%");
		$("#article1-3").css("top","40%");
		$("#article1-3").css("left","1%");
		$("#article1-4").css("left","50%");
		$("#article1-4").css("top","40%");

		$("#article2-1").css("left","1%");
		$("#article2-1>div.article_thumbnail").css("display","block");
		$("#article2-1>div.article_content").css("display","none");
		// $(".article_title").css("display","none");
		$("#article2-1").css("top","1%");
		$("#article2-2").css("left","50%");
		$("#article2-2>div.article_thumbnail").css("display","block");
		$("#article2-2>div.article_content").css("display","none");
		$("#article2-2").css("top","1%");
		$("#article2-3").css("top","40%");
		$("#article2-3").css("left","1%");
		$("#article2-3>div.article_thumbnail").css("display","block");
		$("#article2-3>div.article_content").css("display","none");
		$("#article2-4").css("left","50%");
		$("#article2-4").css("top","40%");
		$("#article2-4>div.article_thumbnail").css("display","block");
		$("#article2-4>div.article_content").css("display","none");

		$("#article3-1").css("left","1%");
		$("#article3-1").css("top","1%");
		$("#article3-2").css("left","50%");
		$("#article3-2").css("top","1%");
		$("#article3-3").css("top","40%");
		$("#article3-3").css("left","1%");
		$("#article3-4").css("left","50%");
		$("#article3-4").css("top","40%");



});

		$(".btn-1").on("click",{url:"https://www.leagueoflegends.co.kr/?m=esports&mod=chams_schedule&cate=1", winattributes : "resize=1"}, maxopen);
		$(".btn-2").on("click",{url:"https://wcs.starcraft2.com/ko-kr/schedule/", winattributes : "resize=1"}, maxopen);
		$(".btn-3").on("click",{url:"https://overwatchleague.com/ko-kr/schedule", winattributes : "resize=1"}, maxopen);
		$(".btn-4").on("click",{url:"http://www.dailyesports.com/", winattributes : "resize=1"}, maxopen);
		$(".btn-5").on("click",{url:"http://www.inven.co.kr/webzine/", winattributes : "resize=1"}, maxopen);


		$("#right_arrow").click(function(){ //슬라이드쇼 오른쪽 화살표 클릭
		$("img.slide").fadeOut(700);
		setTimeout(function() {
			if(slideIndex < mainSlides.length-1){
				slideIndex++;
			}else {
				slideIndex=0;
			}
			var id="#slide"+(slideIndex+1);
			$(id).fadeIn(700);
		},700)
	});

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
	});

$("div.small_article").click(function(e){
		e.stopPropagation()

 		var winWidth=$(window).width()*0.85;
	 	var winHeight=$(window).height()*0.8;
 		var indexNum=$(this).index()+1;	
 		var now_small_article=$("div.small_article:nth-of-type("+indexNum+")");
 		// var ind=$(this).index()+1; //몇번째 뉴스인지 찾는다
      	var parInd=$(this).parent().index()-8; //몇번째 article_partition인지 찾는다. 왜 8빼야 되는지는 모르겠는데 아무튼됨
 		var now_parent=$("div.article_partition:nth-of-type("+parInd+")");

	switch(parInd){
				case 1:
				switch(indexNum){
					case 1:
						$("#article1-1").animate({height:winHeight, width:winWidth},1000,"swing");
						$(".article_title").css("display","block");
						// $("#article1-2>div.article_content").css("display","block");
						$("#article1-2").fadeOut();
						$("#article1-3").fadeOut();
						$("#article1-4").fadeOut();
					break;
					case 2:
						$("#article1-2").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$(".article_title").css("display","block");
						$("#article1-1").fadeOut();
						$("#article1-3").fadeOut();
						$("#article1-4").fadeOut();
					break;
					case 3:
						$("#article1-3").animate({height:winHeight, width:winWidth},1000,"swing");
						$(".article_title").css("display","block");
						$("#article1-1").fadeOut();
						$("#article1-2").fadeOut();
						$("#article1-4").fadeOut();
					break;
					case 4:
						$("#article1-4").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$(".article_title").css("display","block");
						$("#article1-1").fadeOut();
						$("#article1-3").fadeOut();
						$("#article1-2").fadeOut();
					break;
				}
			break;
				case 2:
					switch(indexNum){
					case 1:
						$("#article2-1").animate({height:winHeight, width:winWidth},1000,"swing");
						$("#article2-1>div.article_thumbnail").css("display","none");
						$("#article2-1>div.article_content").css("display","block");						
						$(".article_title").css("display","block");
						$("#article2-2").fadeOut();
						$("#article2-3").fadeOut();
						$("#article2-4").fadeOut();
					break;
					case 2:
						$("#article2-2").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$("#article2-2>div.article_thumbnail").css("display","none");
						$("#article2-2>div.article_content").css("display","block");
						$(".article_title").css("display","block");
						$("#article2-1").fadeOut();
						$("#article2-3").fadeOut();
						$("#article2-4").fadeOut();
					break;
					case 3:
						$("#article2-3").animate({height:winHeight, width:winWidth},1000,"swing");
						$("#article2-3>div.article_thumbnail").css("display","none");
						$("#article2-3>div.article_content").css("display","block");
						$(".article_title").css("display","block");
						$("#article2-1").fadeOut();
						$("#article2-2").fadeOut();
						$("#article2-4").fadeOut();
					break;
					case 4:
						$("#article2-4").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$("#article2-4>div.article_thumbnail").css("display","none");
						$("#article2-4>div.article_content").css("display","block");
						$(".article_title").css("display","block");
						$("#article2-1").fadeOut();
						$("#article2-3").fadeOut();
						$("#article2-2").fadeOut();
					break;
				}
			break;
				case 3:
				switch(indexNum){
					case 1:
						$("#article3-1").animate({height:winHeight, width:winWidth},1000,"swing");
						$(".article_title").css("display","block");
						$("#article3-2").fadeOut();
						$("#article3-3").fadeOut();
						$("#article3-4").fadeOut();
					break;
					case 2:
						$("#article3-2").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$(".article_title").css("display","block");
						$("#article3-1").fadeOut();
						$("#article3-3").fadeOut();
						$("#article3-4").fadeOut();
					break;
					case 3:
						$("#article3-3").animate({height:winHeight, width:winWidth},1000,"swing");
						$(".article_title").css("display","block");
						$("#article3-1").fadeOut();
						$("#article3-2").fadeOut();
						$("#article3-4").fadeOut();
					break;
					case 4:
						$("#article3-4").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$(".article_title").css("display","block");
						$("#article3-1").fadeOut();
						$("#article3-3").fadeOut();
						$("#article3-2").fadeOut();
					break;
				}
			break;
				case 4:
				switch(indexNum){
					case 1:
						$("#article4-1").animate({height:winHeight, width:winWidth},1000,"swing");
						$("#article4-2").fadeOut();
						$("#article4-3").fadeOut();
						$("#article4-4").fadeOut();
					break;
					case 2:
						$("#article4-2").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$("#article4-1").fadeOut();
						$("#article4-3").fadeOut();
						$("#article4-4").fadeOut();
					break;
					case 3:
						$("#article4-3").animate({height:winHeight, width:winWidth},1000,"swing");
						$("#article4-1").fadeOut();
						$("#article4-2").fadeOut();
						$("#article4-4").fadeOut();
					break;
					case 4:
						$("#article4-4").animate({height:winHeight, width:winWidth,left:"40px"},1000,"swing");
						$("#article4-1").fadeOut();
						$("#article4-3").fadeOut();
						$("#article4-2").fadeOut();
					break;
				}
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
});


// $("html").click(function(e){
// 	if(!$(e.target).hasClass("small_article")){
// 		// if(article_expanded){
// 		// 	article_expanded=false;
		
// 		$("div.small_article").css("display","block");
// 		$("div.small_article").css("width","45%");
// 		$("div.small_article").css("height","35%");
// 		$("#article1-1").css("left","1%");
// 		$("#article1-2").css("top","1%");
// 		$("#article1-2").css("left","50%");
// 		$("#article1-2").css("top","1%");
// 		$("#article1-3").css("top","40%");
// 		$("#article1-3").css("left","1%");
// 		$("#article1-4").css("left","50%");
// 		$("#article1-4").css("top","40%");

// 		$("#article2-1").css("left","1%");
// 		$("#article2-1").css("top","1%");
// 		$("#article2-2").css("left","50%");
// 		$("#article2-2").css("top","1%");
// 		$("#article2-3").css("top","40%");
// 		$("#article2-3").css("left","1%");
// 		$("#article2-4").css("left","50%");
// 		$("#article2-4").css("top","40%");

// 		$("#article3-1").css("left","1%");
// 		$("#article3-1").css("top","1%");
// 		$("#article3-2").css("left","50%");
// 		$("#article3-2").css("top","1%");
// 		$("#article3-3").css("top","40%");
// 		$("#article3-3").css("left","1%");
// 		$("#article3-4").css("left","50%");
// 		$("#article3-4").css("top","40%");

// 		$("#article4-1").css("left","1%");
// 		$("#article4-1").css("top","1%");
// 		$("#article4-2").css("left","50%");
// 		$("#article4-2").css("top","1%");
// 		$("#article4-3").css("top","40%");
// 		$("#article4-3").css("left","1%");
// 		$("#article4-4").css("left","50%");
// 		$("#article4-4").css("top","40%");

// 		}
	
// 	// }
// });

	function maxopen(event){
		var maxwindow = window.open(event.data.url, " ", event.data.winattributes);
		maxwindow.moveTo(0,0);
		maxwindow.resizeTo(screen.availWidth, screen.availHeight);
	}

