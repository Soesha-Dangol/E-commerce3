let showDetails = false;
function readMore() {
if (!showDetails) {
document.getElementById("sidebar__card").innerHTML = `!! Dashain Bada Dhamaka !!
Discount on each & every items .
The time to grab the product you always wanted to .
The big festive offers you don't want to miss out`;
document.getElementById("details").innerHTML = "Hide Details";
}
else {
document.getElementById("sidebar__card").innerHTML = `STEAL THE DEAL!`;
document.getElementById("details").innerHTML = "Read More";
}
showDetails = !showDetails;
}