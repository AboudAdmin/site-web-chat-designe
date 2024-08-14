function generateLink() {
    const chatName = document.getElementById('chat-name').value.trim();
    const linkContainer = document.getElementById('link-container');

    if (chatName === '') {
        linkContainer.innerHTML = '<p style="color: red;">يرجى إدخال اسم الدردشة</p>';
        return;
    }

    const chatLink = `https://example.com/chat?name=${encodeURIComponent(chatName)}`;
    linkContainer.innerHTML = `<a href="${chatLink}" target="_blank">رابط الدردشة الخاص بك</a>`;
}
