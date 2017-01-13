var input;
var storyNumber;
var one;
var two;
var three;

var replacmentNouns = [
"time",	
"year",	
"people",	
"way",	
"day",	
"man",	
"thing",	
"woman",	
"life",	
"child",	
"world",	
"school",	
"state",	
"family",	
"student",	
"group",	
"country",	
"problem",	
"hand",	
"part",	
"place",	
"case",	
"week",	
"company",	
"system",	
"program",	
"question",	
"work",	
"government",	
"number",	
"night",	
"office",
"point",	
"home",	
"water",	
"room",	
"mother",	
"area",	
"money",	
"story",	
"fact",	
"month",	
"lot",	
"right",	
"study",	
"book",	
"eye",	
"job",	
"word",	
"business",
"issue",
"side",
"kind",
"head",
"house",
"service",
"friend",
"father",
"power",
"hour",
"game",
"line",
"end",
"member",
"law",
"car",
"city",
"community",
"name",
"president",
"team",
"minute",
"idea",
"kid",
"body",
"information",
"back",
"parent",
"face",
"others",
"level",
"mr",
"door",
"health",
"person",
"art",
"war",
"history",
"party",
"result",
"change",
"morning",
"reason",
"research",
"girl",
"guy",
"food",
"moment",
"air",
"teacher"];

var replacmentAdjectives = [
"other",
"new",
"good",
"high",
"old",
"great",
"big",
"American",
"small",
"large",
"national",
"young",
"different",
"black",
"long",
"little",
"important",
"political",
"bad",
"white",
"real",
"best",
"right",
"social",
"only",
"public",
"sure",
"low",
"early",
"able",
"human",
"local",
"late",
"hard",
"major",
"better",
"economic",
"strong",
"possible",
"whole",
"free",
"military",
"true",
"federal",
"international",
"full",
"special",
"easy",
"clear",
"recent",
"certain",
"personal",
"open",
"red",
"difficult",
"available",
"likely",
"short",
"single",
"medical",
"current",
"wrong",
"private",
"past",
"foreign",
"fine",
"common",
"poor",
"natural",
"significant",
"similar",
"hot",
"dead",
"central",
"happy",
"serious",
"ready",
"simple",
"left",
"physical",
"general",
"environmental",
"financial",
"blue",
"democratic",
"dark",
"various",
"entire",
"close",
"legal",
"religious",
"cold",
"final",
"main",
"green",
"nice",
"huge",
"popular",
"traditional",
"cultural"];

var replacmentAdvarbs = [
"up",
"so",
"out",
"just",
"now",
"how",
"then",
"more",
"also",
"here",
"well",
"only",
"very",
"even",
"back",
"there",
"down",
"still",
"in",
"as",
"to",
"when",
"never",
"really",
"most",
"on",
"why",
"about",
"over",
"again",
"where",
"right",
"off",
"always",
"today",
"all",
"far",
"long",
"away",
"yet",
"often",
"ever",
"however",
"almost",
"later",
"much",
"once",
"least",
"ago",
"together",
"around",
"already",
"enough",
"both",
"maybe",
"actually",
"probably",
"home",
"of", 
"course",
"perhaps",
"little",
"else",
"sometimes",
"finally",
"less",
"better",
"early",
"especially",
"either",
"quite",
"simply",
"nearly",
"soon",
"certainly",
"quickly",
"no",
"recently",
"before",
"usually",
"thus",
"exactly",
"hard",
"particularly",
"pretty",
"forward",
"ok",
"clearly",
"indeed",
"rather",
"that",
"tonight",
"close",
"suddenly",
"best",
"instead",
"ahead",
"fast",
"alone",
"eventually",
"directly"];

var replacmentVarbs = [
"be",
"have",
"do",
"say",
"go",
"can",
"get",
"would",
"make",
"know",
"will",
"think",
"take",
"see",
"come",
"could",
"want",
"look",
"use",
"find",
"give",
"tell",
"work",
"may",
"should",
"call",
"try",
"ask",
"need",
"feel",
"become",
"leave",
"put",
"mean",
"keep",
"let",
"begin",
"seem",
"help",
"talk",
"turn",
"start",
"might",
"show",
"hear",
"play",
"run",
"move",
"like",
"live",
"believe",
"hold",
"bring",
"happen",
"must",
"write",
"provide",
"sit",
"stand",
"lose",
"pay",
"meet",
"include",
"continue",
"set",
"learn",
"change",
"lead",
"understand",
"watch",
"follow",
"stop",
"create",
"speak",
"read",
"allow",
"add",
"spend",
"grow",
"open",
"walk",
"win",
"offer",
"remember",
"love",
"consider",
"appear",
"buy",
"wait",
"serve",
"die",
"send",
"expect",
"build",
"stay",
"fall",
"cut",
"reach",
"kill",
"remain"
];

