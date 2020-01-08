//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//add a new chat
newChatForm.addEventListener('submit', event => {
  event.preventDefault();

  const message = newChatForm.message.value.trim();

  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

//class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('gaming', 'shaun');

//get chats and render
chatRoom.getChats(data => {
  chatUI.render(data);
});

