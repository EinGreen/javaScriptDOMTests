// this block of code will change the p tag in the header to a sentence with a Paradox
var subHead = document.querySelector('body>header>p');
subHead.innerText = "This sentence is False";

// this block of code will change all the P tags within a div to the Pharoh's Response
var pharohsResponse = document.querySelectorAll('body>div>p');
for(var i=0; i < pharohsResponse.length; i++) {
    pharohsResponse[i].innerText = `I will NEVER let your people go!`;
}
// Yes, this is a Bible Reference, yes I was watching 'Prince of Egypt' before doing this
// Speaking of which, this block of code will change the first P tag with it's respectice ID to say "Stop this foolishness"
var stopThisFoolishness = document.getElementById('letMeGo');
stopThisFoolishness.innerText = "Stop this foolishness, Moses";

// this function connects to a buttom that DESTORIES THE CHILD [literally]
function destoryChild() {
    var children = document.getElementById('removeChild');
    children.removeChild(children.childNodes[0]);
}

// this function console logs the name of child within an li tag
function logChild(childNum) {
    var c = document.getElementsByTagName("LI");
    console.log(c[childNum]);
}
logChild(2);

// I really liked my teacher's Bane reference, so I decided to copy some of that code and put it here
// only problem was: I needed to put it somewhere, so I just put it on a random section
var randomSection = document.getElementById("randomSection")
var alexCoolReference = document.createElement('h3');
randomSection.append(alexCoolReference);
alexCoolReference.innerText = `I was born by JS, molded by it -Alex (Probably)`;

// this function allows a button to add Text to the body of the html
function giveBirth() {
    var t = document.createTextNode("Never Gonna Give You Up, Never Gonna Let You Down ");
    document.body.appendChild(t);
}
// don't judge me

// this block of code changes the text in the footer by giving it a class of 'change this'
var changePTag = document.getElementById('needChange');
changePTag.classList.add('changeThis');

// this block of code changes all those "ugly texts" with the class of 'change this', to something more fun!
var changeThis = document.getElementsByClassName('changeThis');
for (var i=0; i<changeThis.length; i++) {
    changeThis[i].innerText = `Good thing I won't be graded by how bad I look!`;
}

// this block of code messes around with the class of the footer
var classChange = document.getElementById('classListTest');
classChange.classList.add("goodClass");
classChange.classList.remove("removeThis");
classChange.classList.toggle("goodClass");

// That's all folks!