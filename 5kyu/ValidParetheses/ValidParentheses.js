function validParentheses(parens){
	let open = 0;
	for (let i = 0; i < parens.length; i++) {
		const current = parens[i];
		if (current === '(') {
			open += 1;
		} else {
			open -= 1;
			if (open < 0) return false;
		}
	}
	return open === 0;
}
