# Salesforce EasyHelp

This extension will provide some features to help you work with salesforce.

<br>

# How it works

You have 3 available commands

    EasyHelp: API Version Changer

    EasyHelp: Install SF Power Kit

    EasyHelp: Get Manifest


That you can run in the <b>Command Palette</b> (Ctrl+Shift+P)

<br>

## Command description

<br>

### API Version Changer

By executing this command, a picklist will appear asking for the Object that you want to update, after that picklist an input box will show up, just enter the new API value, now the tab <b>Search Replace</b> will pop up filled with the RegEx ready to change the API version of all the files in your vsCode, click <b>Replace all</b> (Ctrl+Alt+Enter) and be happy. 

<br>

### Install SF Power Kit

By executing this command, the terminal will open executing the command to install the SF Power Kit, you may need to accept plugin installation

<br>

### Get Manifest

By executing this command, a window asking for the name of the file will open<br>


<img src="https://img001.prntscr.com/file/img001/qmUmRdnETta3PaDKQ-s5HQ.png"><br>


now you have two options, either create a manifest that will get you all the information in the org or a manifest that you will be able to make limits for what is going to be retrived<br>

<img src="https://img001.prntscr.com/file/img001/WusU-mISSKiOZytOc3q-FQ.png">

if you selected Complete <strike>congraju</strike> <strike>congratulashins</strike> <b>congrats</b>, You're done! Now the command will be executed and you will get your package<br>

In case you selected Custom, you will see an other picklist, like this:

<img src="https://img001.prntscr.com/file/img001/xJ5CO2lVRY21SC2CHLjqug.png">

Select <b>Include</b> in case you want to specify the types you want, or select <b>Exclude</b> in case you want to specify the types that you don't want

<img src="https://img001.prntscr.com/file/img001/loJGQgYzQteJkCHc13pkbA.png">

the terminal will open executing a command that will get you the "big manifest" (it may take a while)

<br>

# Release Notes

17 / 11 / 2021 - Extension released.<br>
07 / 04 / 2022 - 1.1.0 released.
12 / 05 / 2022 - 1.2.0 released.

<br>

## 1.0.0

Initial release of API Version Changer Salesforce.

<br>

## 1.1.0

Changed the name and added two new features
    
    EasyHelp: Install SF Power Kit

and
    
    EasyHelp: Get Complete Manifest
<br>

## 1.2.0

Name changed form 

    EasyHelp: Get Complete Manifest

to 

    EasyHelp: Get Manifest

Added the <b>include</b> and <b>exclude</b> options


EasyHelp: API Version Changer, will now ask the type of Object you want to update



-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Company:**
* [@Step Ahead Consulting](https://stepahead.pt/)

**Author:**
* [@Vítor Batista](https://github.com/vitor-batista/) 

**Contributions:**
* [@Jorge Silva](https://github.com/jcsilvapt/)



**Enjoy!**
