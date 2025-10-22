ServerEvents.recipes(event => {
	console.log('Removing old plane recipies');

	
	event.remove({ output: 'immersive_aircraft:nether_engine' });
    event.remove({ output: 'immersive_aircraft:improved_landing_gear' });
	event.remove({ output: 'immersive_aircraft:propeller' });
	event.remove({ output: 'immersive_aircraft:enhanced_propeller' });
	event.remove({ output: 'immersive_aircraft:boiler' });
	event.remove({ output: 'man_of_many_planes:scarlet_biplane' });

	console.log('Editing old plane recipies');

							event.replaceInput(
  { output: 'immersive_aircraft:engine' }, // Arg 1: the filter
  'minecraft:cobblestone',            // Arg 2: the item to replace
  'create:andesite_casing'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);
						event.replaceInput(
  { output: 'immersive_aircraft:engine' }, // Arg 1: the filter
  'minecraft:piston',            // Arg 2: the item to replace
  'create:steam_engine'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);
						event.replaceInput(
  { output: 'immersive_aircraft:engine' }, // Arg 1: the filter
  'minecraft:blast_furnace',            // Arg 2: the item to replace
  'create:cogwheel'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);

	
		event.shaped(
  Item.of('immersive_aircraft:nether_engine', 1), // arg 1: output
  [
    'ECE',
    'EME', // arg 2: the shape (array of strings)
    'CBC'
  ],
  {
    E: 'create:steam_engine',  //arg 3: the mapping object
	M: 'create:precision_mechanism',
	B: 'immersive_aircraft:boiler',
    C: 'create:brass_casing'
  });

							event.replaceInput(
  { output: 'immersive_aircraft:warship' }, // Arg 1: the filter
  'immersive_aircraft:engine',            // Arg 2: the item to replace
  'immersive_aircraft:nether_engine'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);
	
		event.replaceInput(
  { output: 'immersive_aircraft:hull' }, // Arg 1: the filter
  '#minecraft:logs',            // Arg 2: the item to replace
  'create:andesite_casing'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);
		event.replaceInput(
  { output: 'immersive_aircraft:industrial_gears' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'create:brass_sheet'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);
			event.replaceInput(
  { output: 'immersive_aircraft:industrial_gears' }, // Arg 1: the filter
  'minecraft:copper_ingot',            // Arg 2: the item to replace
  'create:iron_sheet'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);

				event.replaceInput(
  { output: 'immersive_aircraft:industrial_gears' }, // Arg 1: the filter
  'minecraft:lever',            // Arg 2: the item to replace
  'create:cogwheel'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
);


	console.log('Adding new plane recipies');

	event.recipes.create.cutting('immersive_aircraft:propeller', 'create:propeller');

	
	event.shaped(
  Item.of('immersive_aircraft:enhanced_propeller', 1), // arg 1: output
  [
    'CB ',
    ' P ', // arg 2: the shape (array of strings)
    ' BC'
  ],
  {
    P: 'immersive_aircraft:propeller',
    B: 'create:brass_sheet',  //arg 3: the mapping object
    C: 'create:copper_sheet'
  });

	
	
		event.shaped(
  Item.of('immersive_aircraft:boiler', 1), // arg 1: output
  [
    'CC ',
    'CC ', // arg 2: the shape (array of strings)
    'FF '
  ],
  {
    F: 'minecraft:furnace',  //arg 3: the mapping object
    C: 'create:fluid_tank'
  });


			event.shaped(
  Item.of('man_of_many_planes:scarlet_biplane', 1), // arg 1: output
  [
    'HHB',
    'NNP', // arg 2: the shape (array of strings)
    'HHB'
  ],
  {
    N: 'immersive_aircraft:nether_engine',  //arg 3: the mapping object
	H: 'immersive_aircraft:hull',
	P: 'immersive_aircraft:enhanced_propeller',
    B: 'create:brass_casing'
  });

	console.log('Plane recipies improved!');
});
