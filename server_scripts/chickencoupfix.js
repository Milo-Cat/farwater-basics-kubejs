ServerEvents.recipes(event => {
	event.shaped(
	Item.of('chickencoop:empty_chicken_coop',1),
    [
    ' F ',
	'FHF',
    ' S '
    ],
    {
    F: 'minecraft:oak_fence',
	S: 'minecraft:oak_slab',
    H: 'minecraft:hay_block'
    }
    )

  console.log('Recipie for chicken coups fixed!')
})