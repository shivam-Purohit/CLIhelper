import React from "react";
import './ChatBot.css'

function ChatBot() {

  function output()
  {       const input = prompt('ask the question to the bot');
          let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  }

  
const utterances = [ 
  ["how to create , change a file ", "how to create a new file in linux", "create a file"],        //0
  ["how to chaneg the directory", "how to shift from the home directory"],      //1
  ["how to create a directory in linux", " folder creation in linux"],      //2

]  
 
  
  // Possible responses corresponding to triggers
   
  const answers = [
    [
      " The cd command is one of the most used Linux commands. The purpose of this command is to change the directory. This cd command, popularly called chdir (change directory), is a code administrative command used in several versions of Windows that can modify the home directory. It could be applied in routine programs and terminal scripts. In other words, it enables to switch between file lists. For example, if you needed to shift from the home directory to the myfile directory, you would enter the following command:"
   ],                                                                                  	//0
   [
     " mkdir Linux is one of the basic Linux commands in the environment. As the name suggests, this command is used to make a directory or in other words, it used to create a directory. The following command will create a new folder called a test folder. An example of the mkdir command:"
   ],						
 
   ["The touch command is just like a mkdir command. The touch command is standard in UNIX/Linux Linux kernel for creating, changing, and modifying file timing information. It’s used to make a file that doesn’t have any content. The touch command generated an unfilled directory. The main difference between touch command and mkdir is that the touch command allows its users to create a text file or a .doc file. For example,"]
 ];
  
 // For any other user input
  
 const alternatives = [
   "Go on...",
   "Try again",
 ];
 function compare(utterancesArray, answersArray, string) {
  let item;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        item = answersArray[x];
        item = item[Math.floor(Math.random() * item.length)];
        }
      }
   }
  return item;
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text.replace(/ a /g, " ").replace(/whats/g, "what is").replace(/please/g, "").replace(/please/g, "");
 
  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
 
  //update  DOM
  addChatEntry (input, product);
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `${input}`;
  messagesContainer.appendChild(userDiv);
 
  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
 
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000); }

    return (
      

<div>
  {output}
</div>
 

  
  

        
    )
}
  
  export default ChatBot;
