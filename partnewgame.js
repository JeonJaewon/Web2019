
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



	},2000);

	


});