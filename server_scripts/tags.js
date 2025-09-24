ServerEvents.tags("item", (event) => {
    event.add("c:foods/doughs", "create:dough");
    event.add("minecraft:mineable/pickaxe", "minecraft:glowstone")
});