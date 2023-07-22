/**
 * Returns whether the given line contains only whitespace.
 */
export function containsOnlyWhitespace(line: string): boolean {
	const regex = /^\s*$/;
	return regex.test(line);
}

/*
TODO: add specs:
console.log(containsOnlyWhitespace("   "));        // true
console.log(containsOnlyWhitespace("   \n\t"));    // true
console.log(containsOnlyWhitespace("   abc  "));   // false
console.log(containsOnlyWhitespace(""));           // true
console.log(containsOnlyWhitespace("   abc"));     // false
*/
