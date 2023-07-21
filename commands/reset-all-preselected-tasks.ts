import { Command, Editor, MarkdownView } from "obsidian";
import { convertCheckboxToBullet } from "./shared/convert-checkbox-to-bullet";

/**
 * Resets the preselection for all tasks,
 * i.e. turns empty checkboxes to bullet points.
 *
 * Note: filled checkboxes remain untouched
 */
export const resetAllPreselectedTasks: Command = {
	id: "resetAllPreselectedTasks",
	name: "Reset all preselected tasks",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		convertAllCheckboxToBullet(editor);
	},
};

function convertAllCheckboxToBullet(editor: Editor): void {
	const lines = editor.getValue().split("\n");
	const linesConverted = lines.map(convertCheckboxToBullet);
	editor.setValue(linesConverted.join("\n"));
}
