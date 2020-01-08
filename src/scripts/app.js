//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');

//add a new chat
newChatForm.addEventListener('submit', event => {
  event.preventDefault();

  const message = newChatForm.message.value.trim();

  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', event => {
  event.preventDefault();

  //update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatRoom.updateName(newName);
  //reset the form
  newNameForm.reset();
  //show then ride the update message
  updateMessage.innerText = `Your name has updated to ${newName}`;
  
  setTimeout(() => updateMessage.innerText = '', 3000);
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anonymous'; 

//class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', username);

//get chats and render
chatRoom.getChats(data => {
  chatUI.render(data);
});

