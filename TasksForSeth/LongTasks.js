var Edging = new Roulette(
	"Edging",
	"Spend today edging, the specified number of times within the specified timeframe."
);
Edging.addResult(["5 edges", "10 edges", "15 edges", "20 edges (Double your time frame.)"]);
Edging.addResult(["At least 15 seconds between edges.", "At least 30 seconds between edges.", "At least 1 minute between edges.", "Go completely soft between edges. (Double your time frame.)"]);
Edging.addResult(["You have 2 hours.", "You have 4 hours.", "You have 6 hours.", "You have 12 hours... and double the amount of edges."]);

var Milking = new Roulette(
	"Milking",
	"For pent-up foxes that need serious relief."
);
Milking.addResult(["Get 2 orgasms. (Halve your time frame.)", "Get 3 orgasms.", "Get 5 orgasms.", "Get 7 orgasms. (Double your time frame.)"]);
Milking.addResult(["Do not ruin any of them.", "Ruin at least one of them.", "Ruin half of them (rounded down).", "Ruin all of them."]);
Milking.addResult(["You have 12 hours.", "You have 18 hours.", "You have 24 hours."]);


var PornDuration = ["Watch for 30 minutes.", "Watch for 60 minutes.", "Watch for 90 minutes."];
var PornVidLong = new Roulette (
	"Watching Porn Videos",
	"Watch videos from E621 without touching, for <i>at least</i> the specified time. (It is okay to rewatch videos. <a href='https://hyvixlacroix.github.io/AutoPlay/'>AutoPlay</a> is a useful utility.) Videos at least 60 seconds long are recommended. " + DomTagClause
);
PornVidLong.addResult(PornDuration);
PornVidLong.addResult(["Download none of the videos.", "Download 1 video.", "Download 2 videos.", "Download 3 videos."]);

var PornSlideLong = new Roulette (
	"Slideshow Porn Images",
	"Watch a slideshow of images from E621 without touching, for <i>exactly</i> the specified time. (<a href='https://strawbshc.itch.io/heat-control-edging-trainer'>Heat Control</a> has a useful utility.) One image per 30-60 seconds is recommended. " + DomTagClause
);
PornSlideLong.addResult(PornDuration);
PornSlideLong.addResult(["Download one of the images.", "Download one image per 15 minutes.", "Download one image per 10 minutes.", "Download one image per 5 minutes."]);

var HeatControlLong = new Roulette(
	"Heat Control",
	"Start and finish a <a href='https://strawbshc.itch.io/heat-control-edging-trainer'>Heat Control</a> game with the following settings. " + DomTagClause + " Suffer a punishment of the Dom's choice if you cum without permission or fail to cum when prompted."
);
HeatControlLong.addResult(["Duration: 20 minutes", "Duration: 30 minutes", "Duration: 40 minutes", "Duration: 50 minutes", "Duration: 60 minutes"]);
HeatControlLong.addResult(["Cum chance: 0%", "Cum chance: 25%", "Cum chance: 50%", "Cum chance: 75%"]);
HeatControlLong.addResult(["Download one of the images.", "Download one image per 15 minutes.", "Download one image per 10 minutes.", "Download one image per 5 minutes."]);

var HeatControlEndurance = new Roulette(
	"Heat Control - Endurance Mode",
	"Start and finish a <a href='https://strawbshc.itch.io/heat-control-edging-trainer'>Heat Control</a> game with the following Endurance Mode settings. Cumming is guaranteed... but only at the end. " + DomTagClause + " Suffer a punishment of the Dom's choice if you cum without permission or fail to cum when prompted."
);
HeatControlEndurance.addResult(["Endurance Mode: Gentle (up to 1 hour)", "Endurance Mode: Average (up to 2 hours)", "Endurance Mode: Evil (up to 4 hours)"]);
HeatControlEndurance.addResult(["Download none of the images.", "Download one image per 30 minutes.", "Download one image per 20 minutes.", "Download one image per 10 minutes."]);

var ButtplugSmall = new Roulette(
	"Wearing the Butt Plug",
	"Wear any butt plug for the following length of time."
);
ButtplugSmall.addResult(["Wear the plug for 1 consecutive hour.", "Wear the plug for 2 consecutive hours.", "Wear the plug for 4 hours in total today.", "Wear the plug for 8 hours in total today."]);
ButtplugSmall.addResult(["Optional: Do 'popping' exercises every 30 minutes plugged.", "Optional: Do 'popping' exercises every 60 minutes plugged."]);

