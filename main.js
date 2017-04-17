var height = document.getElementById("height"),
	char = document.getElementById("character"),
	button = document.getElementById("button");

function tree() {
	var result = "";

	if(!(height.value) || !(char.value)) {
		alert("Both fields must have a value")
	} else{
		for(var i = 1;i <= height.value; i++){
			var center = " ",
			length = char.value.length;

			result += center.repeat(length * (height.value - i)) + char.value.repeat((i * 2) - 1) + "\n";
		}
		console.log(length);
		console.log(result);
	}
}

button.onclick =  function() {
	tree()
};
height.onkeydown = function (event){
	if(event.keyCode == 13) {
			tree();
	}
}

char.onkeydown = function (event){
	if(event.keyCode == 13) {
			tree();
	}
}