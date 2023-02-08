# Salesforce EasyHelp

This extension will provide some features to help you work with salesforce.

<br>

# Commands

<a href='#APIVersionChanger'>

    EasyHelp: API Version Changer

</a>
<a href='#RetriveChangeSet'>

    EasyHelp: Retrive Change Set

</a>
<a href='#GetManifestFile'>

    EasyHelp: Get Manifest File

</a>
<a href='#CreateMetadataRecords'>

    EasyHelp: Create Metadata Records

</a>
<a href='#APIVersionChanger'>

    EasyHelp: Retrive Change Set

</a>
<a href='#LogoutFromInstance'>

    EasyHelp: Logout From Instance

</a>
<br>

# Command description


<div id='APIVersionChanger'></div>

## ***API Version Changer***

<br>

By executing this command, a picklist will appear asking for the Object that you want to update

<img src="https://img001.prntscr.com/file/img001/_1N-JY5aRMWZoa6rL7Ho1Q.png">

Now, an input box will show up, just enter the new API value and press enter

<img src="https://img001.prntscr.com/file/img001/PomAo_gCS-GRY-EqRr4gSA.png">

As you can see the tab <b>Search Replace</b> will pop up filled with the RegEx ready to change the API version of the files in your vsCode, click <b>Replace all</b> (Ctrl+Alt+Enter) and be happy

<img src="https://img001.prntscr.com/file/img001/dpMHMt1YSWWRZapRoMDTtQ.png">

<br>
<br>


<div id='RetriveChangeSet'></div>

## ***Retrive Change Set***

<br>

By executing this command, a window asking for the **name of the change set** will open

<img src="https://img001.prntscr.com/file/img001/kfPjwdENSTG1-VDQNU6iAw.png">

Next another window will open, insert the **name of the Organization** were the change set is located

<img src="https://img001.prntscr.com/file/img001/lAu7qSLCSfif59URlUb13w.png">

Now one last window will appear, insert the **path** were the change set will be stored

<img src="https://img001.prntscr.com/file/img001/97HMHPgZSGG1nxFOrWp_ZA.png">

Done, the command will be executed, if everthing is fine the change set will be retrived

<img src="https://img001.prntscr.com/file/img001/vbA7mM6lSjKikN5uToxmTA.png">

<br>
<br>

<div id='GetManifestFile'></div>

## ***Get Manifest File***

<br>

Execute the command and enter the new name for the file, it will be created automatically containing the information of the default organization in your vscode

<br>

The video below shows how easy it is:

<img src="https://media.giphy.com/media/LtxKWnqJ3kWowuEkSB/giphy.gif">

<br>
<br>

<div id='CreateMetadataRecords'></div>

## ***Create Metadata Records***

<br>

Create a .csv file with the information of the records to be inserted, follow the example:

If you're trying to create the record <b>PT</b> with the custom field <b>Country__c</b> filled with <b>Portugal</b> the .csv should look like this:

    Name,Country__c
    PT,Portugal

Note that the first line is used to insert the API of the fieds and the following lines get the content of the record.

<br>

After creating the file execute the command and insert the name of the metadata in the input box

Then insert the path of the .csv file

Wait for the metadata to be generated and depoly it to the organization, <b>All done!</b>

<br>

There's a video to help:

<img src="https://media1.giphy.com/media/wuKC6QB3KnIVkx8CrC/giphy.gif?cid=790b7611134c3d4526559f97fc4f4bc93e7e83d3df406c98&rid=giphy.gif&ct=g">
