import * as vscode from 'vscode';


let onActiveEditorChanged: vscode.Disposable;
let onTabGroupsChanged: vscode.Disposable;


// This method is called when your extension is deactivated
export function deactivate() {
	onActiveEditorChanged?.dispose();
	onTabGroupsChanged?.dispose();
}


export function activate(context: vscode.ExtensionContext) {

	onActiveEditorChanged?.dispose();
	onActiveEditorChanged = vscode.window.onDidChangeActiveTextEditor(editor => {
		//let langId = editor?.document.languageId;
		//vscode.window.showInformationMessage("LANG: " + langId);
		if (vscode.window.tabGroups.all.length > 1) {
			vscode.commands.executeCommand('workbench.action.closeSidebar');
		}

	});


	onTabGroupsChanged?.dispose();
	onTabGroupsChanged = vscode.window.tabGroups.onDidChangeTabGroups(tabGroups => {
		//vscode.window.showInformationMessage('TAB GROUPS: ' + vscode.window.tabGroups.all.length);
		if (vscode.window.tabGroups.all.length > 1) {
			vscode.commands.executeCommand('workbench.action.closeSidebar');
		}
		else {
			vscode.commands.executeCommand('workbench.action.closeSidebar');
			vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
		}
	});

}
