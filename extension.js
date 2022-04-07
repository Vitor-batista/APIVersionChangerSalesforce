const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "saleforce-easy-help" is now active!');

	let disposable = vscode.commands.registerCommand('saleforce-easy-help.findReplaceAPI', function () {
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

	let installSFPowerKit = vscode.commands.registerCommand('saleforce-easy-help.installSFPowerKit', function () {

		let term = vscode.window.createTerminal('sfPowerKit Installation');
		term.show();
		term.sendText('sfdx plugins:install sfpowerkit');
	});

	
	var getCompleteManifest = async () => {

		const fileName = await vscode.window.showInputBox({
			placeHolder: "Enter File Name",
			prompt: "ex: bigManifest"
		});

		if ( fileName !== undefined ){

			let query = "sfdx sfpowerkit:org:manifest:build -o manifest/" + fileName + ".xml -e 'CustomObjectTranslation'";
			
			let term = vscode.window.createTerminal('Get Big manifest');
			term.show();
			term.sendText(query);
			
		}
	};
	
	let completeManifest = vscode.commands.registerCommand('saleforce-easy-help.completeManifest', getCompleteManifest );
	
	context.subscriptions.push(disposable);
	context.subscriptions.push(installSFPowerKit);
	context.subscriptions.push(completeManifest);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}