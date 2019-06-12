
$(function(){

	var temp_cID="content_1001";

	$("#like1").click(function(){
		var temp_like=DB_getLikeCount(temp_cID);

		temp_like++;
		DB_setLikeCount(temp_cID,temp_like);
	});

	$("#article1").click(function(){
		var temp_watch=DB_getWatchCount(temp_cID);
		temp_watch++;
		$("#watch1").text(temp_watch);
		DB_setWatchCount(temp_cID,temp_watch);
	});
});