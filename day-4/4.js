const TAX_RATE = 0.05;
const SPENDING_THRESHOLD = 2000;
const PHONE_PRICE = 800;
const ACCESSORY_PRICE = 30;

var amount = 0;
bank_balance = prompt("Enter your bank balance:")

function calculateTax(amount){
	return amount * TAX_RATE; 
}

function format(amount)
{
	return "$" + amount.toFixed(2);
}

while (amount < bank_balance)
{
	console.log("Entered while loop");
	amount += PHONE_PRICE;
	console.log(amount);
	if (amount< ACCESSORY_PRICE)
	{
	console.log("Entered if loop inside while");
	amount += ACCESSORY_PRICE;
	console.log(amount);
	}
}
amount += calculateTax(amount);
if (amount > bank_balance)
{
	console.log("You can't afford this.");
}
else
{
	console.log("Congratulations on your purchase.");
}