var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var removeButtons = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}



function removeParent(event) {
	event.target.removeEventListener("click", removeParent, false);
	event.target.parentNode.remove();
}

function createListElement() {
	var li = document.createElement("li");

	var button = document.createElement("button");
	button.innerHTML = "Remove";
	button.onclick = removeParent;

	li.addEventListener("click", toggleListItemAfterClick);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItemAfterClick(event) {
	let itemClass = event.target.getAttribute("class");
	itemClass === "done" ? event.target.setAttribute("class", "") : event.target.setAttribute("class", "done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function addEventListenerToListItems () {
	var i;
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggleListItemAfterClick);
	}
}

function addEventListenerToButtons () {
	for (var i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", removeParent, false);
	}
}

addEventListenerToListItems();
addEventListenerToButtons();