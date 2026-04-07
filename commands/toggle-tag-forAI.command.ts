import { Command, Editor, MarkdownView } from "obsidian";

/**
 * For the current active cursor line,
 * toggle the presence of the tag #forAI in the beginning of the line
 *
 * If it's a bullet or checkbox, include it in the beginning of the content of the bullet/checkbox
 */
export const toggleTagForAI_command: Command = {
	id: "toggleTagForAI",
	name: "Toggle Tag #forAI",
	icon: "hashtag",
	editorCallback: (editor: Editor, view: MarkdownView) => {
		const currentLineNumber = editor.getCursor().line;
		const line = editor.getLine(currentLineNumber);

		const tag = "#forAI";

		if (line.includes(tag)) {
			// Remove the tag (and any trailing/leading space it leaves)
			const newLine = line
				.replace(` ${tag}`, "")
				.replace(`${tag} `, "")
				.replace(tag, "");
			editor.setLine(currentLineNumber, newLine);
			return;
		}

		// Match bullet/checkbox prefix: "- ", "* ", "- [ ] ", "- [x] ", etc.
		const prefixMatch = line.match(/^(\s*(?:[-*+]\s+(?:\[.\]\s+)?))/);
		if (prefixMatch) {
			const prefix = prefixMatch[1];
			const rest = line.slice(prefix.length);
			editor.setLine(currentLineNumber, `${prefix}${tag} ${rest}`);
		} else {
			editor.setLine(currentLineNumber, `${tag} ${line}`);
		}
	},
};
