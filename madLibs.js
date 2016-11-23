var input;
var el;

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
	var verbsValue = input.value;
	var verbsArray = verbsValue.split(",");
}

function grabWords() {
	grabNouns();
	grabAdjectives();
	grabAdverbs();
	grabVerbs();
	return 
}

var christmasOne = 'Every Christmas we '+ verbsArray[0] +' to a '+ adjectivesArray[0] +' tree farm far away.'+
	'This is not just any ' + adjectivesArray[1] + ' tree farm. My dad and I ' + verbsArray[1] +
	' onto the ' + nounsArray[0] + ' to ' + verbsArray[2] + ' for the perfect ' + nounsArray[1] + '. '+
	'Some people like them ' + adjectivesArray[2] + ', but I prefer them ' + adjectivesArray[3] + '. After '+
	'searching for hours I usually ' + adverbsArray[0] + ' exclaim "Dad! The perfect tree is over '+
	'there!" Off we ' + verbsArray[3] + ' to get the tree. The problem is we always forget the '+
	nounsArray[2] + ' and the ' + nounsArray[3] + '. But at the end of the day we ' + adverbsArray[1] +
	' get the tree and head home ' + adverbsArray[2] + '. "I wish it was Christmas all year round" '+
	'I ' + adverbsArray[3] + ' think to myself.';

function displayStory() {
	grabWords();
	el = document.getElementById("story");
	el.innerHTML = christmasOne;
}