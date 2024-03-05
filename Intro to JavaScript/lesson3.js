//1
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(maxLength)
{
	var tri = "";
    for (let i = 1; i <= maxLength; i++)
    {
         tri = tri + makeLine(i);
    }
	return tri;
}
console.log(buildTriangle(10));





//2
var udaciFamily = ["Julia", "James", "me"];
console.log(udaciFamily);





//3
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});





//4
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
// var check = function(currentValue, index, array)
// {
// 	if (array[index] % 3 === 0)
// 	{
// 		console.log(currentValue);
// 		array[index] += 100;
// 	}
// }
test.forEach(function(currentValue, myIndex, myArray)
{
	if (myArray[myIndex] % 3 === 0)
	{
		console.log(currentValue);
		myArray[myIndex] += 100;
	}
});
console.log(test);





//5
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(currentValue)
{
    currentValue += currentValue * .15;
    currentValue = Number(currentValue.toFixed(2));
    return currentValue
});
console.log(totals);





