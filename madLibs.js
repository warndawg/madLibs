var input

function grabNouns(){
	input = document.getElementById("noun");
	var nounsValue = input.value;
	var nounsArray = nounsValue.split(",");
}
function grabAdjectives(){
	input = document.getElementById("adjective");
	var adjectivesValue = input.value;
	var adjectivesArray = adjectivesValue.split(",");
}
function grabAdverbs(){
	input = document.getElementById("adverb");
	var adverbsValue = input.value;
	var adverbsArray = adverbsValue.split(",");
}
function grabVerbs(){
	input = document.getElementById("verb");
	var varbsValue = input.value;
	var verbsArray = verbsValue.split(",");
}
