function test(callback) {
	callback();
}

test(testCall);

function testCall() {
	console.log("hello world\n");
}
