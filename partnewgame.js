
//waiting dates from json fiels...
//override strings to push into part 1-1~1-4

var string_title1=new Array;
var string_thumbnail=new Array;
var string_content=new Array;



$(function(){

	initJson("content_2000");

	setTimeout(function(){
	string_title=getJson_title("content_2000");
	string_thumbnail=getJson_content("content_2000");
	string_content=getJson_cURL("content_2000");

	$("#article_title1_1").html(string_title[0]);
	//$("#article_thumbnail1_1").html(string_thumbnail[0][0]);
	$("#article_content1_1").html(string_content[0]);
	var url0="url('"+string_pic[0]+"')";
	$("#article_thumbnail1_1").css({"background":url0,"background-size":"100%"});


	$("#article_title1_2").html(string_title[1]);
	//$("#article_thumbnail1_2").html(string_thumbnail[1][0]);
	$("#article_content1_2").html(string_content[1]);
	var url1="url('"+string_pic[1]+"')";
	$("#article_thumbnail1_2").css({"background":url1,"background-size":"100%"});


	$("#article_title1_3").html(string_title[2]);
	//$("#article_thumbnail1_3").html(string_thumbnail[2][1]);
	$("#article_content1_3").html(string_content[2]);
	var url2="url('"+string_pic[2]+"')";
	$("#article_thumbnail1_3").css({"background":url2,"background-size":"100%"});



<<<<<<< HEAD
	$("#article_title1_4").html(string_title[3]);
	//$("#article_thumbnail1_4").html(string_thumbnail[3][0]);
	$("#article_content1_4").html(string_content[3]);
	var url3="url('"+string_pic[3]+"')";
	$("#article_thumbnail1_4").css({"background":url3,"background-size":"100%"});


=======
>>>>>>> parent of 6a26e40... 디자인 제이슨 수정!
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


	$("#article_title3_2").html(string_title[9]);
	$("#article_thumbnail3_2").append(string_thumbnail[9][0]);
	// $("#article_content3_2").html(string_pic[9][0]);
	$("#article_content3_2").attr("src",string_pic[9][0]);

	$("#article_title3_3").html(string_title[10]);
	$("#article_thumbnail3_3").append(string_thumbnail[10][0]);
	// $("#article_content3_3").html(string_content[10]);
	$("#article_content3_3").attr("src",string_pic[10][0]);

	$("#article_title3_4").html(string_title[11]);
	$("#article_thumbnail3_4").append(string_thumbnail[11][0]);
	// $("#article_content3_4").html(string_content[11]);
	$("#article_content3_4").attr("src",string_pic[11][0]);
	},2000);

	


});