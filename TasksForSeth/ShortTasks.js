var OptionalLube = [
	"Optional: Apply edible lube.",
	"Optional: Apply cum (with permission)."
];

var KissJanine = new Roulette(
	"Kiss Janine",
	"Self-explanatory."
);
KissJanine.addResult(OptionalLube);
KissJanine.addResult(["Kiss Janine for 2 minutes...", "Kiss Janine for 5 minutes...", "Kiss Janine for 10 minutes..."]);
KissJanine.addResult(["... and then put her away.", "... and then beg to kiss her longer.", "... and then beg to edge inside her.", "... and then beg to cum inside her."]);

var KissAustin = new Roulette(
	"Kiss Austin",
	"Kissing and licking are okay, but no sucking."
);
KissAustin.addResult(OptionalLube);
KissAustin.addResult(["Kiss Austin for 2 minutes...", "Kiss Austin for 5 minutes...", "Kiss Austin for 10 minutes..."]);
KissAustin.addResult(["... and then put him away.", "... and then beg to suck him properly.", "... and then beg to frot with him."]);

var PornDuration = ["Watch for 5 minutes.", "Watch for 10 minutes.", "Watch for 15 minutes."];

var PornVidShort = new Roulette (
	"Watching Porn Videos",
	"Watch videos from E621 without touching, for <i>at least</i> the specified time. (It is okay to rewatch videos. <a href='https://hyvixlacroix.github.io/AutoPlay/'>AutoPlay</a> is a useful utility.) Videos at least 60 seconds long are recommended. " + DomTagClause
);
PornVidShort.addResult(PornDuration);
PornVidShort.addResult(["Download none of the videos.", "Download 1 video.", "Download 2 videos.", "Download 3 videos."]);

var PornSlideShort = new Roulette (
	"Slideshow Porn Images",
	"Watch a slideshow of images from E621 without touching, for <i>exactly</i> the specified time. (<a href='https://strawbshc.itch.io/heat-control-edging-trainer'>Heat Control</a> has a useful utility.) One image per 30-60 seconds is recommended. " + DomTagClause
);
PornSlideShort.addResult(PornDuration);
PornSlideShort.addResult(["Download one of the images.", "Download 1 image.", "Download 2 images.", "Download 3 images.", "Download 4 images.", "Download 5 images."]);

var HeatControlShort = new Roulette(
	"Heat Control",
	"Start and finish a Heat Control game with the following settings. " + DomTagClause + " Suffer a punishment of the Dom's choice if you cum without permission or fail to cum when prompted."
);
HeatControlShort.addResult(["Duration: 5 minutes", "Duration: 10 minutes", "Duration: 15 minutes"]);
HeatControlShort.addResult(["Cum chance: 0%", "Cum chance: 15%", "Cum chance: 30%", "Cum chance: 45%"]);
HeatControlShort.addResult(["Download one of the images.", "Download 1 image.", "Download 2 images.", "Download 3 images.", "Download 4 images.", "Download 5 images."]);

var MonsterMind = new Roulette(
	"Monster Mind",
	"Solve <a href='https://argonvile.itch.io/monstermind'>Monster Mind</a> puzzles of the specified difficulty, <i>or</i> the specified character."
);
MonsterMind.addResult(["Solve 3 sets of Novice puzzles...", "Solve 2 sets of 3-peg puzzles...", "Solve a set of 4-peg puzzles...", "Solve a set of 5-peg puzzles..."]);
MonsterMind.addResult(["OR, solve a set of (non tutorial) puzzles with Grovyle.", "OR, solve a set of puzzles with Smeargle.", "OR, solve a set of puzzles with Buizel.", "OR, solve a set of puzzles with Sandslash.", "OR, solve a set of puzzles with Rhydon.", "OR, solve a set of puzzles with Heracross.", "OR, solve a set of puzzles with Grimer. (Don't forget the insulated glove.)", "OR, solve a set of puzzles with Lucario.", "OR, solve a set of puzzles with Abra."]);
MonsterMind.addResult(["Set the gender(s) to male.", "Set the gender(s) to female.", "Set the gender(s) to default."]);

/**********************
End of Task Definitions
***********************/

var ShortTasks = new Roulette(
	"Short Tasks",
	"Tasks in this group should only take about 10-15 minutes at most, and should involve little or no cleanup."
);
ShortTasks.addResult(KissJanine);
ShortTasks.addResult(KissAustin);
ShortTasks.addResult(PornVidShort);
ShortTasks.addResult(PornSlideShort);
ShortTasks.addResult(HeatControlShort);
ShortTasks.addResult(MonsterMind);