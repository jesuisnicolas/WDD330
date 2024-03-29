const form = document.forms['hero'];

form.addEventListener('submit', makeHero, false);
form.addEventListener('submit',validate,false);

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSONstring and display in alert dialog
    return hero;
}
