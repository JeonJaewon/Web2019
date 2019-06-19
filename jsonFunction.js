
 var jsonFileID="/Web2019/JSON/json_";
//var jsonFileID="/Web2019/JSON/json_";

var return_title=new Array;
var return_cID=new Array;
var return_cURL=new Array;
var return_cPIC=new Array;
var return_content=new Array;

// $(function(){

// 	$("#main_body").css({"display":"none"});
// 	setTimeout(function(){
// 		$("#loading_body").fadeOut(700);
// 		$("#main_body").fadeIn(700);
// 	},500);

	

// });





function getJson_title(contentID){

	var json_path=jsonFileID+contentID+".txt";
		var req=$.ajax(json_path);
		req.done(function(data,status){
			var temp=JSON.parse(data);

			for(var i=0;i<temp.length;i++){
				return_title[i]=temp[i].title;
			}
		});
		return return_title;
}	

function getJson_cID(contentID){

	var json_path=jsonFileID+contentID+".txt";
		var req=$.ajax(json_path);
		req.done(function(data,status){
			var temp=JSON.parse(data);

			for(var i=0;i<temp.length;i++){
				return_cID[i]=temp[i].cID;
			}
		});
		return return_cID;
}	

function getJson_cURL(contentID){

	var json_path=jsonFileID+contentID+".txt";
		var req=$.ajax(json_path);
		req.done(function(data,status){
			var temp=JSON.parse(data);

			for(var i=0;i<temp.length;i++){
				return_cURL[i]=temp[i].cURL;
			}
		});
		return return_cURL;
}	
function getJson_cPIC(contentID){

	var json_path=jsonFileID+contentID+".txt";
		var req=$.ajax(json_path);
		req.done(function(data,status){
			var temp=JSON.parse(data);

			for(var i=0;i<temp.length;i++){
				return_cPIC[i]=temp[i].cPIC;
			}
		});
		return return_cPIC;    //return as double array
}
function getJson_content(contentID){

var json_path=jsonFileID+contentID+".txt";
		var req=$.ajax(json_path);
		req.done(function(data,status){
			var temp=JSON.parse(data);

			for(var i=0;i<temp.length;i++){
				return_content[i]=temp[i].content;
			}
		});
		return return_content;    //return as double array
}


function initJson(contentID){

	getJson_title(contentID);
	getJson_cID(contentID);
	getJson_cURL(contentID);
	getJson_cPIC(contentID);
	getJson_content(contentID);
}

