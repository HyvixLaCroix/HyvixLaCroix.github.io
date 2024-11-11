var HeatControlZero = new Roulette(
	"Heat Control - Zero",
	"Start and finish a Heat Control game with the following settings. " + DomTagClause + " Suffer a punishment of the Dom's choice if you cum without permission or fail to cum when prompted."
);
HeatControlZero.addResult(["Duration: 10 minutes", "Duration: 20 minutes", "Duration: 30 minutes", "Duration: 40 minutes", "Duration: 50 minutes", "Duration: 60 minutes"]);
HeatControlZero.addResult(["Cum chance: 0%", "Cum chance: 1%", "Cum chance: 2%", "Cum chance: 3%", "Cum chance: 4%", "Cum chance: 5%"]);
HeatControlZero.addResult(["Download one of the images.", "Download one image per 15 minutes.", "Download one image per 10 minutes.", "Download one image per 5 minutes."]);

var Chastity = new Roulette(
	"Chastity",
	"Put on the chastity cage. Keep it on until all of the following requirements are met."
);
Chastity.addResult(["Stay caged at least 1 day.", "Stay caged at least 2 days.", "Stay caged at least 3 days.", "Stay caged at least 5 days.", "Stay caged at least 7 days."]);
Chastity.addResult(["No orgasms allowed or required.", "No orgasms allowed or required.", "Have (exactly) 1 caged orgasm. (You still need permission.)", "Have (exactly) 2 caged orgasms. (You still need permission.)", "Have (exactly) 3 caged orgasms. (You do not need permission.)"]);
Chastity.addResult(["Complete at least 1 additional task.", "Complete at least 2 additional tasks.", "Complete at least 3 additional tasks.", "Complete at least 4 additional tasks.", "Complete at least 5 additional tasks."]);

var GoddessWorship = new Roulette(
	"Goddess Worship",
	"Your Dom(me) will choose a character with a suitable amount of content on E621 (or allow a previous choice to be rolled randomly). Create a new image album for them. You may only look at and download porn of that character until you meet the goals, unless expressly directed otherwise. (Goddesses need not be female, but masculine characters are also 'Goddess'.)");
GoddessWorship.addResult(["Your suggested Goddess is Loona.", "Your suggested Goddess is Krystal.", "Your suggested Goddess is Renamon.", "Your suggested Goddess is Lucario.", "Your suggested Goddess is Mal0.", "Your suggested Goddess is Freya Crescent."]);
GoddessWorship.addResult(["Worship your Goddess for at least 3 days.", "Worship your Goddess for at least 7 days.", "Worship your Goddess for at least 2 weeks. Double the amount of content needed."]);
GoddessWorship.addResult(["You need at least 5 new images or videos to continue.", "You need at least 10 new images or videos to continue.", "You need at least 15 new images or videos to continue."]);
GoddessWorship.addResult(["If your Goddess is not featured in this task: You may choose to either add them to this task, or roll the Pruning task on them, putting allowed content into A, B, or C tier as appropriate, until the album is empty.", "If your Goddess is not featured in this task: Roll the Pruning task on them, putting allowed content into A, B, or C tier as appropriate, until the album is empty."]);

var Ruins = new Roulette(
	"Ruined Orgasms",
	"A ruined orgasm should feel like a particularly hard edge, and should feature semen without the feel of release. You still need permission to cum; enjoy not doing it properly~"
);
Ruins.addResult(["Ruin just your next orgasm.", "Ruin your next 2 orgasms.", "Ruin your next 3 orgasms.", "Ruin your next 5 orgasms.", "Ruin your next 7 orgasms."]);
Ruins.addResult(["Don't have any of them immediately.", "Have one of them immediately.", "Have half of them (rounded down) immediately."]);

var Bondage = new Roulette(
	"Self Bondage",
	"You deserve a time out. Put your phone out of reach while you think about how naughty you are. Put on a leash and collar, locking the loose end to the bed. Then put on all of the following additional items, for the specified duration."
);

Bondage.addResult(["Wear wrist cuffs.", "..."]);
Bondage.addResult(["Wear a ballgag.", "..."]);
Bondage.addResult(["Wear a blindfold.", "..."]);
Bondage.addResult(["Wear a plague mask.", "..."]);
Bondage.addResult(["Tie your legs up.", "..."]);
Bondage.addResult(["Put on a chastity cage. Take it off afterwards.", "Put on a chastity cage. Roll a Chastity punishment afterwards.", "...", "..."]);
Bondage.addResult(["Stay bound for 20 minutes.", "Stay bound for 30 minutes.", "Stay bound for 40 minutes.", "Stay bound for 50 minutes.", "Stay bound for 60 minutes."]);

/**********************
End of Task Definitions
***********************/


var LongPunishments = new Roulette(
	"Involved Punishments",
	"More severe punishments for more severe foxes."
);
LongPunishments.addResult(HeatControlZero);
LongPunishments.addResult(GoddessWorship);
LongPunishments.addResult(Chastity);
LongPunishments.addResult(Ruins);
LongPunishments.addResult(Bondage);
