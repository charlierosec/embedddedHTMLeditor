/*
    Author: Charles R Chiccarine
    Email: src322@drexel.edu

    Purpose:
    Provides the JavaScript for the embedded editor

    Last Edit : 02/28/2019
    Added head comments
*/

function interpretHTML()
{
    var userInText = window.embed.userHTMLIn.document.getElementById("userHTMLText");
    var output = window.embed.userHTMLOut.document.getElementById("outputDiv");

    output.innerHTML = userInText.value;
}
