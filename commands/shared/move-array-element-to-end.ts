/**
 * Moves the item of the `array` from the given `index`
 * to the end of this `array`
 */
export function moveArrayElementToEnd<T>(array: T[], index: number) {
	if (index >= 0 && index < array.length) {
		const element = array.splice(index, 1)[0];
		array.push(element);
	}
	return array;
}

/*
TODO: add specs:
- moves first element
- moves middle element
- moves last element
- ignore out of range `index` <0 OR >=length
*/
