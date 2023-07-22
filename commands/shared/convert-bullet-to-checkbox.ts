/**
 * Converts a bullet point to an empty checkbox.
 *
 * Note: it preserves the original indentation.
 */
export function convertBulletToCheckbox(line: string): string {
	return line.replace(/(^\s*)-\s/gm, "$1- [ ] ");
}

/*
TODO: add specs:
- converts bullet point to empty checkbox
- preserves indentation when converting empty checkbox
- doesn't convert filled checkbox
- doesn't empty checkbox
- doesn't change ordinary text
*/
