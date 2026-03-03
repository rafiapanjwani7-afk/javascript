//--------------events--------------------//
/* Question-1*/
function submitFrom(){
    var fName=document.getElementById("name").value
    var lName =document.getElementById("lName").value
    var email =document.getElementById("email").value
    var number = document.getElementById("no").value
    var fullName = fName +" " + lName
    var para = document.getElementById("para")
     para.innerHTML = `<b>Name : </b> ${fullName} <br>
    <b>Email : </b> ${email}<br> <b>Number : </b> ${number} `
}
function expandText(){
    var remaining = document.getElementById("remaining");
    var link = document.getElementById("link");

    if(remaining.style.display === "none" || remaining.style.display === "" ){
        remaining.style.display = "inline"
        link.textContent = "See less"
    }
  
    else{
        remaining.style.display = "none"
        link.textContent = "See more"
    }
}   
/* question 3 */
function deleteRow(e){
    e.parentElement.parentElement.style.display ="none"

}
var sName = document.getElementById("sname");
var sAge = document.getElementById("age");
var sClass = document.getElementById("userClass");
var tBody = document.getElementById("tBody");
var userD = document.getElementById("user");
var rollNum = document.getElementById("num");
var index = 0;

function addStuden(){
    index++;
tBody.innerHTML +=`<tr>
 <td>${index}</td>
        <td>${sName.value}</td>
        <td>${sClass.value}</td>
        <td>${sAge.value}</td>
        <td>${rollNum.value}</td>
        <td>
          <button class="edit-btn" onclick="editRow()">Edit</button>
          <button class="del-btn" onclick="deleteRow(this)">Delete</button>
        </td>
      </tr>
     `
      ;



}
function editRow(){
   
  
    
} 
