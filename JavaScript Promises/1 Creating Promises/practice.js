//Example: Promise
const myPromise = new Promise((resolve, reject) => {
	// Perform an asynchronous operation
	const randomNumber = Math.floor(Math.random() * 10);
	
	if (randomNumber > 5) {
	  // If the operation is successful, resolve the promise
	  resolve(randomNumber);
	} else {
	  // If the operation fails, reject the promise
	  reject(new Error("The number is too low."));
	}
  });
  
  // Use the promise with .then and .catch
  myPromise.then((result) => {
	console.log("Promise resolved with result:", result);
  }).catch((error) => {
	console.error("Promise rejected with error:", error);
  });
  