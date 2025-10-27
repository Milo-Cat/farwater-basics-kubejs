// priority 100
/* Preventing crashes when submerging in water while wearing a diving helmet.
https://github.com/Creators-of-Create/Create/issues/8840
https://github.com/Creators-of-Create/Create/issues/8817
*/
ServerEvents.recipes(event => {
    console.log('Removing diving helmets');

    event.remove('create:copper_diving_helmet');
    event.remove('create:netherite_diving_helmet');

	console.log('Diving helmet recipes removed');
});
// Remove from inventory
const bannedItems = [
  "create:copper_diving_helmet",
  "create:netherite_diving_helmet",
];

bannedItems.forEach((itemId) => {
  PlayerEvents.inventoryChanged(itemId, (event) => {
    const { player, item } = event;
    if (itemId != item.id) {
      console.log(
        `Error: ${itemId} inventoryChanged handler called for item '${item.id}'. Does '${itemId}' exist?`
      );
      return;
    }

    if (player.isOp()) {
      return;
    }
    player.inventory.clear(item);
    player.tell(`${item.id} is a restricted item.`);
    console.log(`Removed restricted item ${item.id} from ${player.getName()}`);
  });
});
