import { Command, Editor, MarkdownView } from "obsidian";
import { convertCheckboxToBullet } from "./shared/convert-checkbox-to-bullet";

/**
 * Resets the preselection for all tasks,
 * i.e. turns empty checkboxes to bullet points.
 *
 * Note: filled checkboxes remain untouched
 */
export const resetAllPreselectedTasks_command: Command = {
	id: "resetAllPreselectedTasks",
	name: "Reset all preselected tasks",
	icon: "info",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		const lines = editor.getValue().split("\n");
		const linesConverted = lines.map(convertCheckboxToBullet);
		editor.setValue(linesConverted.join("\n"));
	},
};

/*
TODO: add specs:
- can convert 1 checkbox line 
- can convert many checkboxes
- other bullets remain untouched
- filled checkboxes remain untouched
*/
