// these arrays state whether the "user" is subscribed or not, and their age
var is_subscribed = [true, false, true, true];
var userAges = ["18", "16", "14", "10"];

// these variable state the length of the array starting from 0, because the arrays start counting from 0
var userAgesLength = userAges.length;
var is_subscribedLength = is_subscribed.length;

// this for loop checkes the users age within the Array, and prints out a message on the console
// unless the "user" is 10 or below, then the command will give an alert to the browser (cause I find that funny)
for(var i = 0; i < userAgesLength; i ++) {
    if (userAges[i] >= 18) {
        console.log("User is an Adult");
    } else if (userAges[i] <= 10) {
        alert("you are not allowed on this site");
    } else {
        console.log("User is a teenager");
    }
}

// although "i" can be used the same way, I wanted to try using counter to see if it works the same
// note: it does
var counter = 0;

// this simple for loop determines if the user is subscribed or Not, then prints out a Message, same as the age loop
for(var counter = 0; counter < is_subscribedLength; counter ++){
    if (is_subscribed[counter]) {
        console.log("user is subscribed");
    } else if (!is_subscribed[counter]) {
        console.log("user is not subscribed");
    }
}

// this for loop combines the first two for loops together, stating wheither or not the user is subscribed or not
for(var i = 0; i < userAgesLength && is_subscribedLength; i ++) {
    if (userAges[i] >= 18 && is_subscribed[i] == true) {
        console.log("user is an Adult and Subscribed")
    } else if (userAges[i] >= 18 && is_subscribed[i] == false) {
        console.log("user is an Adult but not Subscribed")
    } else if (userAges[i] <= 18 && is_subscribed[i] == true) {
        console.log("user is not an Adult but is Subscribed")
    } else {
        console.log("user is not an Adult and not Subscribed")
    }
}

// I have no idea if these comments are appropriate, but this is a trial so... 