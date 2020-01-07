//dom queries
const chatList = document.querySelector('.chat-list');

//class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('gaming', 'shaun');

//get chats and render
chatRoom.getChats(data => {
  chatUI.render(data);
});

