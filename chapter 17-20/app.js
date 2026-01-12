//--------------- ARRAY AND LOOPS ----------------//
// Question 1:
var Multi$Arr = [ [],[],[]];


// Question 2;
document.write("<h1> matrix: </h1>")
Multi$Arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
for (var i = 0; i < Multi$Arr.length; i++) {
    document.write(Multi$Arr[i].join(" ") + "<br>")
}


// Question 3
document.write(`<h1>COUNTING:</h1>`)
var Count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 1; i < 11; i++) {
    document.write(i + "<br>")
}


//  Question 4
document.write(`<h1>tables</h1>`)
var Tables = +prompt("Enter Number To Show Its Multiplication Table:") || 5;
var Length = +prompt("Enter Length Multiplication Table:") || 10;
for (var i = 1; i <= Length; i++) {
    document.write(Tables + "x" + i + "=" + Tables * i + "</br>")
    console.log(Tables)
}


// Question 5
document.write(`<h1> Fruits Element:</h1>`)
var Fruit = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < Fruit.length; i++) {
    document.write("<p> elment at index " + i + " is" + " " + Fruit[i] + "</p>")
}


// Question 6:
document.write(`<h1>Counting:</h1>`)
for (var i = 0; i <= 15; i++) {
    document.write(i + " ,")

}
document.write(`</br>`)

document.write(`<h1>Reverse Counting:</h1>`)
for (var i = 10; i > 1; i--) {
    document.write(i + " ,")
}
document.write(`</br>`)
document.write(`<h1>Even counting:</h1>`)
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + " ,")
    }
}
document.write(`</br>`)
document.write(`<h1>Odd counting:</h1>`)
for (var i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ,")
    }
}
document.write(`</br>`)
document.write(`<h1>Series:</h1>`)
for (var i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + "k ,")
    }
}
document.write(`</br>`)


// Question 7
document.write(`<h1>bakery:</h1>`)
var bak_item = ["cake", "apple pie", "cookies", "chips", "patties"]
var userOrder = prompt("Weclome To ABC bakery. What Do You Want To order Sir/Ma'am?")
var falg = false
for (i = 0; i < bak_item.length; i++) {
    if (userOrder.toLowerCase() === bak_item[i]) {
        falg = true
        document.write("<p>" + bak_item[i] + " is <strong> available </strong> at index " + i + " in our bakery </p>")
    }

}
if (!falg) {
    document.write("<p> we are sorry ! " + userOrder + " is<strong> not available </strong> in our bakery")
}

//  Question 8
document.write(`<h1> biggest Number:</h1>`)
var arr = [24, 53, 78, 91, 12]
document.write(`<strong>Array Items:</strong> ${arr} <br>`)
var Largest = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
        Largest = arr[i]
    }
}
document.write("<strong>The largest number  is: </strong> " + Largest + "</br>")


//  Question 9
document.write(`<h1> smaller Number:</h1>`)
var arr = [24, 53, 78, 91, 12]
document.write(`<strong>Array Items:</strong> ${arr} <br>`)
var Smallest = arr[0];
for (i = 0; i < arr.length; i++) {
    if (arr[i] < Smallest) {
        Smallest = arr[i]
        document.write("<strong>The Smallest number is: </strong> " + Smallest + "</br>")
    }
}


//  Question 10
document.write("<h1>Ranging Counting:</h1>")
for (var i = 5; i <= 100; i += 5) {
    document.write(i + " ,")
}