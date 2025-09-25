ServerEvents.recipes(event => {
    event.shaped(
  Item.of('minecraft:saddle', 3), // arg 1: output
  [
    '   ',
    ' L ', // arg 2: the shape (array of strings)
    'LIL'
  ],
  {
    L: 'minecraft:leather',
    I: 'minecraft:iron_ingot'  //arg 3: the mapping object
  }
)
	    event.shaped(
  Item.of('immersive_aircraft:sail', 3), // arg 1: output
  [
    'WWS',
    'WWS', // arg 2: the shape (array of strings)
    'WWS'
  ],
  {
    W: '#minecraft:wool',
    S: 'minecraft:string'  //arg 3: the mapping object
  }
)

		    event.shaped(
  Item.of('create:white_sail', 2), // arg 1: output
  [
    'WS ',
    'SA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    W: '#minecraft:wool',
    S: 'minecraft:string',  //arg 3: the mapping object
	A:  'create:andesite_alloy'
  }
)
	
})
