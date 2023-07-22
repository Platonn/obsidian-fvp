/**
 * Converts an empty checkbox to a bullet point.
 * If the checkbox was filled, it remains untouched.
 *
 * Note: it preserves the original indentation.
 */
export function convertCheckboxToBullet(line: string): string {
	return line.replace(/(^\s*)-\s\[ ]\s/gm, "$1- ");
}
