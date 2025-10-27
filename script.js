function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  // Add user message
  const userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  // Simulate bot response
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.textContent = getBotReply(userText);
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userText) {
  const replies = [
    "Hi there! 😊",
    "That's cool!",
    "Tell me more!",
    "I'm just a simple bot 🤖",
    "Nice to chat with you!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
