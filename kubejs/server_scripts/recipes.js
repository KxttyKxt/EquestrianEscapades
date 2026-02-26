ServerEvents.recipes(event => {
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