import { Command, Editor, MarkdownView } from "obsidian";
import { moveElementToEnd } from "./shared/move-element-to-end";

/**
 * Moves the task at the current line to the end of the list.
 *
 * Note: it doesn't matter if the task is preselected or not.
 */
export const moveTaskToEnd_command: Command = {
	id: "moveTaskToEnd",
	name: "Move task to the end",
	icon: "arrow-down-to-line",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		const currentLineNumber = editor.getCursor().line;
		const lines = editor.getValue().split("\n");
		const updatedLines = moveElementToEnd(lines, currentLineNumber);
		editor.setValue(updatedLines.join("\n"));

		// move cursor back to the original line number
		const currentLineLength = updatedLines[currentLineNumber].length;
		editor.setCursor(currentLineNumber, currentLineLength);
	},
};

/*
TODO: add specs:
- can move first line
- can move last line
- can move middle line
- preserves indentation
*/
