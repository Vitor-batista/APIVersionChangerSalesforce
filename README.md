# Salesforce EasyHelp

This extension will provide some features to help you work with salesforce.

<br>

# How it works

You have 3 available commands That you can run in the <b>Command Palette</b> (Ctrl+Shift+P)

    EasyHelp: API Version Changer

    EasyHelp: Install SF Power Kit

    EasyHelp: Get Manifest

    EasyHelp: Retrive Change Set

<img src="https://img001.prntscr.com/file/img001/HPL4zypSTkSjOYMCfZ5zoQ.png">

<br>

# Command description


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

## ***Install SF Power Kit***

<br>

By executing this command, the terminal will open executing the command to install the SF Power Kit

<img src="https://img001.prntscr.com/file/img001/BY-XUReITS2DY89pPuL4IA.png">

Accept plugin installation and you're good to go

<img src="https://img001.prntscr.com/file/img001/8S5Hf98BTvmnyNGYyarxVg.png">

<br>
<br>

## ***Get Manifest***

<br>

By executing this command, a window asking for the name of the file will open<br>

<img src="https://img001.prntscr.com/file/img001/qmUmRdnETta3PaDKQ-s5HQ.png"><br>

Now you have two options, either create a manifest that will get you all the information in the org or a manifest that you will be able to make limits for what is going to be retrieved<br>

<img src="https://img001.prntscr.com/file/img001/WusU-mISSKiOZytOc3q-FQ.png">

If you selected Complete <strike>congraju</strike> <strike>congratulashins</strike> <b>congrats</b>, You're done! Now the command will be executed and you will get your package<br>

In case you selected Custom, another picklist will pop-up:

Select <b>Include</b> in case you want to specify the files in a whitelist (only get what you type), or select <b>Exclude</b> in case you want to specify the files in a blacklist (don't get what you type)

<img src="https://img001.prntscr.com/file/img001/xJ5CO2lVRY21SC2CHLjqug.png">

After choosing the type of custom select one more picklist will appear, select all the files that you want to include/exclude ( the window will be shown until you select **Done** )

<img src="https://img001.prntscr.com/file/img001/7uOBktoQSkG4HkAxeJgOvw.png">

After selecting Apex Class:

<img src="https://img001.prntscr.com/file/img001/x0Pq5lCwQnuQHioSBX8tew.png">

After selecting Apex Trigger:

<img src="https://img001.prntscr.com/file/img001/nDpeD1YgTfavo3TsXHrCJw.png">

Case you need to use manual insertion just type the metadata componentes with ',' in between (like shown in the example)

<img src="https://img001.prntscr.com/file/img001/KiwJQ-BaRBiXvX6xysLJfw.png">

After using manual insertion (this example will not work):

<img src="https://img001.prntscr.com/file/img001/tXxbZU3MT-mJIs_kihVgUw.png">

<br>

When Everything selected just choose the option **Done**, a command will be executed

<img src="https://img001.prntscr.com/file/img001/Jg3HjWLxSdqYMYs5FEJq6A.png">

<br>
<br>

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

# Release Notes

17 / 11 / 2021 - Extension released.<br>
07 / 04 / 2022 - 1.1.0 released.<br>
12 / 05 / 2022 - 1.2.0 released.<br>
?? / 03 / 2022 - 1.3.0 released.<br>

<br>

## 1.0.0

<br>

Initial release of API Version Changer Salesforce.

<br>
<br>

## 1.1.0

<br>

1.

Changed the command name from

    API Version Changer

to

    EasyHelp: API Version Changer

<br>

2.

Added two new features

    EasyHelp: Get Complete Manifest

and

    EasyHelp: Install SF Power Kit

<br>
<br>

## 1.2.0


<br>

1.

Name changed form

    EasyHelp: Get Complete Manifest

to

    EasyHelp: Get Manifest

<br>

2.

Added the <b>include</b> and <b>exclude</b> options in command ***EasyHelp: GetManifest***

<br>

3.

***EasyHelp: API Version Changer*** :  will now ask the type of Object you want to update

<br>

## 1.3.0

<br>

1.

New function

    EasyHelp: Retrive Change Set

<br>

2.

***EasyHelp: GetManifest*** : started having picklist to choose **CustomMetadata** componentes

<br>

3.

README was updated, ***looking better now 👌***

<br>
<br>




-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Company:**
* [@Step Ahead Consulting](https://stepahead.pt/)

**Author:**
* [@Vítor Batista](https://github.com/vitor-batista/)

**Contributions:**
* [@Jorge Silva](https://github.com/jcsilvapt/)



**Enjoy!**
