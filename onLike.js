	
	var cSwitch1001=false;

$(function(){

	var temp_cID="content_1001";
	 $("#like1").unbind('click');
	$("#like1").click(function(){

		var temp_like=DB_getLikeCount(temp_cID);

		temp_like++;
		DB_setLikeCount(temp_cID,temp_like);
		$("#like1").text(temp_like);
	});
	$("#article1").click(function(){
		var temp_like=DB_getLikeCount(temp_cID);
		var temp_watch=DB_getWatchCount(temp_cID);

		if(cSwitch1001==false){
		cSwitch1001=true;
		temp_watch++;
		DB_setWatchCount(temp_cID,temp_watch);
		}
		$("#like1").text(temp_like);
		$("#watch1").text(temp_watch);
	});
});