var ButtplugEach = new Roulette(
	"Progressive Butt Plug Stretching",
	"Wear each butt plug, from smallest to largest, for the specified length of time. Also do the specified 'popping' exercises, pausing the timer while doing so. If the next plug won't insert, repeat the time on the current plug."
);
ButtplugEach.addResult(["Wear each plug for at least 20 minutes. Do 'popping' every 10 minutes.", "Wear each plug for at least 30 minutes. Do 'popping' every 15 minutes.", "Wear each plug for at least 40 minutes. Do 'popping' every 20 minutes.", "Wear each plug for at least 60 minutes. Do 'popping' every 30 minutes."]);
ButtplugEach.addResult(["When 'popping', do at least 15 pops.", "When 'popping', do at least 30 pops.", "When 'popping', do at least 50 pops."]);

var FuckAustin = new Roulette(
	"Fuck Austin",
	"Consider wearing a buttplug before and/or during this task to stretch. In any case, give Austin a good time with all his favorite parts of you~"
);
FuckAustin.addResult(["No touching your own cock. Cum if you can, but don't stop fucking if you do.", "Touch your cock only while Austin is fucking you. Cum if you want to, but don't stop fucking if you do.", "Touch your cock only up until Austin is fucking you. Don't cum before then."]);
FuckAustin.addResult(["Kiss and lick Austin first, for 10 minutes.", "Rub and stroke Austin with your hands first, for 10 minutes.", "Squeeze Austin between your thighs first, for 10 minutes."]);
FuckAustin.addResult(["Suck Austin from tip to knot, for 15 minutes.", "Suck Austin from tip to knot, for 30 minutes.", "Suck Austin from tip to knot, for 45 minutes."]);
FuckAustin.addResult(["Fuck Austin on all fours...", "Fuck Austin on your back...", "Fuck Austin while standing..."]);
FuckAustin.addResult(["... until you cum or give up.", "... for 15 minutes.", "... for 30 minutes.", "... for 45 minutes."]);

var FuckJanine = new Roulette(
	"Fuck Janine",
	"Play with Janine in stages. She loves your cock; don't disappoint her~"
);
FuckJanine.addResult(["Only cum at the end.", "Cum whenever you like, but don't stop when you do.", "Use edible lube, if available. If you cum, stop and eat it out.", "Don't cum."]);
FuckJanine.addResult(["Pause for 2 minutes per edge.", "Pause for 1 minute per edge.", "Pause for 30 seconds per edge."]);
FuckJanine.addResult(["Rub your tip against Janine's lips first, for 10 minutes.", "Rub your base against Janine's lips first, for 10 minutes.", "Rub your balls against Janine's lips first, for 10 minutes."]);
FuckJanine.addResult(["Slide into her maw, staying completely still inside, for 15 minutes.", "Slide into her maw, staying completely still inside, for 30 minutes.", "Slide into her maw, staying completely still inside, for 30 minutes.", "Slide into her maw, staying completely still inside, for 45 minutes."]);
FuckJanine.addResult(["You can thrust now! Go at 30 BPM...", "You can thrust now! Go at 60 BPM...", "You can thrust now! Go at 90 BPM...", "You can thrust now! Go at 120 BPM..."])
FuckJanine.addResult(["...until you've edged 3 times.", "... until you've edged 5 times.", "... for 15 minutes.", "...for 30 minutes.", "...for 45 minutes."]);

var Gaming = new Roulette(
	"Gaming Time",
	"Play the specified game in the specified way. Your Dom(me) may choose additional goals relevant to the specific game, as well."
);
Gaming.addResult(["Play Fallout 4 (with the appropriate modlist).", "Play Kobold Kare.", "Play Monster Mind.", "Play Beat Banger.", "Play Cloud Meadow.", "Play 8th Heaven.", "Play a new game, or one you haven't played recently."]);
Gaming.addResult(["Play for at least 30 minutes.", "Play for at least 1 hour.", "Play for at least 2 hours.", "Play for at most 2 hours.", "Play until you edge.", "Play until you cum."]);
Gaming.addResult(["Play privately.", "Stream for the Dom(me).", "Stream in the Fox Hole server.", "Stream in a public server."]);
Gaming.addResult(["No screenshots are necessary.", "Take at least 3 screenshots.", "Take at least 5 screenshots, including an in-game orgasm.", "Take at least 7 screenshots, including two different in-game orgasms."]);

/**********************
End of Task Definitions
***********************/

var LongTasks = new Roulette(
	"Involved Tasks",
	"These tasks are intended to take an hour or two, or to be spread out over the course of the day."
);
LongTasks.addResult(Gaming);
LongTasks.addResult(Edging);
LongTasks.addResult(PornVidLong);
LongTasks.addResult(PornSlideLong);
LongTasks.addResult(HeatControlLong);
LongTasks.addResult(HeatControlEndurance);
LongTasks.addResult(ButtplugSmall);
LongTasks.addResult(ButtplugEach);
LongTasks.addResult(FuckAustin);
LongTasks.addResult(FuckJanine);