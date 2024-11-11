var GenderTags = [
	"female solo",
	"female/female",
	"male solo",
	"male/female",
	"male/male",
	"gynomorph solo",
	"gynomorph/gynomorph",
	"gynomorph/male",
	"gynomoprh/female"
];

var CharacterTags = [
	"fox",
	"~dragon ~kobold",
	"~protogen ~mamagen",
	"canine",
	"feline",
	"equine",
	"avian",
	"pokemon_(species)"
];

var KinkTags = [
	"edging -orgasm",
	"multiple_orgasms",
	"size_difference",
	"chastity*",
	"group_sex",
	"~genital_piercing ~nipple_piercing",
	"bondage",
	"oral",
	"cum"
];

var TagsE621 = new Roulette(
	"E621 Tags",
	"This 'task' is intended to be used to select tags for other tasks, such as Heat Control. If the tag set doesn't return enough items, some can be excluded to expand results. If this task was rolled randomly, go to Seth's <a href='https://walltaker.joi.how/links/382'>Walltaker Page</a> and set it to an image with the following tags.",
	[GenderTags, CharacterTags, KinkTags]
);

const DomTagClause = "The Dom can choose any tags they like, or use the 'E621 Tags' task to select tags.";