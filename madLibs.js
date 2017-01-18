var storyNumber;

function getStoryNumber() {
	if (document.getElementById('storyNumberOne').checked === true) {
		storyNumber = 1;
	}else if (document.getElementById("storyNumberTwo").checked === true) {
		storyNumber = 2;
	} else if (document.getElementById("storyNumberThree").checked === true) {
		storyNumber = 3;
	}
}

function getRanIdx (){
	return Math.floor(Math.random() * 100);
}

function genFinalWords(id, replacmentArr){
	input = document.getElementById(id);
	value = input.value;
	var wordArr = value.split(",");
	for (var i = 0; i <= 3; i++) {
		if (wordArr[i] === undefined || wordArr[i] === "") {
			randomIndexNumber = getRanIdx();
			wordArr[i] = replacmentArr[randomIndexNumber]
		};
	}
	return wordArr;
}

function generateStory(){
	getStoryNumber();

	if (storyNumber === undefined || storyNumber === null) {
		alert("You need to select a story to generate a Mad Lib");
		return;
	}

	var nounsArray = genFinalWords('noun', replacementNouns);
	var adjectivesArray = genFinalWords('adjective', replacementNouns);
	var adverbsArray = genFinalWords('adverb', replacementNouns);
	var verbsArray = genFinalWords('verb', replacementNouns);

	if (storyNumber === 1) {
		return 'Every Christmas we '+ verbsArray[0] +' to a '+ adjectivesArray[0] +' tree farm far away.'+
		'This is not just any ' + adjectivesArray[1] + ' tree farm. My dad and I ' + verbsArray[1] +
		' onto the ' + nounsArray[0] + ' to ' + verbsArray[2] + ' for the perfect ' + nounsArray[1] + '. '+
		'Some people like them ' + adjectivesArray[2] + ', but I prefer them ' + adjectivesArray[3] + '. After '+
		'searching for hours I usually ' + adverbsArray[0] + ' exclaim "Dad! The perfect tree is over '+
		'there!" Off we ' + verbsArray[3] + ' to get the tree. The problem is we always forget the '+
		nounsArray[2] + ' and the ' + nounsArray[3] + '. But at the end of the day we ' + adverbsArray[1] +
		' get the tree and head home ' + adverbsArray[2] + '. "I wish it was Christmas all year round" '+
		'I ' + adverbsArray[3] + ' think to myself.';
	} else if (storyNumber === 2) {
		return 'Today I went shopping. When I arrived at the store I saw a ' + adjectivesArray[0] + ' ' + nounsArray[0] + 
		', who upon noticing me ' + adverbsArray[0] + ' said I need to ' + verbsArray[0] + '. Well, that was ' + adjectivesArray[1] + 
		' I thought to myself and walked in the store. The store had rearranged its inventory, so I felt ' + 
		adverbsArray[1] + ' lost. I   walked up to store clerk and said ' + adverbsArray[2] + ' I am looking for a ' + 
		adjectivesArray[3] + ' ' + nounsArray[1] + ' that doesnt ' + verbsArray[1] + 
		' as often as the last one I had. The store clerk looked at me with a ' 
		+ adjectivesArray[3] + ' look in his eye and said, What you are looking for can be found by the ' + nounsArray[2] + ', if you see a ' + 
		nounsArray[3] + ' that ' + adverbsArray[3] + ' can ' + verbsArray[2] +
		', then you ve gone too far. As I tried to understand his directions, I thought to myself, I should have just ordered it on amazon.com, Their products seem to ' 
		+ verbsArray[3] + ' the perfect amount ';
	} else if (storyNumber === 3){	
		return 'Many say that brainstorming is ' + adjectivesArray[0] + ' and does not ' + verbsArray[0] +  '. However, with the combination of the right computer and ' +   
		nounsArray[0] + ' anyone  can lead a good ' + verbsArray[1]  + '. When you have ' + adverbsArray[0] + ' pulled together a ' + adjectivesArray[1] +  ' group of ' +  
		nounsArray[1] +  ' in a big room with lots of TV\s then  magical things will happen. In the past we have ' + adverbsArray[1] +   
		' suggested  participants work together to find the most ' + adjectivesArray[2] +   ' solution. The   most difficult part is many ' +   
		adjectivesArray[3] + " " + nounsArray[2]  + ' like to ' + verbsArray[2] + '. This has proved to be ' + adverbsArray[3] + ' problematic.  But in the end the most important '   
		+ nounsArray[3]  + ' usually is brought to light.  Typically we try to encourage ideas to ' + verbsArray[3] +  
		', and never shut ideas  down. This concludes our instructions. Thanks for ' + adverbsArray[3] + ' listening! ';
	}
}

function displayStory() {
	getStoryNumber();

	if (storyNumber === undefined || storyNumber === null) {
		alert("You need to select a story to generate a Mad Lib");
		return;
	}
	
	var el = document.getElementById("story");
	el.innerHTML = generateStory();
}

