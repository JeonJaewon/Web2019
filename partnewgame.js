
//waiting dates from json fiels...
//override strings to push into part 1-1~1-4

var string_title1=new Array;
var string_thumbnail=new Array;
var string_content=new Array;
var string_pic=new Array;


$(function(){

	initJson("content_2000");

	setTimeout(function(){
	string_title=getJson_title("content_2000");
	string_thumbnail=getJson_content("content_2000");
	string_content=getJson_cURL("content_2000");
	string_pic=getJson_cPIC("content_2000");

	$("#article_title1_1").html(string_title[0]);
	//$("#article_thumbnail1_1").html(string_thumbnail[0][0]);
	$("#article_content1_1").html(string_content[0]);
	$("#article_thumbnail1_1").css({"background":"url('/NewGame_imgs/card0.jpg')","background-size":"100%"});


	$("#article_title1_2").html(string_title[1]);
	//$("#article_thumbnail1_2").html(string_thumbnail[1][0]);
	$("#article_content1_2").html(string_content[1]);
	$("#article_thumbnail1_2").css({"background":"url('/NewGame_imgs/card1_1.jpg')","background-size":"100%"});


	$("#article_title1_3").html(string_title[2]);
	//$("#article_thumbnail1_3").html(string_thumbnail[2][1]);
	$("#article_content1_3").html(string_content[2]);
	$("#article_thumbnail1_3").css({"background":"url('/NewGame_imgs/card2_1.jpg')","background-size":"100%"});

	$("#article_title1_4").html(string_title[3]);
	//$("#article_thumbnail1_4").html(string_thumbnail[3][0]);
	$("#article_content1_4").html(string_content[3]);
	$("#article_thumbnail1_4").css({"background":"url('/NewGame_imgs/card3_1.jpg')","background-size":"100%"});


	$("#article_title2-1").html(string_title[4]);
	$("#content2-1-1-title").html(string_content[4][0]);
	// $("#content2-1-1-body")
	$("#introduce1").html(string_content[4][3]);
	$("#content2-1-2-title").html(string_content[4][1]);
	$("#content2-1-3-title").html(string_content[4][2]);
	// $("#content2-1-4-title").html(string_content[4][3]);
	// $("#content2-1-5-title").html(string_content[4][4]);

	$("#article_title2-2").html(string_title[5]);
	$("#content2-2-1-title").html(string_content[5][0]);
	// $("#content2-1-1-body")
	$("#introduce2").html(string_content[5][4]);
	$("#content2-2-2-title").html(string_content[5][1]);
	$("#content2-2-3-title").html(string_content[5][2]);
	$("#content2-2-4-title").html(string_content[5][3]);
	// $("#content2-2-5-title").html(string_content[5][4]);

	$("#article_title2-3").html(string_title[6]);
	$("#content2-3-1-title").html(string_content[6][0]);
	// $("#content2-1-1-body")
	$("#introduce3").html(string_content[6][1]);
	// $("#content2-3-2-title").html(string_content[6][1]);
	// $("#content2-3-3-title").html(string_content[6][2]);
	// $("#content2-3-4-title").html(string_content[6][3]);
	// $("#content2-3-5-title").html(string_content[6][4]);

	$("#article_title2-4").html(string_title[7]);
	$("#content2-4-1-title").html(string_content[7][0]);
	// $("#content2-1-1-body")
	$("#introduce4").html(string_content[7][1]);
	// $("#content2-4-2-title").html(string_content[7][1]);
	// $("#content2-4-3-title").html(string_content[7][2]);
	// $("#content2-4-4-title").html(string_content[7][3]);
	// $("#content2-4-5-title").html(string_content[7][4]);


	$("#article_title3_1").html(string_title[8]);
	$("#article_thumbnail3_1").html(string_thumbnail[8][0]);
	$("#article_content3_1").html(string_content[8]);


	$("#article_title3_1").html(string_title[9]);
	$("#article_thumbnail3_1").html(string_thumbnail[9][0]);
	$("#article_content3_1").html(string_content[9]);


	$("#article_title3_1").html(string_title[10]);
	$("#article_thumbnail3_1").html(string_thumbnail[10][0]);
	$("#article_content3_1").html(string_content[10]);


	$("#article_title3_1").html(string_title[11]);
	$("#article_thumbnail3_1").html(string_thumbnail[11][0]);
	$("#article_content3_1").html(string_content[11]);
	},2000);

	


});