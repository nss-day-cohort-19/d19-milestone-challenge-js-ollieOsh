var height = document.getElementById("height"),
	char = document.getElementById("character"),
	button = document.getElementById("button");

function tree(hgt, chr) {
	var result = "";

	if(!(hgt) || !(chr)) {
		alert("Both fields must have a value")
	} else{
		for(var i = 1;i <= hgt; i++){
			var center = " ",
			length = chr.length;

			result += center.repeat(length * (hgt - i)) + chr.repeat((i * 2) - 1) + "\n";
		}
		console.log(result);
	}
}

button.onclick =  function() {
	tree(height.value, char.value)
};
height.onkeydown = function (event){
	if(event.keyCode == 13) {
			tree(height.value, char.value);
	}
}

char.onkeydown = function (event){
	if(event.keyCode == 13) {
			tree(height.value, char.value);
	}
}