// ------------------------DATE METHODS----------------------//
//------------Question: 1----------//

var date = new Date()
document.write(`<p>${date}</p>`)

//------------Question: 2----------//

var date = new Date()
var monthList = ["January", "February", "March", " April", " May", "June", "July", "August", "September", "October", "November", "December"]
var month = date.getMonth()
alert("current Month :" + monthList[month])
console.log("current Month :" + monthList[month])
document.write("<p>Current Month: " + monthList[month] + "</p>")

//------------Question: 3----------//

var date = new Date()
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay()
alert("today is " + dayNames[day])
document.write(`<p> Today is ${dayNames[day]} </p>`)

//------------Question: 4----------//

var date = new Date()
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay()
if (dayNames[day] === "sun" || dayNames[day] === "sat") {
    document.write(`<p> Its A Funday </p>`)
} else {
    document.write(`<p> Its A Working day </p>`)
}

//------------Question: 5----------//

var date = new Date()
var dateNow = date.getDate()
if (dateNow < 16) {
    document.write(`<p>First fifteen days of the month</p>`);
} else {
    document.write(`<p>Last days of the month</p>`);
}

//------------Question: 6----------//

var date = new Date()
document.write(`<p>${date}</p>`)
var milisec = date.getTime()
document.write(`<p>Elapsed milliseconds since January 1, 1970: ${milisec} </p>`)
document.write(`<p>Elapsed milliseconds since January 1, 1970: ${milisec / 1000 * 60} </p>`)

//------------Question: 7----------//

var date = new Date()
var hours = date.getHours()
if (hours < 12) {
    document.write(`<p> It's AM </p>`)
} else {
    document.write(`<p> It's Pm </p>`)
}

//------------Question: 8----------//

var date = new Date()
var laterDate = new Date("Dec-31-2020")
document.write(`<p>Current Date: ${date} </p>`)
document.write(`<p>Later Date: ${laterDate} </p>`)

//------------Question: 9----------//

var date = new Date();
var LastRamadan = new Date("feb 18, 2026");
var days = date.getTime() - LastRamadan.getTime();
var remainDays = Math.round(days / (1000 * 60 * 60 * 24));
alert(remainDays + " Days have passed since 1st ramadan  2026");
console.log(remainDays + " Days have passed since 1st ramadan  2026");
document.write(`<p>${remainDays}  Days  have  passed  since  1<sup>st</sup>  Ramadan  2026 </p>`);

//------------Question: 10----------//

var date = new Date()
var milidate = date.getTime()
var year2026 = new Date("jan 1, 2026")
var year2026Mili = year2026.getTime()
var differntBet = milidate - year2026Mili
var pastMiliSec = differntBet / (1000)
pastMiliSec = Math.floor(pastMiliSec)
document.write(`<p> On refrence date: ${date}</p>`)
alert(" On refrence date:" + date)
document.write(`<p> ${pastMiliSec} seconds had passed since beginning of 2015</p>`)
alert(pastMiliSec + " seconds had passed since beginning of 2015")

//------------Question: 11----------// 

var Hours = new Date();
var todayHours = Hours.getHours();
alert("current Date: " + hours);
console.log("current Date: " + hours);
document.write(`<p>current Date: ${hours} </p>`);
Hours.setHours(todayHours + 1)
alert("1 hour ago, it was " + Hours);
console.log("1 hour ago, it was " + Hours);
document.write(`<p>1 hour ago, it was ${Hours}</p>`);

//------------Question: 12----------//

var Year = new Date();
var currentYear = Year.getFullYear();
console.log(currentYear);
document.write(`<p>current date: ${currentYear}</p> `);
Year.setFullYear(currentYear - 100);
console.log(Year);
document.write(`<p>100 years back, it was ${Year} </p>`);

//------------Question: 13----------//

var yourAge = prompt("Enter Your Age ")
var today = new Date()
var yearNow = today.getFullYear()
var birthYear = yearNow - yourAge
document.write(`<p> Your Age is ${yourAge} </p>`)
alert("your age is " + yourAge)
document.write(`<p> Your birth year is${birthYear} </p>`)
alert("your birth year is " + birthYear)

//------------Question: 14----------//

var customerName = "Rafia Samiullah"
var todayDate = new Date()
var monthList = ["January", "February", "March", " April", " May", "June", "July", "August", "September", "October", "November", "December"]
var currentMonth = date.getMonth()
var noOfUnit = 410
var chargePerUnit = 16
var netAmount = noOfUnit * chargePerUnit
var lateCharge = 350
var GrossAmount = netAmount + lateCharge
document.write(`<div class = 'box' > <h1> K-Electric Bill: <h1><p> customer name: ${customerName}</p> <p> Current Month: ${monthList[currentMonth]}</p> <p> number of unit: ${noOfUnit} </p> <p> charge per unit: ${chargePerUnit} </p> <p> Net Amount Payable (Within Due Date): ${netAmount}</p> <p> Late Payment charges: ${lateCharge} </p> <p> Gross Amount Payable (After Due Date): ${GrossAmount}</p> </div>`)

