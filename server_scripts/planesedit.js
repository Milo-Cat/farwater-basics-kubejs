ServerEvents.recipes(event => {
	event.remove({ output: 'immersive_aircraft:nether_engine' })
    event.remove({ output: 'immersive_aircraft:improved_landing_gear' })
    
  console.log('Immersive aircraft recipies tweaked!')
})