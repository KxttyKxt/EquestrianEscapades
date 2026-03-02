ItemEvents.modification(event => {
	event.modify("minecraft:egg", egg => {
		egg.maxStackSize = 64;
	});
});
