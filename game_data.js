var game = {}
game.nodes =
[
	{ // 0
		name:'start',
		children:[1, 2],
		title:'A time machine adventure game',
		text:'You discover a time machine in your friend\'s walk in closet while she is out of town! You believe she invented it. It is clearly	a time machine as it is labeled as such! You are about to try it out.',
		image:'still_at_home.png',
		sound:'So_time_machine'
	},
	{ // 1
		name:'dinosaurs',
		choiceText: 'go back in time to when there were dinosaurz',
		children:[3, 4],
		title:'dinosaurz',
		text:'You arrive at a place and time that can only be described by that image up there. You are still on Earth but the land and trees are of unnatural colors. You can\'t see dinosaurs anywhere right now but you are certain they are here somewhere. You may want to either make a fire now or hunt. Later you can explore that cave probably!',
		image:'back_in_time.png',
		sound:''
	},
	{ // 2
		name:'space',
		choiceText: 'go back in time to before the Earth existed',
		children:[10, 11],
		title:'Space',
		text:'Wow, you are in space now. An asteroid is approaching you. You can either jump out and ride the asteroid or take a swing by the sun.',
		image:'in_space.png',
		sound:''
	},
	{ // 3
		name:'makefire',
		choiceText: 'make a fire now',
		children:[4,5],
		title:'Made a fire!',
		text:'Whoa, you made a fire out here. With the fire lit, you can now safely explore that cave. Or maybe you should hunt!',
		image:'made_fire.png',
		sound:''
	},
	{ // 4
		name:'hunt',
		choiceText:'hunt for food',
		children:[8, 9],
		title:'Hunting is Hard',
		text:'You stray away from your fire until nightfall without finding any good food. A dinosaur finally attacks you! You can either run or run fast!',
		image:'hunting_is_hard.png',
		sound:''
	},
	{ // 5
		name:'searchcave',
		choiceText: 'explore that cave',
		children:[6, 7],
		title:'Cavez rock',
		text:'You enter the cave to find the oddest of all sights. there is a slimy green arm on the floor to your left and a rock wall with glimmering gold in it! Now, instead of hunting, you could eat that arm or maybe mine the gold!',
		image:'in_cave.png',
		sound:''
	},
	{ // 6
		name:'diepoison',
		choiceText: 'eat the arm, I\'m starving',
		children:[],
		title:'Poison :-( ',
		text:'You have died of poison found in the arm :-(',
		image:'die.png',
		sound:''
	},
	{ // 7
		name:'dieEM',
		choiceText: 'mine me some gold!',
		children:[],
		title:'Electromagnetic Wizardry',
		text:'It seems your time machine is allergic to being near the element gold! When you bring it into the ship, terrible things related to electromagnetism happen therein! You die as a result.',
		image:'die.png',
		sound:''
	},
	{ // 8
		name:'dieslow',
		choiceText: 'run',
		children:[],
		title:'Too Slow',
		text:'Why did you run but not run fast? You are eaten by the dinosaur.',
		image:'die.png',
		sound:''
	},
	{ // 9
		name:'runfast',
		choiceText: 'run fassstttt',
		children:[3],
		title:'Made it!',
		text:'You are now back at your time mcachine, safely far from that convincing dinosaur drawing. Let\'s think about making a fire.',
		image:'back_in_time.png',
		sound:''
	},
	{ // 10
		name:'diedumb',
		choiceText: 'ride that asteroid!',
		children:[],
		title:'Wow',
		text:'You jump on the asteroid and it takes you far far away from your time machine. You die after a few days.',
		image:'die.png',
		sound:''
	},
	{ // 11
		name:'visitsun',
		choiceText: 'Let\'s go to the sun!',
		children:[5, 10],
		title:'The Sun',
		text:'You land your time machine on the sun. The asteroid from earlier seems to be headed this way. Might be cool to ride that thing! But there is also a strange looking cave here...',
		image:'went_to_sun.png',
		sound:''
	}
];