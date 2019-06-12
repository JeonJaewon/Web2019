var cSwitch1001=false;
var cSwitch1002=false;
var cSwitch1003=false;
var cSwitch1004=false;

var cSwitch2001=false;
var cSwitch2002=false;
var cSwitch2003=false;
var cSwitch2004=false;

var cSwitch3001=false;
var cSwitch3002=false;
var cSwitch3003=false;
var cSwitch3004=false;

var cSwitch4001=false;
var cSwitch4002=false;
var cSwitch4003=false;
var cSwitch4004=false;

$(function(){

	$(".like").click(function(e){ //like수 증가시키는 함수
		e.stopPropagation()
			
		var ind=$(this).closest(".small_article").index()+1; //몇번째 뉴스인지 찾는다
		var parInd=($(this).closest(".article_partition").index()-9)*4; //몇번째 article_partition인지 찾는다. 왜 9빼야 되는지는 모르겠는데 아무튼됨

		var temp_cID="content_100"+(ind+parInd);
		var temp_like=DB_getLikeCount(temp_cID);
		temp_like++;
		DB_setLikeCount(temp_cID,temp_like);
		console.log(temp_cID);

		$(this).text(temp_like);
	});

	$(".small_article").click(function(){ //watch,like수 찾아오는 함수
		var ind=$(this).index()+1; //몇번째 뉴스인지 찾는다
		var parInd=($(this).parent().index()-9)*4; //몇번째 article_partition인지 찾는다. 왜 9빼야 되는지는 모르겠는데 아무튼됨
		var temp_cID="content_100"+(ind+parInd);

		var temp_like=DB_getLikeCount(temp_cID);
		var temp_watch=DB_getWatchCount(temp_cID);

		var switch_str="cSwitch"+(ind+parInd);
		if(window[switch_str]==false){ 
			window[switch_str]=true;
			temp_watch++;
			DB_setWatchCount(temp_cID,temp_watch);
		}
		$(this).find(".like").text(temp_like);
		$(this).find(".watch").text(temp_watch);
	});
});