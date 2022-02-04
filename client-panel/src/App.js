import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'; 
import 'font-awesome/css/font-awesome.min.css'
//import Contacts from './components/contacts/contacts';

function App() {
  return (
    <div className="App"> 
    <h1>hiiiiiiiiiiiiiii</h1> 
    {/* title est un props dyn bech yesta9bel mel child  */}
       <Navbar title="contacts list" />
      {/* <Contact />
      <Contact name="Houda SAYAR" tel=" 7856852" email="houda@gmail.com"/> 
      <Contact  tel=" 7856852" email="houda@gmail.com"/> 
      <Contact name="Houda SAYAR" email="houda@gmail.com"/> */} 
      <Contacts/>
    </div>
  );
}

export default App;
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */