ServerEvents.recipes(event => {
	console.log('Adding blazing blood recipe');
  event.recipes.create.compacting([Fluid.of('tconstruct:blazing_blood', 250), 'create:empty_blaze_burner'], ['create:blaze_burner'])
})
