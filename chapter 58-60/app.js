//-----------------DOM-------------------//
var mainContent = document.getElementById("main-content")
console.log(mainContent.childNodes);

var renderElements = document.getElementsByClassName("render")
for(var i=0 ; i<renderElements.length ; i++){
    console.log(renderElements[i].innerHTML);
}

document.getElementById("first-name").value="Alex";
document.getElementById("last-name").value="Bank";
document.getElementById("email").value="alexbank@wexample.com";

//------question2----//
 
var content = document.getElementById("form-content")
console.log(content.nodeType);
var lastName =document.getElementById("last-name")
console.log(lastName.nodeType);
var lastName =document.getElementById("last-name")
console.log(lastName.childNodes);
var main_content= document.getElementById("main-content")
console.log(main_content.firstChild);
var main_content= document.getElementById("main-content")
console.log(main_content.lastChild);
var next = document.getElementById("last-name")
console.log(next.nextElementSibling);
var pre = document.getElementById("last-name")
console.log(pre.previousElementSibling);
var mail = document.getElementById("email")
console.log(mail.parentNode.nodeType);



