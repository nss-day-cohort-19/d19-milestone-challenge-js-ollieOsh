var height = document.getElementById("height"),
	char = document.getElementById("character"),
	button = document.getElementById("button"),
	obj = {};

function tree(leaf) {
	var result = "";

	if(!(leaf.hgt) || !(leaf.chr)) {
		alert("Both fields must have a value")
	} else{
		for(var i = 1;i <= leaf.hgt; i++){
			var center = " ",
			length = leaf.chr.length;

			result += center.repeat(length * (leaf.hgt - i)) + leaf.chr.repeat((i * 2) - 1) + "\n";
		}
		console.log(result);
	}
}

button.onclick =  function() {
	obj.hgt = height.value;
	obj.chr = char.value;
	tree(obj);
}

height.onkeydown = function (event){
	if(event.keyCode == 13) {
		obj.hgt = height.value;
		obj.chr = char.value;
		tree(obj);
	}
}

char.onkeydown = function (event){
	if(event.keyCode == 13) {
		obj.hgt = height.value;
		obj.chr = char.value;
		tree(obj);
	}
}