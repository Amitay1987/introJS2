function printEvenNumbers0to20 (){
	var num = 0;
	while(num<=20){
		console.log(num);
		num+=2;
	}
}

function doWhileIncrement(low,high){
	var outputNum = low;
	do{
		console.log(outputNum);
		outputNum++;
	}while(outputNum <= high);
}

function whileIncrement(low,high){
	while(low<=high){
		console.log(low);
		low++;
	}
}

function forIncrement(low,high){
	for(var i = low ; i<=high ; i++){
		console.log(i);
	}
}

function forAllEvenNum0to1000 (){
	for(var i = 0 ; i <= 1000 ; i+=2){
		console.log(i);
	}
}

function primitveAllEven0to1000() {
	for(var i = 0 ; i<=1000 ; i++){
		if(i%2 == 0){
			console.log(i);
		}
	}
}

function fizzBuzzChallenge(){
	for(num = 0 ; num<=20 ; num++){
		if(num%3==0 && num%5==0){
			console.log(num + " is fizzBuzz");
		}
		else if(num%3 == 0){
			console.log(num + "is fizz");
		}
		else{
			console.log(num)
		}
	}
}

//Partner EX1

function printResturant (arr) {
	for(var i = 0 ; i<arr.length ; i++){
		console.log(arr[i]);
	}
}
//Partner EX2
function calcArrayAverage(arr){
	var countNumbers = arr.length;
	var sum = 0;

	for(var i = 0 ; i<arr.length ; i++){
		sum+=arr[i];
	}

	console.log("The Avarege of this array is " + sum/arr.length);
}
//Partner EX3
function arrayToString(arr){
	var ans = "";
	for(var i = 0 ; i<arr.length-1 ; i++){
		ans+= arr[i] + "+";
	}
	console.log(arr[arr.length-1])
	ans+=arr[arr.length-1];
	console.log(ans);
}

//Partner EX4
function stringEvenDashes(str){

	var ans = ""
	for(var i = 0 ; i<str.length-2 ; i++){
		if(str.charAt(i)%2 == 0 && str.charAt(i+1)%2 == 0){
			ans+=str.charAt(i)+"-";
		}
		else{
			ans+=str.charAt(i);
		}
	}
	if(str.charAt(str.length-2)%2 == 0 && str.charAt(str.length-1)%2 == 0){
		ans+=str.charAt(str.length-2)+"-"+str.charAt(str.length-1);
	}
	else{
		ans+=str.charAt(str.length-2)+str.charAt(str.length-1);
	}
	console.log(ans);
}

//Partner Extention 1
function mostFrequency(arr){

	var arrFreqItem = [];
	var arrCountFreq = [];

	for(var i = 0 ; i<arr.length ; i++){
		var ansEqual = ifEqualArray(arrFreqItem,arr[i]); 
		
		// if not equal in check array
		if(ansEqual === null){
			arrFreqItem.push(arr[i]);
			arrCountFreq[arrCountFreq.length] = 1; 
		}
		// if equal in array
		else{
			arrCountFreq[ansEqual]++;
		}
	}
	//check mostFrequency
	var greaterIndex = 0;
		for(var i = 0 ; i<arrCountFreq.length ; i++){
			if(arrCountFreq[i] > arrCountFreq[greaterIndex]){
				greaterIndex = i;
			}
		}
	console.log(arrFreqItem[greaterIndex]);	
}

function ifEqualArray(arr,item){
	
	for(var i = 0 ; i<arr.length ; i++){
		if(item == arr[i]){
			return i;
		}
	}
	return null;
}

//Partner Extention 2
function findMissingElement1to200(arr){

	var ansArr = [];
	ansArr.length = 199;
	ansArr.fill(0);

	for(var i = 0 ; i<arr.length ; i++){
		ansArr[arr[i]-1]++;
	}

	for(var i = 0 ; i<ansArr.length; i++){
		if(ansArr[i] === 0){
			console.log(i+1);
			return;
		}
	}

}

function findMissing1to200Method2(arr){
	var ans = 20100;

	for(var i = 0 ; i<arr.length ; i++){
		ans-=arr[i];
	}

	console.log(ans);
}