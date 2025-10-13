function sendMessage() {
  const input = document.getElementById("message-input");
  const chatBox = document.getElementById("chat-box");

  const message = input.value.trim();
  if (message === "") return;

  const messageElement = document.createElement("div");
  messageElement.className = "chat-message";
  messageElement.textContent = message;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
