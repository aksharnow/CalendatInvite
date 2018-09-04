import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	firstName: '',
      lastName: '',
      referredBy: '',
      reserveType: 'Tentative',
      time: '',
      date: '',
      timeZone: 'CST',
    }
  }
  render() {
  	const {
    	firstName,
      lastName,
      referredBy,
      reserveType,
      time,
      date,
      timeZone
    } = this.state
    const linkToSend = 'https://wa.me/16362245062?text='
    const textToCopy = reserveType +  ': ' + firstName +  ' ' +
      lastName  +  ' ' +
      'Ref:' +  ' ' +
      referredBy +  ' '+ 'on ' +
      date + ' at ' + time + ' ' + timeZone
    return (
      <div className='main'>
      <h2>Fill the details and copy the generated bold text at the end and paste it back to the whatsApp Chat</h2>
      <br/>
        <form>
          First name:<br/>
          <input value={firstName} onChange={(e)=>this.setState({firstName: e.target.value})}/>
          <br/>
          Last name:<br/>
          <input value={lastName} onChange={(e)=>this.setState({lastName: e.target.value})}/>
          <br/>
           Referred By:<br/>
          <input value={referredBy} onChange={(e)=>this.setState({referredBy: e.target.value})}/>
          <br/><br/>
           Are you reserving the slots for future calls(Like giving available slots to vendor)
           <br/>
          <input type='radio' checked={reserveType=='Tentative'} onChange={e=>{this.setState({reserveType: 'Tentative'})}}/>
          Yes
          <br/>
           <input type='radio' checked={reserveType=='Confirmed'} onChange={e=>{this.setState({reserveType: 'Confirmed'})}}/>
          No
          <br/>
          <br/>
          <label for="appt-time">Call at: </label>
          <br/>
          <input type="time" value={time} onChange={e=>this.setState({time: e.target.value})}/>
          <input type="date" value={date} onChange={e=>this.setState({date: e.target.value})}/>
          <select value={timeZone} onChange={(e)=>this.setState({timeZone: e.target.value})}>
            <option value={'PST'}> PST </option>
            <option value={'CST'}> CST </option>
            <option value={'EST'}> EST </option>
          </select>
        </form>
        <br/>
        <h2>Click on the below Link to open WhatsApp and send the event details as Text</h2>
        <br/>
        <a href={(linkToSend + textToCopy).replace(/ /g,'%20')} style={{fontWeight:'bold'}}> Send the Event Details </a>
        <h3> OR </h3>
        <h2>Copy and paste the below text to whatsApp Chat</h2>
            {textToCopy}
      </div>
      )

      }
}

export default App
