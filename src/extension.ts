import * as vscode from 'vscode';


// // This method is called when your extension is deactivated
// export function deactivate() {
// }


export function activate(context: vscode.ExtensionContext) {

	let onActiveEditorChanged = vscode.window.onDidChangeActiveTextEditor(editor => {
		//let langId = editor?.document.languageId;
		//vscode.window.showInformationMessage("LANG: " + langId);
		if (vscode.window.tabGroups.all.length > 1) {
			vscode.commands.executeCommand('workbench.action.closeSidebar');

			// // don't handle auxiliary bar
			// vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
		}

	});


	let onTabGroupsChanged = vscode.window.tabGroups.onDidChangeTabGroups(tabGroups => {
		//vscode.window.showInformationMessage('TAB GROUPS: ' + vscode.window.tabGroups.all.length);
		if (vscode.window.tabGroups.all.length > 1) {
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
