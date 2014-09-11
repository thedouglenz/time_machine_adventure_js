// local game object to keep a few things out of global scope
var G = {};

// The game data
G.nodes = game.nodes;

// Init function runs after DOM ready
function init() {
	// Page elements that we need to change
	G.currTitleEl = document.getElementById('current-title');
	G.currImageEl = document.getElementById('current-image');
	G.currTextEl = document.getElementById('current-text');
	G.currChoicesEl = document.getElementById('current-choices-ul');
	G.audioEl = document.getElementById('audio-player');
	
	// Start a new game
	newGame(G);
}

// Game play
function newGame() {
	choiceMade(0);
}

function choiceMade(choiceNum) {
	n = G.nodes[choiceNum];
	newTitle = n.title;
	newText = n.text;
	newImage = n.image;
	newChoices = n.children;
	sound = n.sound;

	setPageStuff(newTitle, newText, newImage, newChoices, sound);
}

function setPageStuff(title, text, image, choices, sound) {
	G.currTitleEl.innerHTML = title;
	G.currTextEl.innerHTML = text;
	G.currImageEl.src = image;

	if(choices.length == 0) {
		G.currChoicesEl.innerHTML = "<li><button onclick='location.reload()'>Start over</button></li>"
	} else {
		var choiceLiString = "";
		choices.forEach(function(c) {
			choiceLiString += "<li><button onclick='choiceMade("+c+")'>" 
			+ G.nodes[c].choiceText + 
			"</button></li>"
		});
		G.currChoicesEl.innerHTML = choiceLiString;
		if(sound != '') {
			// Wonderful audio is me playing guitar
			G.audioEl.innerHTML = "<audio autoplay loop><source src='" + sound + ".ogg' type='audio/ogg'><source src='" + sound + ".mp3' type='audio/mpeg'></audio>";
		}
	}
}