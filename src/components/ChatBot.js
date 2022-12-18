import React from "react";
import './ChatBot.css'
import Record from '../outputPackage.json'

import ChatPage from "./ChatPage";
function ChatBot() {
      



  
const utterances = [ 
  ["how to create / change a file ", "how to create a new file in linux", "create a file"],        //0
  ["how to change the directory", "how to shift from the home directory"],      //1
  ["how to create a directory in linux", " folder creation in linux"],      //2

]  
 
  
  
   
  const answers = [
    [
      " The cd command is one of the most used Linux commands. The purpose of this command is to change the directory. This cd command, popularly called chdir (change directory), is a code administrative command used in several versions of Windows that can modify the home directory. It could be applied in routine programs and terminal scripts. In other words, it enables to switch between file lists. For example, if you needed to shift from the home directory to the myfile directory, you would enter the following command:"
   ],                                                                                  	
   [
     " mkdir Linux is one of the basic Linux commands in the environment. As the name suggests, this command is used to make a directory or in other words, it used to create a directory. The following command will create a new folder called a test folder. An example of the mkdir command:"
   ],						
 
   ["The touch command is just like a mkdir command. The touch command is standard in UNIX/Linux Linux kernel for creating, changing, and modifying file timing information. It’s used to make a file that doesn’t have any content. The touch command generated an unfilled directory. The main difference between touch command and mkdir is that the touch command allows its users to create a text file or a .doc file. For example,"]
 ];
  

  

 function compare(utterancesArray,answersArray, string) {
  let item;
  // for (let x = 0; x < utterancesArray.length; x++) {
  //   for (let y = 0; y < utterancesArray[x].length; y++) {
  //     if (utterancesArray[x][y] === string) {
  //       item = answersArray[x];
  //       item = item[Math.floor(Math.random() * item.length)];
  //       }
  //     }
  //  }
       const count = 0;
       const splitString = string.slice(" ");
       
            Record.map( element=>{
         
            
            if (element.description.match(string)) {
                console.log(element.description)
                
                 return item;
            
              }

       })
      
      
   

  
  return item;
   
  
}

function output(textValue) {

  if (textValue==null){
    textValue = 'cd'
  }
 
  if (compare(utterances, answers, textValue)) {
    const product = compare(utterances, answers, textValue);
    <ChatPage index= {2} ></ChatPage>
  } 
  else {
    const product = -1;
     
  }
    
 
  
}

    return (
      

<div align ='right'>
      <div className="terminal" >
          <h3 align='center'>ChatBot</h3>
          <div className="console" >
            <input type='text'></input>
            <button onClick={output(document.getElementsByClassName('input').value)}>search</button>
          </div>
      </div>
   
   
</div>
 

  
  

        
    )
}
  
  export default ChatBot;
