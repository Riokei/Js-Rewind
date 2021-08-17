//Get the values from the page.
//control
function getString() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
    //Reverse the string
//logic
function reverseString(userString) {
    let revString = [];



    //reverse it using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    return revString
}
//display the string in the p tag we made
//view result
function displayString() {
    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is:  ${revString}`;


    //show the box
    document.getElementById("alert").classList.remove("invisible");

}
}
