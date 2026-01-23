// ------------------------MATH METHODS----------------------//
//------------Question 1----------//

var userNum =+prompt("Enter a Positive Integer: ")

if(userNum > 0){
    document.write(`<div><p> Number ${userNum} </p>`)
    document.write(`<p> Round Off Value ${Math.round(userNum)}</p>`)
    document.write(`<p> Floor Value ${Math.floor(userNum)}</p>`)
    document.write(`<p> Ceil Value ${Math.ceil(userNum)}</p>`)
}else{
    alert("please! Enter A Positive Integer")
}

//------------Question 2----------//

var userNum = +prompt("Enter A Negative Integer: ")
if(userNum < 0){
    document.write(` <p> Number ${userNum} </p>`)
    document.write(` <p> Round Off Value ${Math.round(userNum)} </p>`)
    document.write(` <p> Floor Value ${Math.floor(userNum)} </p>`)
    document.write(` <p> Ceil Value ${Math.ceil(userNum)} </p>`)
}else{
    alert("please! Enter A Negative Integer")
}

//------------Question 3----------//

var userNum = +prompt( "Enter A Number: ")
document.write(`<p> The Absolute Value Of ${userNum} is ${Math.abs(userNum)} </p>`)

//------------Question 4----------//

var randomNum = Math.random()*6
document.write(`<p> Random Dice Value is: ${Math.floor(randomNum)}</p>`)

//------------Question 5----------//

var toss = +prompt("Enter a Toss Value ");
toss = Math.random()*2;
toss = Math.ceil(toss)
if(toss > 0){
    document.write(`<p> Random Coins Value : Heads </p>`)
}else{
    document.write(`<p> Random Coins Value : Tails </p>`)
}

//------------Question 6----------//

var randomNum = Math.random()*100
document.write(`<p> Random Number Between 1-100:${Math.floor(randomNum)}`)

//------------Question 7----------//

var weight = prompt("Enter your weight in kilograms: ");
document.write(`<p>The weight of user is ${weight} kilograms</p></div>`);

//------------Question 8----------//

var SecretNum = +prompt("Enter a Number Between (1 To 10):")
var orignalNum = Math.random()*10
var orignalNum = Math.ceil(orignalNum)
if(SecretNum == orignalNum){
    alert("Congratulations");
}else{
    alert("Sorry! Try  again");
}
