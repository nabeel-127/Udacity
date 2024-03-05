//Syntax
/*
//var promise = new Promise(function(resolve, reject) {
new Promise(function(resolve, reject) {
	var value = doSomething();
	if (thingWorked) {
		resolve(value);
	} else if (somethingWentWrong) {
		reject();
	}
}).then(function(value) {
	return nextThing(value);
}).catch(rejectFunction);
*/

var promise = Promise(function(resolve, reject) {
	var test = 1;
	if (test == 1) {
		resolve;
	} else {
		reject;
	}
})
.then(console.log("excecuted THEN\n"))
.catch(console.log("excecuted catch\n"));


promise();