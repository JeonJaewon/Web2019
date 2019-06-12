   //Firebase(database) connection handle
   //Web Programming Team 2


   /*
	DB_set*();   push data into database
	DB_Get*();   get data from database

	every content's ID should start by "content_" + 1000
	
   */

var DB;

   $(function(){
 		DB = firebase.database();
 		DB_getLastContent();
 		setTimeout(initDB,1500);
		setTimeout(showAllData,2500);
	});


   function initDB(){
   		alert("init db");
   		var cID="content_";
		var forCount=DB_getLastContent();

		for(var i=0;i<forCount-999;i++){
			cID+=i+1000;
			console.log(cID);
			DB_getLikeCount(cID);
			DB_getWatchCount(cID);
			cID="content_";
			console.log(cID+"init done");
		}
   }

   function showAllData(){
		DB_getAllLike();
		DB_getAllWatch();
   }

   function DB_setData(contentID, like,watch) {
  		DB.ref('InsertCoin_main/' + contentID).set({
    	like_count: like,
    	watch_count:watch,
  });
}
	function DB_setLikeCount(contentID,like){		
  		DB.ref('InsertCoin_main/' + contentID).update({
		like_count: like,
  		});
}
	function DB_setWatchCount(contentID,watch){		
  		DB.ref('InsertCoin_main/' + contentID).update({
		watch_count:watch,
  		});
}
	function DB_getLikeCount(contentID){
		var Outlike;
		var likestr=DB.ref('InsertCoin_main/' + contentID + '/like_count');
			likestr.on('value',function(e){
				Outlike= e.val();
			});
			return Outlike;
	}
	function DB_getWatchCount(contentID){
		var Outwatch;
		var likestr=DB.ref('InsertCoin_main/' + contentID + '/watch_count');
			likestr.on('value',function(e){
				Outwatch=e.val();
			});
			return Outwatch;
	}
	function DB_setLastContent(contentID){		
		var splitarr=new Array();
		splitarr=contentID.split("_");
  		DB.ref('InsertCoin_main/').update({
		LastContent:splitarr[1],
  		});
}
	function DB_getLastContent(){
		var OutLastContent;
		var likestr=DB.ref('InsertCoin_main/LastContent' );
			likestr.on('value',function(e){
				OutLastContent= e.val();
			});
			return OutLastContent;
	}
	function DB_getAllLike(){
		var cID="content_";
		var forCount=DB_getLastContent();
		for(var i=0;i<forCount-999;i++){
			cID+=i+1000;
			console.log(cID+" like:"+DB_getLikeCount(cID));
			cID="content_";
		}
	}
	function DB_getAllWatch(){
		var cID="content_";
		var forCount=DB_getLastContent();
		for(var i=0;i<forCount-999;i++){
			cID+=i+1000;
			console.log(cID+" watch:"+DB_getWatchCount(cID));
			cID="content_";
		}
	}





	//v_0.0.2