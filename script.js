function createChatPage() {
    const chatName = document.getElementById('chat-name').value.trim();

    if (chatName === '') {
        alert('يرجى إدخال اسم الدردشة');
        return;
    }

    // إنشاء رابط إلى صفحة الدردشة باستخدام الاسم المدخل
    const chatLink = `chat.html?name=${encodeURIComponent(chatName)}`;

    // توجيه المستخدم إلى صفحة الدردشة
    window.location.href = chatLink;
}
