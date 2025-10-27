/* Preemptivly preventing crashes when submerging in water while wearing a diving helmet.
https://github.com/Creators-of-Create/Create/issues/8840
https://github.com/Creators-of-Create/Create/issues/8817
*/
ServerEvents.recipes(event => {
    console.log('Removing diving helmets');

    event.remove('create:copper_diving_helmet');
    event.remove('create:netherite_diving_helmet');

	console.log('Diving helmet recipes removed');
});
