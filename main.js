/** @format */

const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

const TIMEOUT_SECONDS = 2_000;

/** @param {string} text */
function clearText(text) {
	return text.substring(0, text.length - 1);
}

for (const item of buttons) {
	item.addEventListener("click", (e) => {
		try {
			if (item.id === "clear") {
				display.innerText = "";
			} else if (item.id === "backspace") {
				const text = display.innerText.toString();
				display.innerText = clearText(text);
			} else if (display.innerText !== "" && item.id === "equal") {
				display.innerText = eval(display.innerText);
			} else if (display.innerText === "" && item.id === "equal") {
				display.innerText = "Empty";
				setTimeout(() => (display.innerText = ""), TIMEOUT_SECONDS);
			} else {
				display.innerText += item.id;
			}
		} catch (error_) {
			console.error(error_);
		}
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
