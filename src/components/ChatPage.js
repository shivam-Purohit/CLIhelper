import React from "react";
import './ChatPage.css'
import DATA from '../outputPackage.json'


function ChatPage() {
    return (
      <div id="chatpage">
          {
            DATA.map( record => {
                 return (
                   <div className="box" key={record.id}>
                    <strong>{record.title}</strong> 
                    <div>{record.description}</div>
                    <div>{record.command}</div>
                   </div>
                 )
            })
          }
      </div>
    );
  }
  
  export default ChatPage;