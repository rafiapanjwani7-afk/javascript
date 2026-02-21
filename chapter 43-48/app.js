/*---------------------event object------------------*/
//question 1
function greet(){
    alert("I am clicked");
}
//question 2
function thanks( message){
     alert(message + " thanks for purchasing form us");

 }
 //question 3
 function remove(e){
    e.parentNode.parentNode.remove()
}
//question 4
function on(e){
    e.src="images/bulb on.png"
    e.style.height="200px";
    e.style.width="200px";
}
function off(e){
    e.src="images/bulb off.png"
    e.style.height="200px";
    e.style.width="200px";
}
