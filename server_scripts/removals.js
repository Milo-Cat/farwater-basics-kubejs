const stones = [
	"create:asurine",
    "create:crimsite",
    "create:ochrum",
    "create:veridium"
];

ServerEvents.recipes((e) => {
  
  stones.forEach((stone) => e.remove({ input: `${stone}`, type: "create:crushing" }));
});
