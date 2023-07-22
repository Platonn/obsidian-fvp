import { Command, Editor, MarkdownView } from "obsidian";
import { moveArrayElementToEnd } from "./shared/move-array-element-to-end";

/**
 * Resets the preselection for all tasks,
 * i.e. turns empty checkboxes to bullet points.
 *
 * Note: filled checkboxes remain untouched
 */
export const moveTaskToEnd_command: Command = {
	id: "moveTaskToEnd",
	name: "Move task to the end",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		const currentLineNumber = editor.getCursor().line;
		const lines = editor.getValue().split("\n");
		const updatedLines = moveArrayElementToEnd(lines, currentLineNumber);
		editor.setValue(updatedLines.join("\n"));
	},
};

/*
TODO: add specs:
- can move first line
- can move last line
- can move middle line
- preserves indentation
*/
