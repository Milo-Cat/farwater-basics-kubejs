ServerEvents.recipes((e) => {
	e.recipes.create.mixing(
    	[Item.of("minecraft:netherrack", 2)],
        [Item.of("minecraft:netherrack"), Item.of("create:cinder_flour")],
    ).processingTime(100).heated();
    
    e.recipes.create.mixing(
    	[Item.of("minecraft:blaze_powder", 2)],
        [Item.of("minecraft:blaze_powder"), Ingredient.of("#c:coal")],
    ).processingTime(500).heated();


    e.recipes.create.mixing(
    	[Item.of("create:asurine", 2)],
        [Item.of("create:asurine"), Item.of("minecraft:mossy_cobblestone")],
    );

    e.recipes.create.mixing(
    	[Item.of("create:crimsite", 2)],
        [Item.of("create:crimsite"), Item.of("minecraft:blackstone")],
    );

    e.recipes.create.mixing(
    	[Item.of("create:limestone", 2)],
        [Item.of("create:limestone"), Item.of("minecraft:bone_meal")],
    );

    e.recipes.create.mixing(
    	[Item.of("create:ochrum", 2)],
        [Item.of("create:ochrum"), Item.of("minecraft:sandstone")],
    );

    e.recipes.create.mixing(
    	[Item.of("create:scoria", 2)],
        [Item.of("create:scoria"), Item.of("minecraft:granite")],
    );

    e.recipes.create.mixing(
    	[Item.of("create:veridium", 2)],
        [Item.of("create:veridium"), Item.of("minecraft:cobbled_deepslate")],
    );
});