const toggleBtn = document.getElementById("btn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark");

	if (document.body.classList.contains("dark")) {
		message.classList.add("active");
		message.innerText = "Dark mode activated";

		setTimeout(() => {
			message.classList.remove("active");
		}, 2500);
	} else {
		message.classList.add("active");
		message.innerText = "Light mode activated";

		setTimeout(() => {
			message.classList.remove("active");
		}, 2500);
	}
});
