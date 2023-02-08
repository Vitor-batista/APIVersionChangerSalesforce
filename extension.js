const vscode = require('vscode');
const childProcess = require('child_process');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "salesforce-easy-help" is now active!');

	// ** API Version Changer

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
	let disposable = vscode.commands.registerCommand('salesforce-easy-help.findReplaceAPI', function () {

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

	});

	// ** Install SF Power Kit

	let installSFPowerKit = vscode.commands.registerCommand('salesforce-easy-help.installSFPowerKit', function () {
		let term = vscode.window.createTerminal('sfPowerKit Installation');
		term.show();
		term.sendText('sfdx plugins:install sfpowerkit');
	});

	// ** Retive Chnage Set

	var retriveChangeSetInput = {
		name: '',
		org: '',
		path: ''
	};

	var showTerminalRetriceChangeSet = function () {
		let term = vscode.window.createTerminal('retriveChangeSet');
		term.show();
		term.sendText(
			'sfdx force:mdapi:retrieve -w 10' +
			' -p ' + retriveChangeSetInput.name +
			' -u ' + retriveChangeSetInput.org +
			' -r ' + retriveChangeSetInput.path
		);
	};

	var getPath = async () => {

		const path = await vscode.window.showInputBox({
			placeHolder: 'Enter Path',
			prompt: 'The path were the zip will be saved'
		});

		if ( path !== undefined ){
			retriveChangeSetInput.path = path;
			showTerminalRetriceChangeSet();
		}
	};

	var getOrg = async () => {

		const originOrg = await vscode.window.showInputBox({
			placeHolder: 'Enter Origin Org',
			prompt: 'The name of the org saved in your computer'

		});

		if ( originOrg !== undefined ){
			retriveChangeSetInput.org = originOrg;
			getPath();
		}
	};

	var getName = async () => {

		const name = await vscode.window.showInputBox({
			placeHolder: 'Enter The Name of the Change Set',
			prompt: 'The name of change set that you want to retrive'
		});

		if ( name !== undefined ){
			retriveChangeSetInput.name = name;
			getOrg();
		}
	};


	let retriveChangeSet = vscode.commands.registerCommand( 'salesforce-easy-help.retriveChangeSet', getName );


	// ** Refresh Token

	var showTerminalLogoutInstance = function ( orgName ) {
		let term = vscode.window.createTerminal('logoutInstance');
		term.show();
		term.sendText(
			'sfdx force:auth:logout -u ' + orgName
		);
	};

	var getInstance = async () => {

		const instance =  await vscode.window.showInputBox({
			prompt: 'Enter the username or key of the instance',
			placeHolder: 'Ex: \'user@salesforce.test\' or \'userProd\''
		});

		if ( instance !== undefined ){
			showTerminalLogoutInstance(instance);
		}
	};

	let logoutInstance = vscode.commands.registerCommand( 'salesforce-easy-help.logoutInstance', getInstance );


	// ** Create Metadata Records

	var createMetadataRecordsInfo = {
		metadataName: '',
		filePath: ''
	};

	var showTerminalCreateMetadataRecords = function () {

		let term = vscode.window.createTerminal('createMetadataRecords');
		term.show();
		term.sendText(
			'sfdx force:cmdt:record:insert' +
			' -t ' + createMetadataRecordsInfo.metadataName +
			' -f ' + createMetadataRecordsInfo.filePath
		);
	};

	var retiveCustomMetadataObject = function () {

		let command =
			'sfdx force:source:retrieve ' +
			'-m CustomObject:' + createMetadataRecordsInfo.metadataName


		childProcess.exec( command, ( error, result, errorDescription ) => {
			if ( error )
				vscode.window.showErrorMessage(
					error.message + ' | ' + errorDescription
				);
			else
				showTerminalCreateMetadataRecords();
		});
	};

	var getFilePath = async () => {

		const filePath = await vscode.window.showInputBox({
			prompt: 'Enter the path of the csv file',
			placeHolder: 'Ex: \'c:\\files\\file.csv\''
		});

		if ( filePath !== undefined ){
			createMetadataRecordsInfo.filePath = filePath;
			retiveCustomMetadataObject();
		}
	};

	var getMetadataName = async () => {

		const metadataName = await vscode.window.showInputBox({
			prompt: 'Enter the API name of the Metadata',
			placeHolder: 'Ex: \'Api_Name__mtd\' or \'Api_Name\''
		});

		if ( metadataName !== undefined ){
			createMetadataRecordsInfo.metadataName = metadataName.replace(/__mtd/, '');
			getFilePath();
		}
	};

	let createMetadataRecords = vscode.commands.registerCommand( 'salesforce-easy-help.createMetadataRecords', getMetadataName );


	// ** Get Manifest (new)

	var manifestFileName;

	var showTerminalGetManifest = function ( username ) {

		let term = vscode.window.createTerminal('createMetadataRecords');
		term.show();
		term.sendText(
			'sfdx force:source:manifest:create' +
			' --fromorg ' + username +
			' -o \'manifest/\' -n ' + manifestFileName +
			' -c unlocked'
		);
	};

	var getOrgUsername = async () => {

		let command = 'sfdx force:user:list --json';

		childProcess.exec( command, ( error, result, errorDescription ) => {
			if ( !error )
				showTerminalGetManifest( JSON.parse(result).result[0].username );
		});
	};

	var getManifestFileName = async () => {

		const fileName = await vscode.window.showInputBox({
			prompt: 'Enter File Name',
			placeHolder: 'Ex: \'package\' or \'manifest\''
		});

		if ( fileName !== undefined ){
			manifestFileName = fileName;
			getOrgUsername();
		}
	};

	let getManifestFile = vscode.commands.registerCommand( 'salesforce-easy-help.getManifestFile', getManifestFileName );

	// ** Context

	context.subscriptions.push(disposable);
	context.subscriptions.push(installSFPowerKit);
	context.subscriptions.push(getManifestFile);
	context.subscriptions.push(retriveChangeSet);
	context.subscriptions.push(logoutInstance);
	context.subscriptions.push(createMetadataRecords);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}