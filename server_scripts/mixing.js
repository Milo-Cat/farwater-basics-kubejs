ServerEvents.recipes((e) => {
	e.recipes.create.mixing(
    	[Item.of("minecraft:netherrack", 2)],
        [Item.of("minecraft:netherrack"), Item.of("create:cinder_flour")],
    ).processingTime(100).heated();
    
    e.recipes.create.mixing(
    	[Item.of("minecraft:blaze_powder", 2)],
        [Item.of("minecraft:blaze_powder"), Ingredient.of("#c:coal")],
    ).processingTime(500).heated();
});