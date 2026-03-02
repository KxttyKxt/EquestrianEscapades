ServerEvents.tags("item", event => {
	// dynamically assign all raw beef cuts except for minced to a tag.
	// this tag replaces the minecraft:beef in the minced beef recipe.
	const choppableBeefTag = "escapades:choppable_beef";
	const beefItems = event.get("forge:raw_beef").getObjectIds();
	const mincedBeefBlacklist = Ingredient.of(/farmersdelight:minced_beef/);

	beefItems.forEach(item => {
		if (!mincedBeefBlacklist.test(item)) event.add(choppableBeefTag, item);
	});

	const cookedSteakTag = "escapades:cooked_steak";
	const steakItems = event.get("forge:cooked_beef").getObjectIds();
	const pattyBlacklist = Ingredient.of(/farmersdelight:beef_patty/);

	steakItems.forEach(item => {
		if (!pattyBlacklist.test(item)) event.add(cookedSteakTag, item);
	});
});
