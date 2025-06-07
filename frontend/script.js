async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatContainer = document.getElementById('chatContainer');
    const messageText = userInput.value.trim();

    if (messageText === '') return;

    // Foydalanuvchi xabari
    const userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = messageText;
    chatContainer.appendChild(userMessage);

    // Chat konteynerini pastga aylantirish
    chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: 'smooth'
    });

    // APIga yuborish
    try {
        const response = await fetch('http://127.0.0.1:5000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: messageText })
        });

        const data = await response.json();

        const botMessage = document.createElement('p');
        botMessage.className = 'bot-message';

        if (data.answer) {
            botMessage.textContent = data.answer;
        } else if (data.error) {
            botMessage.textContent = '❌ Xatolik: ' + data.error;
        }

        chatContainer.appendChild(botMessage);
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });

    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.className = 'bot-message';
        errorMessage.textContent = '❌ Serverga ulanishda xatolik: ' + error.message;
        chatContainer.appendChild(errorMessage);
    }

    // Inputni tozalash
    userInput.value = '';
}

// Enter tugmasi bilan xabar yuborish
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
