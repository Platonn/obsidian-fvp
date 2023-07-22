import { Command, Editor, MarkdownView } from "obsidian";
import { containsOnlyWhitespace } from "./shared/contains-only-whitespace";
import { convertBulletToCheckbox } from "./shared/convert-bullet-to-checkbox";
import { convertCheckboxToBullet } from "./shared/convert-checkbox-to-bullet";
import { findIndexes } from "./shared/find-indexes";
import { isEmptyCheckbox } from "./shared/is-empty-checkbox";
import { moveManyElementsToEnd } from "./shared/move-many-elements-to-end";

/**
 * Moves all preselected tasks to end of list.
 * Removes preselection for all but the first one.
 * Reverses them.
 * Marks the first line in the list as preselected.
 * Moves cursor to the end of the list.
 *
 * Note: filled checkboxes remain untouched
 */
export const moveAllPreselectedTasksToEnd_command: Command = {
	id: "moveAllPreselectedTasksToEnd",
	name: "Move all preselected tasks to end. Remove preselection for all but the first one. Reverse them.",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		const lines = editor.getValue().split("\n");

		// remove empty lines from end of list
		while (containsOnlyWhitespace(lines[lines.length - 1])) {
			lines.pop();
		}

		// find preselected tasks
		const preselectedLineIndexes = findIndexes(lines, (line) =>
			isEmptyCheckbox(line)
		);

		// reset preselection for those tasks, but not for the last one
		preselectedLineIndexes.slice(0, -1).forEach((index) => {
			lines[index] = convertCheckboxToBullet(lines[index]);
		});

		// move those tasks to end of list, in reversed order
		const updatedLines = moveManyElementsToEnd(
			lines,
			preselectedLineIndexes.reverse()
		);

		// set first line as preselected
		updatedLines[0] = convertBulletToCheckbox(updatedLines[0]);

		editor.setValue(updatedLines.join("\n"));
		editor.setCursor(updatedLines.length);
	},
};

/*
TODO: add specs:
- can move first line
- can move many sparse lines
- doesn't move filled checkboxes
- doesn't move ordinary text
- can move all tasks
- reverses the order of moved tasks
- marks first line as preselected
*/
