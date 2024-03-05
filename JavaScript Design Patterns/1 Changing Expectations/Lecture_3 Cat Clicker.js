var catImage = document.getElementById("cat");
var clickCount = document.getElementById("clicks");
let lastClickTime = 0;

// Initialize click count to 0
clickCount.textContent = "0";

// Add click event listener to cat image
catImage.addEventListener("click", function() {
	const currentTime = new Date().getTime();

	// Check if the time elapsed since last click is greater than 1 second
	if (currentTime - lastClickTime >= 1) {
		const count = parseInt(clickCount.textContent) + 1;

		// Update click count and last click time
		clickCount.textContent = count.toString();
		lastClickTime = currentTime;
	}
});