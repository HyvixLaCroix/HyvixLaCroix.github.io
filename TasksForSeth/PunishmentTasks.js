var HeatControlZero = new Roulette(
	"Heat Control - Zero",
	"Start and finish a Heat Control game with the following settings. " + DomTagClause + " Suffer a punishment of the Dom's choice if you cum without permission or fail to cum when prompted."
);
HeatControlZero.addResult(["Duration: 10 minutes", "Duration: 20 minutes", "Duration: 30 minutes", "Duration: 40 minutes", "Duration: 50 minutes", "Duration: 60 minutes"]);
HeatControlZero.addResult(["Cum chance: 0%", "Cum chance: 1%", "Cum chance: 2%", "Cum chance: 3%", "Cum chance: 4%", "Cum chance: 5%"]);
HeatControlZero.addResult(["Download one of the images.", "Download one image per 15 minutes.", "Download one image per 10 minutes.", "Download one image per 5 minutes."]);

var ChastityTime = new Roulette(
	"Chastity (Days)",
	"Put on the chastity cage. Keep it on for the specified amount of time, following the specified rules."
);
ChastityTime.addResult(["1 day", "2 days", "3 days", "5 days", "7 days"]);
ChastityTime.addResult(["No edging. No cumming.", "Edge only with permission. No cumming.", "Edge and cum only with permission.", "Edge freely. No cumming.", "Edge freely. Cum only with permission.", "Edge and cum freely."]);

var ChastityCum = new Roulette(
	"Chastity (Orgasms)",
	"Put on the chastity cage. Keep it on until the specified orgasms are achieved. You may not have any additional orgams beyond the specified amount without permission."
);
ChastityCum.addResult(["Seth: 1 orgasm (caged)", "Seth: 2 orgasms (caged)", "Seth: 3 orgasms (caged)"]);
ChastityCum.addResult(["Optional: Dom(me): 1 orgasm", "Optional: Dom(me): 3 orgasms", "Optional: Dom(me): 5 orgasms"]);

var CBT_Cold = new Roulette(
	"CBT - Cold",
	"Your junk is too warm. Let's remedy that... If you have a chastity cage, take it off briefly if necessary."
);
CBT_Cold.addResult(["Put toothpaste on your balls.", "Put toothpaste on your shaft. Then...", "Put toothpaste on your tip. Then...", "Put tootpaste your cock and balls. Then..."]);
CBT_Cold.addResult(["Hold an icecube anywhere on your junk.", "Hold two ice cubes, one on each ball.", "Hold an icecube between your shaft/cage and balls.", "Hold an icecube against your tip/cage."]);
CBT_Cold.addResult(["30 seconds.", "1 minute.", "2 minutes.", "Until the ice has fully melted."]);

var GoddessRestriction = new Roulette(
	"Goddess Restriction",
	"Your Dom(me) will choose a character with a suitable amount of content on E621 (or allow a previous choice to be rolled randomly). Create a new image album for them. You may only look at and download porn of that character until you meet the goals, unless expressly directed otherwise. (Goddesses need not be female, but masculine characters are also 'Goddess'.)");
GoddessRestriction.addResult(["Your suggested Goddess is Loona.", "Your suggested Goddess is Krystal.", "Your suggested Goddess is Renamon.", "Your suggested Goddess is Lucario.", "Your suggested Goddess is Mal0.", "Your suggested Goddess is Freya Crescent."]);
GoddessRestriction.addResult(["Worship your Goddess for at least 1 week.", "Worship your Goddess for at least 2 weeks.", "Worship your Goddess for at least 4 weeks. Double the amount of content needed."]);
GoddessRestriction.addResult(["You need at least 20 new images or videos to continue.", "You need at least 30 new images or videos to continue.", "You need at least 40 new images or videos to continue."]);
GoddessRestriction.addResult(["If your Goddess is not featured in this task: Add them to the task and keep all of their content.", "If your Goddess is not featured in this task: You may choose to either add them to this task, or roll the Pruning task on them, putting allowed content into A, B, or C tier as appropriate, until the album is empty.", "If your Goddess is not featured in this task: Roll the Pruning task on them, putting allowed content into A, B, or C tier as appropriate, until the album is empty."]);

var Pruning = new Roulette(
	"Pruning Porn",
	"Let's clear out some of your saved porn. Be sure to show your selections to your Dom(me).");
Pruning.addResult(["Select 4 items at random...", "Select 6 items at random...", "Select 8 items at random...", "Select 10 items at random..."]);
Pruning.addResult(["... from C-Tier.", "... from B-Tier.", "... from A-Tier.", "... from A, B, and C tiers. (Halve the number of items.)",  "... from a random Goddess folder.",  "... from each Goddess folder. (Halve the number of items.)"]);
Pruning.addResult(["Stare at each one for 3 minutes without touching.", "Stare at each one for 1 minute while stroking. (Do not edge or cum.)", "Edge to each one. (Take your time.)"]);
Pruning.addResult(["Delete all of them.", "Choose your favorite one. Delete the rest. Beg your Dom(me) to let you keep it.", "Ask your Dom(me) to choose one to let you keep. (They can decide to choose none of them.) Delete the rest."]);

var Ruins = new Roulette(
	"Ruined Orgasms",
	"A ruined orgasm should feel like a particularly hard edge, and should feature semen without the feel of release. You still need permission to cum; enjoy not doing it properly~"
);
Ruins.addResult(["Ruin just your next orgasm.", "Ruin your next 2 orgasms.", "Ruin your next 3 orgasms.", "Ruin your next 5 orgasms."]);

var Bondage = new Roulette(
	"Self Bondage",
	"You deserve a time out. Put your phone out of reach while you think about how naughty you are. Put on a leash and collar, locking the loose end to the bed. Then put on all of the following additional items, for the specified duration."
);
Bondage.addResult([
	"No other items.",
	"Wrist cuffs.",
	"Ballgag and wrist cuffs.",
	"Blindfold, ballgag, and wrist cuffs.",
	"Blindfold, ballgag, plague mask, and wrist cuffs.",
	"Rope on legs, blindfold, ballgag, plague mask and wrist cuffs.",
	"Chastity cage, rope on legs, blindfold, ballgag, plague mask and wrist cuffs. Afterwards, ask the Dom(me)'s permission to take off the chastity cage, or roll a Chastity punishment task."
]);
Bondage.addResult(["Stay bound for 20 minutes.", "Stay bound for 40 minutes.", "Stay bound for 1 hour."]);

/**********************
End of Task Definitions
***********************/

var PunishmentTasks = new Roulette(
	"Punishments",
	"Used on naughty foxes for admonishment, on disobedient foxes who fail tasks, or on well-behaved foxes to keep them well-behaved."
);
PunishmentTasks.addResult(HeatControlZero);
PunishmentTasks.addResult(GoddessRestriction);
PunishmentTasks.addResult(Pruning);
PunishmentTasks.addResult(ChastityTime);
PunishmentTasks.addResult(ChastityCum);
PunishmentTasks.addResult(CBT_Cold);
PunishmentTasks.addResult(Ruins);
PunishmentTasks.addResult(Bondage);