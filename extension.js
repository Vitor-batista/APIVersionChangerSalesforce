const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "saleforce-easy-help" is now active!');

		// API Version Changer
		var getNewAPI = async (api) => {

			const newAPI = await vscode.window.showInputBox({
				placeHolder: 'Enter New API',
				prompt: 'ex: 52'
			});
	
			if ( newAPI !== undefined ){
	
				let query = '(?<=<apiVersion>)[\\d]{2}(?=(.)[\\d]</apiVersion>$)';
				let replace = newAPI.indexOf('.') == -1 ? newAPI : newAPI.substring( 0, newAPI.indexOf('.') );
				
				vscode.commands.executeCommand(
					'workbench.action.findInFiles',{
						query: query,
						replace: replace,
						triggerSearch: true,
						matchWholeWord: false,
						isCaseSensitive: false,
						isRegex: true,
						filesToInclude: '*/' + api + '/*'
					}
				);
	
			}
		}	
		let disposable = vscode.commands.registerCommand('saleforce-easy-help.findReplaceAPI', function () {
	
			let items = [
				{
					label: 'Apex Classes',
					api: 'classes'
				},
				{
					label: 'Lightning Components',
					api: 'aura'
				},
				{
					label: 'Lightning Web Components',
					api: 'lwc'
				},
				{
					label: 'Visualforce Pages',
					api: 'pages'
				}
			];
	
			vscode.window.showQuickPick(items).then( item => {
				if ( !item )
					return;
				else
					getNewAPI(item.api);
			});
	
		} );
	
		// Install SF Power Kit
		let installSFPowerKit = vscode.commands.registerCommand('saleforce-easy-help.installSFPowerKit', function () {
			let term = vscode.window.createTerminal('sfPowerKit Installation');
			term.show();
			term.sendText('sfdx plugins:install sfpowerkit');
		});

	// Get Manifest

	var showTerminal = function (query) {
		let term = vscode.window.createTerminal('Get manifest');
		term.show();
		term.sendText(query);
	}

	var getCompleteManifest = async ( fileName ) => {
		let query = 'sfdx sfpowerkit:org:manifest:build -o manifest/' + fileName + '.xml -e "CustomObjectTranslation"';
		showTerminal(query);
	}

	var getCustomManifest = async ( type, fileName ) => {

		let include;
		let exclude;

		if ( type === 'Include' ){

			const getInclude = await vscode.window.showInputBox({
				placeHolder: 'Enter Files or Types to Include (always with comma in between)',
				prompt: 'ex: ApexClass,LightningComponentBundle'
			})

			if ( getInclude !== undefined ){
				include = getInclude;
			}
	}

		if ( type === 'Exclude' ){

			const getExclude = await vscode.window.showInputBox({
				placeHolder: 'Enter Files or Types to Exclude (always with comma in between)',
				prompt: 'ex: ApexClass,LightningComponentBundle'
			})

			if ( getExclude !== undefined )
				exclude = getExclude;
		}

		if ( include || exclude ){
			
			let query = 
				'sfdx sfpowerkit:org:manifest:build -o manifest/' + fileName + '.xml' +
				( include ? ' -i "' + include + '"' : '' ) +
				( exclude ? ' -e "CustomObjectTranslation,' + exclude + '"' : '' );

			showTerminal(query);
		}
	};

	var execPackageCreate = function (fileName) {

		let packageType = [
			{
				label: 'Complete',
				description: 'Generate a package that will get all data form the org'
			},
			{
				label: 'Custom',
				description: 'Custom the Package to include/exclude types'
			}
		];

		vscode.window.showQuickPick(packageType).then( pacType => {

			if ( !pacType )
				return;
			else{

				if ( pacType.label === 'Complete' )  
					getCompleteManifest(fileName);
				else {

					let customType = [
						{
							label: 'Include',
							description: 'Insert Types to Include'
						},
						{
							label: 'Exclude',
							description: 'Insert Types to Exclude'
						}
					];

					vscode.window.showQuickPick(customType).then( cusType => {
					
						if ( !cusType )
							return;
						else 
							getCustomManifest( cusType.label, fileName );
					});
				}
			}
		});
	};

	var getPackageFileName = async () => {

		const fileName = await vscode.window.showInputBox({
			placeHolder: 'Enter File Name',
			prompt: 'ex: bigManifest'
		});

		if ( fileName !== undefined )
			execPackageCreate(fileName);
	};

	let getManifest = vscode.commands.registerCommand('saleforce-easy-help.getManifest', getPackageFileName );

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
	context.subscriptions.push(getManifest);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}