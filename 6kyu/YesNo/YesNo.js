function yesNo(arr) {
	let result = [];
	let list = [].concat(arr);
	let i = 0;

	while (result.length < arr.length) {
		result.push(list[i]);
		list.push(list[i+1]);
		i += 2;
	}
	return result;
}


console.log(yesNo([1,2,3,4,5,6,7,8,9,10]));