/**
 * Returns whether the line contains an empty checkbox.
 */
export function findIndexes<T>(
	arr: T[],
	predicate: (el: T) => boolean
): number[] {
	return arr.reduce((indexes: number[], element: T, index: number) => {
		if (predicate(element)) {
			indexes.push(index);
		}
		return indexes;
	}, [] as number[]);
}

/*
TODO: add specs:
1.
const evenIndexes = findIndexes(numbers, (num) => num % 2 === 0);
console.log(evenIndexes); // Output: [1, 3, 5, 7, 9]

2.
const greaterThanFiveIndexes = findIndexes(numbers, (num) => num > 5);
console.log(greaterThanFiveIndexes); // Output: [5, 6, 7, 8, 9]
*/
