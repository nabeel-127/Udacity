var catImage1 = document.getElementById("cat1");
var catImage2 = document.getElementById("cat2");
var clickCount = document.getElementById("clicks");
let lastClickTime = 0;

// Initialize click count to 0
//clickCount.textContent = "1";

// Add click event listener to cat image
catImage1.addEventListener("click", function() {
	const currentTime = new Date().getTime();

	// Check if the time elapsed since last click is greater than 1 second
	if (currentTime - lastClickTime >= 1) {
		// Update click count and last click time
		clickCount.textContent = (parseInt(clickCount.textContent) + 1).toString();
		lastClickTime = currentTime;
	}
});

// Add click event listener to cat image
catImage2.addEventListener("click", function() {
	const currentTime = new Date().getTime();

	// Check if the time elapsed since last click is greater than 1 second
	if (currentTime - lastClickTime >= 1) {
		const count = parseInt(clickCount.textContent) + 1;
		// Update click count and last click time
		clickCount.textContent = count.toString();
		lastClickTime = currentTime;
	}
});