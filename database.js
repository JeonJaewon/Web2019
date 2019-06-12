   //Firebase(database) connection handle
   //Web Programming Team 2

<<<<<<< HEAD
=======

>>>>>>> master
   /*
	DB_set*();   push data into database
	DB_Get*();   get data from database

	every content's ID should start by "content_" + 1000
	
   */

   var DB = firebase.database();
   //initDB();


   // var arrayContent=new Array();
   // arrayContent[0]="content_0001";

   function initDB(){
	 //   var DB = firebase.database();

		// for(var i=0;i<allContent;i++){   
		// 	DB_getLikeCount(arrayContent[i]);
		// 	DB_getWatchCount(arrayContent[i]);
		// }
		// DB_getLastContent();

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
		for(var i=0;i<forCount-1000;i++){
			cID+=i+1000;
			console.log(DB_getLikeCount(cID));
			cID="content_";
		}
	}


//4556
//1231231

