const form = document.forms[0];

const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search(event) {
alert(' Form Submitted');
event.preventDefault();
}

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
    input.value = ''
    }
    }, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
    input.value = 'Search Here';
    } }, false);