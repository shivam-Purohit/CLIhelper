
import React from 'react';

import ChatBot from './components/ChatBot';
import ChatPage from './components/ChatPage';


function App() {
  return (
    <div>
    <ChatBot ></ChatBot>  {/*on the right and fixed */}
    <ChatPage></ChatPage> {/*on the left */}
    </div>
    
  );
}

export default App;