import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
import {BrowserRouter } from 'react-router-dom';

class App extends Component{

  render(){
    return (
     <BrowserRouter>
            <div className="App">
              <Main/>
            </div>
     </BrowserRouter>
    );
  }

}

export default App;
