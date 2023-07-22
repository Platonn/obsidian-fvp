/**
 * Returns whether the line contains an empty checkbox.
 */
export function isEmptyCheckbox(line: string): boolean {
	const regex = /(^\s*)-\s\[ ]\s/gm;
	return regex.test(line);
}

/*
TODO: add specs:
- returns true fo empty checkbox
- returns false for filled checkbox
- returns false for bullet point
- returns false for ordinary text
*/
