let socket = io();
let username = prompt('Escribe tu nombre de usuario');

function chat() {
    socket.emit('auth', username)
    console.log(username)
    document.getElementById('i').innerHTML = username;
}
chat();

const botonEnviar = document.getElementById('enviar')
botonEnviar.addEventListener('click', () => {
    socket.emit('new-message', {
        username,
        message: chatBox.value,
    });
});

socket.on('all-messages', data => {
    document.getElementById('messages').innerHTML = data.map(message => `<br><b>${message.username}</b>: ${message.message}`).join('')
});



