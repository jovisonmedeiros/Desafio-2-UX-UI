// Função principal para enviar a mensagem
function sendMessage() {
    // 1. Obtém a referência aos elementos HTML
    const input = document.getElementById('messageInput');
    const chatArea = document.getElementById('chatArea');
    
    // 2. Obtém o texto do input, remove espaços extras no início/fim
    const messageText = input.value.trim();

    // 3. Verifica se a mensagem não está vazia
    if (messageText !== "") {
        // 4. Cria o novo elemento <p> para a mensagem
        const newMessage = document.createElement('p');
        
        // Define as classes e conteúdo (simulando que é a mensagem do próprio aluno)
        newMessage.classList.add('chat-message', 'own');
        newMessage.innerHTML = `<span>Você:</span> ${messageText}`;
        
        // 5. Adiciona a nova mensagem à área de chat
        chatArea.appendChild(newMessage);

        // 6. Limpa o campo de input
        input.value = '';

        // 7. Rola o chat para baixo para mostrar a mensagem mais recente (Melhoria UX)
        chatArea.scrollTop = chatArea.scrollHeight;
        
        // Opcional: Simula uma resposta de outro colega após um pequeno atraso
        setTimeout(simulateReply, 1500); 
    }
}

// Função para tratar o evento de tecla (detectar a tecla Enter)
function handleKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Função que simula uma resposta automática de outro aluno
function simulateReply() {
    const chatArea = document.getElementById('chatArea');
    const replies = [
        "Ótima pergunta! Vou pensar em uma resposta.",
        "Concordo com o seu ponto, colega!",
        "Dê uma olhada na Biblioteca Colaborativa, tem algo lá.",
        "Vou te chamar no privado para discutirmos isso."
    ];
    
    // Escolhe uma resposta aleatória
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const replyElement = document.createElement('p');
    replyElement.classList.add('chat-message');
    replyElement.innerHTML = `<span>Colega B:</span> ${randomReply}`;
    
    chatArea.appendChild(replyElement);
    
    // Rola para baixo novamente
    chatArea.scrollTop = chatArea.scrollHeight;
}