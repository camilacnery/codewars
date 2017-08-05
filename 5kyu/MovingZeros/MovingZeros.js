function moveZeros(values) {
	let zeros = [];
	values = values.filter(value => {
		if (value !== 0) return true;
		zeros.push(0);
		return false;
	});
	return values.concat(zeros);
}