function getStoryNumber() {
	if (document.getElementById('storyNumberOne').checked === true) {
		storyNumber = 1;
	}else if (document.getElementById("storyNumberTwo").checked === true) {
		storyNumber = 2;
	} else {
		storyNumber = 3;
	}
}

function generateStory(){
	getStoryNumber();
	var randomIndexNumber

	input = document.getElementById("noun");
	var nounsValue = input.value;
	var nounsArray = nounsValue.split(",");
	for (var i = 3; i >= 0; i--) {
		if (nounsArray[i] === "") {
			randomIndexNumber = Math.floor(Math.random() * 100);
			nounsArray[i] = replacmentNouns[randomIndexNumber]
		};
	};

	input = document.getElementById("adjective");
	var adjectivesValue = input.value;
	var adjectivesArray = adjectivesValue.split(",");
	for (var i = 3; i >= 0; i--) {
		if (adjectivesArray[i] === "") {
			randomIndexNumber = Math.floor(Math.random() * 100);
			adjectivesArray[i] = replacmentAdjectives[randomIndexNumber]
		};
	};

	input = document.getElementById("adverb");
	var adverbsValue = input.value;
	var adverbsArray = adverbsValue.split(",");
	for (var i = 3; i >= 0; i--) {
		if (adverbsArray[i] === "") {
			randomIndexNumber = Math.floor(Math.random() * 100);
			adverbsArray[i] = replacmentAdvarbs[randomIndexNumber]
		};
	};

	input = document.getElementById("verb");
	var verbsValue = input.value;
	var verbsArray = verbsValue.split(",");
	for (var i = 3; i >= 0; i--) {
		if (verbsArray[i] === "") {
			randomIndexNumber = Math.floor(Math.random() * 100);
			verbsArray[i] = replacmentVarbs[randomIndexNumber]
		};
	};

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
		return 'Today I went shopping. When I arrived at the store I saw a' + adjectivesArray[0] + ' ' + nounsArray[0] + 
		', who upon noticing me' + adverbsArray[0] + 'said I need to' + verbsArray[0] + '. Well, that was' + adjectivesArray[1] + 
		'I thought to myself and walked in the store. The store had rearranged its inventory, so I felt' + 
		adverbsArray[1] + 'lost. I   walked up to store clerk and said' + adverbsArray[2] + 'I am looking for a' + 
		adjectivesArray[3] + ' ' + nounsArray[1] + 'that doesn’t' + verbsArray[1] + 
		'as often as the last one I had. The store clerk looked at me with a' 
		+ adjectivesArray[3] + 'look in his eye and said, What you are looking for can be found by the' + nounsArray[2] + ', if you see a' + 
		nounsArray[3] + 'that' + adverbsArray[3] + 'can' + verbsArray[2] +
		', then you ve gone too far. As I tried to understand his directions, I thought to myself, I should have just ordered it on amazon.com, Their products seem to' 
		+ verbsArray[3] + 'the perfect amount';
	} else if (storyNumber === 3){	
		return 'Many say that brainstorming is' + adjectivesArray[0] + 'and does not' + verbsArray[0] +  '. However, with the combination of the right computer and' +   
		nounsArray[0] + 'anyone  can lead a good ' + verbsArray[1]  + '. When you have' + adverbsArray[0] + 'pulled together a' + adjectivesArray[1] +  'group of' +  
		nounsArray[1] +  'in a big room with lots of TV\s then  magical things will happen. In the past we have' + adverbsArray[1] +   
		'suggested  participants work together to find the most' + adjectivesArray[2] +   'solution. The   most difficult part is many' +   
		adjectivesArray[3] + nounsArray[3]  + 'like to ' + verbsArray[2] + '. This has proved to be' + adverbsArray[3] + 'problematic.  But in the end the most important'   
		nounsArray[3]  + 'usually is brought to light.  Typically we try to encourage ideas to' + verbsArray[3] +  
		', and never shut ideas  down. This concludes our instructions. Thanks for' + adverbsArray[3] + 'listening!';
	}
}

function displayStory() {
	var el = document.getElementById("story");
		el.innerHTML = generateStory();
	}

