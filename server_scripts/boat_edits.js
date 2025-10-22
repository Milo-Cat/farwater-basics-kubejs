ServerEvents.recipes(event => {

	console.log('Editing boats');

    const wood_types = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'
    ];


    wood_types.forEach(wood => {
        event.replaceInput(
            { input: `minecraft:${wood}_boat` },
            `minecraft:${wood}_boat`,
            `minecraft:stripped_${wood}_log`
        );
        event.remove(`minecraft:${wood}_boat`);
        event.remove(`minecraft:${wood}_chest_boat`);
        event.remove(`smallships:${wood}_brigg`);
        event.shaped(
            `smallships:${wood}_brigg`,
            [
                'SLS',
                'OOO',
                'CCC'
            ],
            {
                C: 'minecraft:chest',
                L: 'minecraft:lead',
                S: 'smallships:sail',
                O: `minecraft:stripped_${wood}_log`
            }
        );
    });

    event.remove('minecraft:bamboo_raft');
    event.remove('minecraft:bamboo_chest_raft');
    event.remove('smallships:bamboo_raft_brigg');
    event.shaped(
        'smallships:bamboo_brigg',
        [
            'SLS',
            'OOO',
            'CCC'
        ],
        {
            C: 'minecraft:chest',
            L: 'minecraft:lead',
            S: 'smallships:sail',
            O: 'minecraft:stripped_bamboo_block'
        }
    );

	console.log('Boat recipies fixed!');
	
});
