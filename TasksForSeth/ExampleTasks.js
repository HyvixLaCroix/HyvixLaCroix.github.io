var JanineTask = new Roulette(
	"Kiss Janine",
	"Cum and/or edible lube is optional.",
	);
JanineTask.addResult(["Kiss Janine for 5 minutes...", "Kiss Janine for 10 minutes...", "Kiss Janine for 15 minutes..."]);
JanineTask.addResult(["... and then put her away.", "... and then beg to edge inside her.", "... and then beg to cum inside her."]);

var AustinTask = new Roulette(
	"Pleasure Austin",
	"Does not involve anal penetration - everything else is on the table."
	);
AustinTask.addResult(["Lick and Kiss Austin for 5 minutes. Then...", "Lick and Kiss Austin for 10 minutes. Then...", "Lick and Kiss Austin for 15 minutes. Then..."]);
AustinTask.addResult([ "Suck Austin...", "Stroke Austin...", "Frot with Austin..."]);
AustinTask.addResult(["... for 5 minutes.", "... for 10 minutes.", "... for 15 minutes."]);

var HeatControlTest = new Roulette(
	"Heat Control Test",
	"A basic version for example/testing purposes."
);
HeatControlTest.addResult(GetTags());

var ExampleTasks = new Roulette(
	"Example Tasks from Snoozel",
	"A few tasks chosen by Snoozel for prototyping.",
	[HeatControlTest, PlugTask, JanineTask, AustinTask]
);