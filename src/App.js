import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import LoginPage from './LoginPage';
import ChatPage from './ChatPage';


function App() {
  return (
    <div>
     <LoginPage></LoginPage>
    <ChatPage></ChatPage>
    </div>
    
  );
}

export default App;