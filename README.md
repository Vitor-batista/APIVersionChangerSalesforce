# API Version Changer Salesforce README

This extension will provide you the regex to change your salesforce files API versions.

<br>

# How it works

*After installed.*

<br>

By running in the <b>Command Palette</b> (Ctrl+Shift+P)

    API Version Changer

you open the <b>Search Replace</b> with the search part already filled.

<br>

All You need to do is insert the new API version and then click <b>Replace all</b> (Ctrl+Alt+Enter).

<br>
<br>

# Known Issues

The extension will replace every group of characters that matches:    

    <apiVersion>XX.X</apiVersion>

Where <b>X</b> is any digit (0-9).

<br>

This means that if in any file of your folder you have something like shown above, it will be changed as well.

<br>

To avoid this you can open the function <b>Toggle Search Details</b> and select the files that you want to avoid the execution (files to exclude) or select the files that you want to execute the change (files to include).

<br>
<br>

# Release Notes

17 / 11 / 2021 - Extension released.

<br>

## 1.0.0

Initial release of API Version Changer Salesforce.

<br>

-----------------------------------------------------------------------------------------------------------

## Working with Markdown

**Author:**
* [@Vítor Batista](https://github.com/vitor-batista/) 

**Contributions:**
* [@Jorge Silva](https://github.com/jcsilvapt/)



**Enjoy!**
