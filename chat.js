function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    const chatMessages = document.getElementById('chat-messages');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sent');
    newMessage.innerHTML = `
        <p>${messageText}</p>
        <span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
    `;

    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    messageInput.value = '';
}

document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// استخراج اسم الدردشة من الرابط وعرضه
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const chatName = urlParams.get('name');

    if (chatName) {
        document.querySelector('.chat-header h1').textContent = chatName;
    }
});
