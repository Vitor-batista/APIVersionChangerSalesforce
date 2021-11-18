const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "api-version-changer-salesforce" is now active!');

	let disposable = vscode.commands.registerCommand('api-version-changer-salesforce.findReplaceAPI', function () {
		vscode.commands.executeCommand(
			'workbench.action.findInFiles',{
				query: "(?<=<apiVersion>)[\\d]{2}(?=(.)[\\d]</apiVersion>$)",
				replace: "",
				triggerSearch: true,
				matchWholeWord: false,
				isCaseSensitive: false,
				isRegex: true,
			}
		);
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
