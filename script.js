/** @format */

const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

for (const item of buttons) {
	const collectedInteraction = (item.onclick = () => {
		if (item.id === "clear") {
			display.innerText = "";
		} else if (item.id === "backspace") {
			/** @type {string} */
			let text = display.innerText.toString();
			display.innerText = text.substring(0, text.length - 1);
		} else if (display.innerText !== "" && item.id === "equal") {
			display.innerText = eval(display.innerText);
		} else if (display.innerText === "" && item.id === "equal") {
			display.innerText = "Empty!";
			setTimeout(() => (display.innerText = ""), 2000);
		} else {
			display.innerText += item.id;
		}

		return collectedInteraction;
	});
}

const themeToggleButton = document.querySelector(".theme_toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggle_icon");

let isDark = true;

themeToggleButton.onclick = () => {
	calculator.classList.toggle("dark");

	themeToggleButton.classList.toggle("active");

	isDark = !isDark;
};
