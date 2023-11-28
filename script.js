var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li"); /* Vi laver elementet */
		li.appendChild(document.createTextNode(input.value)); /* Vi tilføjer input værdien til li elementet */
		ul.appendChild(li); /* Vi tilføjer li elementet til listen */
		input.value = "";
}

function addListAfterClick(){
	if (inputLength() >= 2){
		createListElement();
	}	
}

function addListAfterKeydown(event){
	if (inputLength() >= 2 && event.keyCode === 13){
		createListElement();
	}
}

function strikeThrough(event){
	event.target.classList.toggle("done");
	if(event.target.classList.contains("done") ) {

	    var buttonElem = document.createElement("button");
	    buttonElem.innerText = "delete";
	    buttonElem.setAttribute("id", "lb");
	    buttonElem.onclick = function() { // remove list item here
	        this.parentElement.remove()
	    };

	    event.target.appendChild(buttonElem);

	} else {
	    // remove the delete button
	    event.target.querySelector("#lb").remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);
ul.addEventListener("click", strikeThrough);
