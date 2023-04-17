import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TicketList from './components/TicketList'
import PaymentForm from './components/Billing';

class App extends Component{
  render() {
    return (
      <div className="App">
        <TicketList/>
        <div><PaymentForm/></div>
      </div>
    );
  }
}

export default App;
