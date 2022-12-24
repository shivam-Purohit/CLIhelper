import './App.css';

import { LinuxPage } from './components/LinuxPage';
import './components/Navbar'
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Gitpage } from './components/Gitpage';
import { DockerPage } from './components/DockerPage';

function App() {
  return (
    <div className="App" >
       <Navbar/>
       {/* <LinuxPage/> */}
       {/* <Gitpage/> */}
       <DockerPage/>
       <Footer/>
    </div>
  );
}

export default App;
