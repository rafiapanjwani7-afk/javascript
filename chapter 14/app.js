
var language1 = prompt("do you known about javascript?(yes or no)")
var language2 = prompt("do you known about css?(yes or no)")
var language3 = prompt("do you known about html?(yes or no)")
var language4 = prompt("do you known about bootstrap?(yes or no)")

if ((language1 == "yes" && language2 == "yes") || language3 == "no" || language4 == "no") {

    if ((language1 == "yes" && language2 == "yes")) {
        console.log("you are eligible!");
        document.write("you are  eligible:")
    }

}
else {
    console.log("you are not eligible");
    document.write("you are not eligible:")
}

var js = prompt("will you known about javascript?");

if (js == "yes") {
    var exp = prompt("how much experence do you have?")
    if (exp >= 2) {
        var city = prompt("what is your city name?");
        if (city === "karachi") {
            console.log("you are eligible!");
            document.write("you are eligible!")
        } else {
            console.log("you will come to karachi!");
            document.write("you will come to karachi!")
        }
    } else {
        console.log(" if you don't have more than 2year experence than not  apply  for this job!");
        document.write("if you don't have more than 2year experence than not  apply  for this job!")
    }
} 