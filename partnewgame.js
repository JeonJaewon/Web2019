
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
	$("#article_thumbnail1_1").html(string_thumbnail[0][1]);
	$("#article_content1_1").html(string_content[0]);

	$("#article_title1_2").html(string_title[1]);
	$("#article_thumbnail1_2").html(string_thumbnail[1][0]);
	$("#article_content1_2").html(string_content[1]);

	$("#article_title1_3").html(string_title[2]);
	$("#article_thumbnail1_3").html(string_thumbnail[2][1]);
	$("#article_content1_3").html(string_content[2]);

	$("#article_title1_4").html(string_title[3]);
	$("#article_thumbnail1_4").html(string_thumbnail[3][0]);
	$("#article_content1_4").html(string_content[3]);

	var url3="url('"+string_pic[3]+"')";
	$("#article_thumbnail1_4").css({"background":url3,"background-size":"100%"});


	$("#article_title2-1").html(string_title[4]);
	$("#content2-1-1-title").html(string_thumbnail[4][0]);
	$("#article_img2-1-1").attr("src",string_pic[4][0]);
	$("#article_link2-1-1").attr("href",string_pic[4][6]);
	$("#article_link2-1-2").attr("href",string_pic[4][7]);
	$("#article_link2-1-3").attr("href",string_pic[4][8]);
	$("#article_link2-1-4").attr("href",string_pic[4][9]);
	$("#article_link2-1-5").attr("href",string_pic[4][10]);
	$("#article_link2-1-6").attr("href",string_pic[4][11]);

	$("#article_img2-1-2").attr("src",string_pic[4][1]);
	$("#article_img2-1-3").attr("src",string_pic[4][2]);
	$("#article_img2-1-4").attr("src",string_pic[4][3]);
	$("#article_img2-1-5").attr("src",string_pic[4][4]);
	$("#article_img2-1-6").attr("src",string_pic[4][5]);

	$("#introduce1").html(string_thumbnail[4][3]);
	
	$("#content2-1-2-title").html(string_thumbnail[4][1]);
	$("#content2-1-3-title").html(string_thumbnail[4][2]);
	// $("#content2-1-4-title").html(string_content[4][3]);
	// $("#content2-1-5-title").html(string_content[4][4]);

	$("#article_title2-2").html(string_title[5]);
	$("#content2-2-1-title").html(string_thumbnail[5][0]);
	$("#article_img2-2-1").attr("src",string_pic[5][0]);
	$("#article_img2-2-2").attr("src",string_pic[5][1]);
	$("#article_img2-2-3").attr("src",string_pic[5][2]);
	$("#article_img2-2-4").attr("src",string_pic[5][3]);
	$("#article_img2-2-5").attr("src",string_pic[5][4]);
	$("#article_img2-2-6").attr("src",string_pic[5][5]);
	$("#article_link2-2-1").attr("href",string_pic[5][6]);
	$("#article_link2-2-2").attr("href",string_pic[5][7]);
	$("#article_link2-2-3").attr("href",string_pic[5][8]);
	$("#article_link2-2-4").attr("href",string_pic[5][9]);
	$("#article_link2-2-5").attr("href",string_pic[5][10]);
	$("#article_link2-2-6").attr("href",string_pic[5][11]);

	$("#introduce2").html(string_thumbnail[5][4]);
	$("#content2-2-2-title").html(string_thumbnail[5][1]);
	$("#content2-2-3-title").html(string_thumbnail[5][2]);
	$("#content2-2-4-title").html(string_thumbnail[5][3]);
	$("#article_title2-3").html(string_title[6]);
	$("#content2-3-1-title").html(string_thumbnail[6][0]);
	$("#introduce3").html(string_thumbnail[6][1]);
	$("#article_img2-3-1").attr("src",string_pic[6][0]);
	$("#article_img2-3-2").attr("src",string_pic[6][1]);
	$("#article_img2-3-3").attr("src",string_pic[6][2]);
	$("#article_img2-3-4").attr("src",string_pic[6][3]);
	$("#article_img2-3-5").attr("src",string_pic[6][4]);
	// $("#article_img2-3-6").attr("src",string_pic[6][5]);
	$("#article_link2-3-1").attr("href",string_pic[6][5]);
	$("#article_link2-3-2").attr("href",string_pic[6][6]);
	$("#article_link2-3-3").attr("href",string_pic[6][7]);
	$("#article_link2-3-4").attr("href",string_pic[6][8]);
	$("#article_link2-3-5").attr("href",string_pic[6][9]);
	// $("#article_link2-3-6").attr("href",string_pic[6][10]);

	$("#article_title2-4").html(string_title[7]);
	$("#content2-4-1-title").html(string_thumbnail[7][0]);
	$("#introduce4").html(string_thumbnail[7][1]);
	$("#article_img2-4-1").attr("src",string_pic[7][0]);
	$("#article_img2-4-2").attr("src",string_pic[7][1]);
	$("#article_img2-4-3").attr("src",string_pic[7][2]);
	$("#article_img2-4-4").attr("src",string_pic[7][3]);
	$("#article_img2-4-5").attr("src",string_pic[7][4]);
	// $("#article_img2-4-6").attr("src",string_pic[7][5]);
	$("#article_link2-4-1").attr("href",string_pic[7][5]);
	$("#article_link2-4-2").attr("href",string_pic[7][6]);
	$("#article_link2-4-3").attr("href",string_pic[7][7]);
	$("#article_link2-4-4").attr("href",string_pic[7][8]);
	$("#article_link2-4-5").attr("href",string_pic[7][9]);



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