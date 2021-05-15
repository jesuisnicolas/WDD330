const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name propertybased on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSONstring and display in alert dialog
    return hero;
    }