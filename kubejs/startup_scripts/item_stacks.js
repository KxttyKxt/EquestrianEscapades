ItemEvents.modification(event => {
	const stackToSixtyFour = ["minecraft:egg", "minecraft:ender_pearl", "swem:feed_rose", "swem:sweet_feed"];

	const stackToSixteen = ["minecraft:enchanted_book", "quark:ancient_tome"];

	const stackToEight = [
		"minecraft:potion",
		"minecraft:splash_potion",
		"minecraft:lingering_potion",
		"swem:infertility_potion",
		"swem:potion_gender_male",
		"swem:potion_gender_female",
		"swem:potion_gender_random",
		"swem:cantazarite_potion",
	];

	const changeStackSize = (id, size) => event.modify(id, item => (item.maxStackSize = size));

	stackToSixtyFour.forEach(id => changeStackSize(id, 64));
	stackToSixteen.forEach(id => changeStackSize(id, 16));
	stackToEight.forEach(id => changeStackSize(id, 8));
});
