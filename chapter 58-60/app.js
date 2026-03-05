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

