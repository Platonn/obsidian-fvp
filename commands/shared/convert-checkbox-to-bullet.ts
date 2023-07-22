/**
 * Converts an empty checkbox to a bullet point.
 * If the checkbox was filled, it remains untouched.
 *
 * Note: it preserves the original indentation.
 */
export function convertCheckboxToBullet(line: string): string {
	return line.replace(/(^\s*)-\s\[ ]\s/gm, "$1- ");
}

/*
TODO: add specs:
- converts empty checkbox to bullet point
- preserves indentation when converting empty checkbox
- doesn't convert filled checkbox to bullet point
- doesn't bullet point
- doesn't change ordinary text
*/
