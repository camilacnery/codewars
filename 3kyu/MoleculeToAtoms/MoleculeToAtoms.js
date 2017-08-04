function parseMolecule(formula, solution={}) {
	let index = 1;
	if (formula === '') {
		return solution;
	} else if (formula.includes('(') || formula.includes('[') || formula.includes('{')) {
		const extracted = formula.match(/\[(.*?)\]([1-9]*)|\((.*?)\)([1-9]*)|\{(.*?)\}([1-9]*)/).filter((s) => !!s);
		const partialFormula = extracted[1];
		const partialSolution = parseMolecule(partialFormula, {});
		index = extracted[2] ? parseInt(extracted[2], 10) : index;

		Object.keys(partialSolution).forEach((element) => {
			const currentValue = solution[element] || 0;
			solution[element] = partialSolution[element]*index + currentValue;
		});

		return parseMolecule(formula.replace(extracted[0], ''), solution);
	} else {
		const extracted = formula.match(/([A-Z][a-z]*)([1-9]*)/);
		const element = extracted[1];
		const number = extracted[2];
		index = extracted[2] ? parseInt(number, 10) : index;
		solution[element] = solution[element] ? index + solution[element] : index;
		
		return parseMolecule(formula.replace(extracted[0], ''), solution);
	}
}
