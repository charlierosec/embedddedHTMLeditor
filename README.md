# Embedded HTML Editor
A simple HTML/CSS editor that can be embedded into webpages

## How To Use
Include all these files in the same directory with your HTML file that you
want to embed the editor in. Within the HTML file, include the following code.

In \<head\>
```
<link rel="stylesheet" href="embeddedCSS.css">
<script src="embeddedJS.js"></script>
```
In \<body\>
```
<button id="tryitout" onclick="interpretHTML()">View</button>
<iframe name="embed" src="embeddedEdit.html"></iframe>
```

## Credit
Created by Charles R Chiccarine in February 2019 for the purpose for
teaching students HTML
