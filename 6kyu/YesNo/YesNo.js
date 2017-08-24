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

module.exports = yesNo;
