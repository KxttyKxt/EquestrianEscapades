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

    // in recipes that use vanilla eggs, replace with any/all eggs
    event.replaceInput(
        { input: "minecraft:egg" },
        "minecraft:egg",
        "#forge:eggs"
    )
});