function isPanagram(sentence) {
	let lowerCaseSentence = sentence.toLowerCase();
	let alphabets = 'abcdefghijklmnopqrstuvwxyz';

	for (let char of alphabets) {
		if (lowerCaseSentence.indexOf(char) === -1) return false;
	}

	return true;
}
