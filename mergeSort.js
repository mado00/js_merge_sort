
// Merge takes two sorted arrays (left, right) and
// returns one array which contains the sorted numbers
// from left and right.
exports.merge = function(left, right) {
	// function merge(left, right) {
	var result = [];
	var i = 0;
	var j = 0;

	while(i < left.length || j < right.length){
		if(i >= left.length) {
			result.push(right[j++]);
			continue;
		}
		if(j >= right.length) {
			result.push(left[i++]);
			continue;
		}
		if(left[i] < right[j]) {
			result.push(left[i++]);
		} else {
			result.push(right[j++]);
		}
	}
	
	return result;
}

//merge([1,2,3], [4,5,6]);
//merge([2,4,7], [3,5,9,10]);
//merge([2,4,7, 9], [3,5,10]);
//merge([2,4,7,9], [3,5,7,10]);




// Merge sort uses the merge function in order to
// sort an array. Given an array of numbers in any
// order, merge sort should return an array that is
// sorted.
exports.mergeSort = function(arr) {
	console.log(arr);

	//function mergeSort (arr) {
	if (arr.length < 2) {
		return arr;
	} //base case
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);

	var sortedL = mergeSort(left);
	console.log(sortedL);
	var sortedR = mergeSort(right);
	console.log(sortedR);
	return merge(sortedL, sortedR);
}



