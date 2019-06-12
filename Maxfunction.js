/*
use the function ->getPosterArray()  to get poste message from the sortArray()
*/

var arr=new Array();
var staticCount=5;

var temp_arr;
var sort_arr;

var return_arr=new Array();

function bubbleSort(arr){
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length-i-1; j++) {
                if(arr[j] > arr[j+1]){
                    var c = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = c;
                }
            }
        }
        return arr;
    }   
function mergeSort(arr) { 
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] >= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}     


function getPosterArray(){
	return return_arr;
}

function get_max_function_start(){
    console.log("max fun start");
    temp_arr=DB_getAllLike();

    for(var i=0;i<temp_arr.length;i++){
        arr[i]=parseInt(temp_arr[i]);
    }

    sort_arr=mergeSort(arr);

    for(var i=0;i<staticCount;i++){
        for(var k=0;k<temp_arr.length;k++){
            if(sort_arr[i]==temp_arr[k]){
                return_arr[i]=k;
            }
        }
    }

    console.log(temp_arr);
    console.log(sort_arr);
    console.log(return_arr);
} 






