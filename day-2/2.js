const TAX_RATE = 0.05;
var principle = 1000;
var period = 4;

var interest = principle * period * TAX_RATE;

//Checking the feasibility.
if (interest > 1000)
{
	console.log("This is a good deal.")
}
else
{
	console.log("This isn't gonna work.")
}