import React from 'react';

import ChatBot from './components/ChatBot';
import ChatPage from './components/ChatPage';
import MacBookPro141 from './components/mac-book-pro141';
function App() {
  return (
    <><div>
      <MacBookPro141> </MacBookPro141> {/* homepage*/}
    </div><div>
        <ChatBot></ChatBot>  {/*on the right and fixed */}

      </div></>
    
  );
}

export default App;