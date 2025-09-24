const recipeRemovals = [

];

const stones = [
	"create:asurine",
    "create:crimsite",
    "create:ochrum",
    "create:veridium"
];

ServerEvents.recipes((e) => {
  recipeRemovals.forEach((recipe) => e.remove(recipe));
  
  stones.forEach((stone) => e.remove({ input: `${stone}`, type: "create:crushing" }));
});