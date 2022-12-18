import './App.css';
import Navbar from './components/Navbar'
import ChatBot from './components/ChatBot'
import ChatPage from './components/ChatPage';
function App() {
  return (
    <div className="AppMain">
         <Navbar></Navbar>
         <div className="container">
          <ChatPage index = {2}></ChatPage>
         <ChatBot></ChatBot>
       
         </div>
         
         
    </div>
  );
}

export default App;
