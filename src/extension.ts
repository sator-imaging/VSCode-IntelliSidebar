import * as vscode from 'vscode';


// // This method is called when your extension is deactivated
// export function deactivate() {
// }

let lastTabGroupCount = -1;

export function activate(context: vscode.ExtensionContext) {

	let onActiveEditorChanged = vscode.window.onDidChangeActiveTextEditor(editor => {
		const currentTabGroupCount = vscode.window.tabGroups.all.length;
		if (currentTabGroupCount === lastTabGroupCount) {
			return;
		}
		lastTabGroupCount = currentTabGroupCount;

		//let langId = editor?.document.languageId;
		//vscode.window.showInformationMessage("LANG: " + langId);
		if (currentTabGroupCount > 1) {
			vscode.commands.executeCommand('workbench.action.closeSidebar');

			// // don't handle auxiliary bar
			// vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
		}
	});


	let onTabGroupsChanged = vscode.window.tabGroups.onDidChangeTabGroups(tabGroups => {
		const currentTabGroupCount = vscode.window.tabGroups.all.length;
		if (currentTabGroupCount === lastTabGroupCount) {
			return;
		}
		lastTabGroupCount = currentTabGroupCount;

		//vscode.window.showInformationMessage('TAB GROUPS: ' + vscode.window.tabGroups.all.length);
		if (currentTabGroupCount > 1) {
			vscode.commands.executeCommand('workbench.action.closeSidebar');

			// // don't handle auxiliary bar
			// vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
		}
		else {
			vscode.commands.executeCommand('workbench.action.closeSidebar');
			vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');

			// // don't handle auxiliary bar
			// vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
			// vscode.commands.executeCommand('workbench.action.toggleAuxiliaryBar');
		}
	});

	context.subscriptions.push(onActiveEditorChanged);
	context.subscriptions.push(onTabGroupsChanged);
}
