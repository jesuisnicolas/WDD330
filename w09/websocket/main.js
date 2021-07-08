const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);


function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

// This function gets called when the user hits the 
// submit button
function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`); //Creates the html markup
    connection.send(text);
}

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

form.addEventListener('submit', message, false);

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

connection.addEventListener('close', () => {
    output('DISCONNECTED');
}, false);

connection.addEventListener('error', (event) => {
    output(`<span style='color: red;'>ERROR:
        ➥ ${event.data}</span>`);
}, false);