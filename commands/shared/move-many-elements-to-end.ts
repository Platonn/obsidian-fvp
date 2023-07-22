/**
 * Moves the items of the `array` from the given `indexes`
 * to the end of this `array`.
 */
export function moveManyElementsToEnd<T>(array: T[], indexes: number[]) {
	const movedElements = indexes.map((index) => array[index]);
	const remainingElements = array.filter(
		(_, index) => !indexes.includes(index)
	);
	return [...remainingElements, ...movedElements];
}

/*
TODO: add specs:
- moves one element
- moves many sparse element
- moves zero elements
- moves all elements
*/
