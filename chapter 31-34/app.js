// ------------------------DATE METHODS----------------------//
//------------Question: 1----------//

var date = new Date ()
document.write(`<p>${date}</p>`)

//------------Question: 2----------//

var date = new Date ()
var monthList = ["January", "February", "March"," April"," May", "June", "July", "August", "September", "October", "November","December"]
var month = date.getMonth()
alert("current Month :"+ monthList[month])
console.log("current Month :"+ monthList[month])
document.write("<p>Current Month: "+ monthList[month]+"</p>")

//------------Question: 3----------//

var date = new Date ()
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay()
alert("today is "+ dayNames[day])
document.write(`<p> Today is ${dayNames[day]} </p>`)

//------------Question: 4----------//

var date = new Date ()
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay()
if(dayNames[day] === "sun" || dayNames[day] === "sat"){
    document.write(`<p> Its A Funday </p>`)
}else{
document.write(`<p> Its A Working day </p>`)
}

//------------Question: 5----------//

var date = new Date ()
var dateNow = date.getDate()
if(dateNow < 16){
     document.write(`<p>First fifteen days of the month</p>`);
}else{
     document.write(`<p>Last days of the month</p>`);
}

//------------Question: 6----------//

var date = new Date ()
document.write(`<p>${date}</p>`)
var milisec = date.getTime()
document.write(`<p>Elapsed milliseconds since January 1, 1970: ${milisec} </p>`)
document.write(`<p>Elapsed milliseconds since January 1, 1970: ${milisec/1000*60} </p>`)

//------------Question: 7----------//

var date = new Date ()
var hours = date.getHours()
if (hours < 12){
    document.write(`<p> It's AM </p>`)
}else{
    document.write(`<p> It's Pm </p>`)
}

//------------Question: 8----------//

var date = new Date ()
var laterDate = date.getDate("Dec-31-2020")
document.write(`<p>Current Date: ${date} </p>`)
document.write(`<p>Later Date: ${laterDate} </p>`)
