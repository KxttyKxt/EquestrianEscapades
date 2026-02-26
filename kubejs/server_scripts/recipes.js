ServerEvents.recipes(event => {
    // book + saddle = Mythical Mounts guidebook
    // the output requires NBT data, so this recipe would not work in a datapack.
	event.shapeless(
        Item.of(
            'patchouli:guide_book', 
            '{"patchouli:book":"mythicmounts:mythical_mounts"}'
        ),
        [
            "minecraft:book",
            "minecraft:saddle"
        ]
    )
});