import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const styles = theme => ({
  root: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    marginTop: 40,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 30,
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: 'flex',
    flexDirection:'column'
  },
  checkBox:{
    display: 'flex',
    flexDirection:'row'
  },
  text:{
    marginTop: theme.spacing.unit,
  }
});

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
    const { classes } = this.props;
    console.log("props",this.state)
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
    <div className={classes.root}>
        <form className={classes.formControl} noValidate autoComplete="off">
           <TextField
             id="name"
             label="First Name"
             className={classes.textField}
             value={firstName}
             onChange={(e)=>this.setState({firstName: e.target.value})}
             margin="normal"/>
           <TextField
             id="name"
             label="Last Name"
             className={classes.textField}
             value={lastName}
            onChange={(e)=>this.setState({lastName: e.target.value})}
             margin="normal"/>
             <TextField
               id="name"
               label="Referred By: "
               className={classes.textField}
               value={referredBy}
               onChange={(e)=>this.setState({referredBy: e.target.value})}
               margin="normal"/>
             <div>
                <div className={classes.checkBox}>
                   <Typography variant="title" color="inherit" className={classes.text}>
                      Confirm Session:
                   </Typography>
                   <Checkbox
                    checked={reserveType=='Confirmed'}
                    onChange={e=>{this.setState({reserveType: 'Confirmed'})}}
                    value="Tentative"
                    />
                </div>
                <div className={classes.checkBox}>
                   <Typography variant="title" color="inherit" className={classes.text}>
                      Hold Session:
                   </Typography>
                   <Checkbox
                    checked={reserveType=='Tentative'}
                    onChange={e=>{this.setState({reserveType: 'Tentative'})}}
                    value="Confirmed"
                    />
                </div>
            </div>
          <TextField
            id="date"
            label="Session Date"
            type="date"
            className={classes.textField}
            onChange={e=>this.setState({date: e.target.value})}
            InputLabelProps={{
              shrink: true
            }}
            />
            <TextField
             id="time"
             label="Session Time"
             type="time"
             defaultValue="15:30"
             className={classes.textField}
             onChange={e=>this.setState({time: e.target.value})}
             InputLabelProps={{
               shrink: true,
             }}
             inputProps={{
               step: 300
             }}
           />
           <Select value={timeZone} onChange={(e)=>this.setState({timeZone: e.target.value})} className={classes.textField}>
               <MenuItem value={'PST'}>PST</MenuItem>
               <MenuItem value={'CST'}>CST</MenuItem>
               <MenuItem value={'EST'}>EST</MenuItem>
           </Select>
         <Button variant="contained" color="primary" href={(linkToSend + textToCopy).replace(/ /g,'%20')} className={classes.btn}>
              Send Session Details
         </Button>
        </form>
    </div>
  )
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
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
              <Button variant="contained" color="primary" href={(linkToSend + textToCopy).replace(/ /g,'%20')}>
                   Send the Event Details
              </Button>
              <h3> OR </h3>
              <h2>Copy and paste the below text to whatsApp Chat</h2>
                  {textToCopy}
          </AppBar>
      </div>
      )

      }
}
export default withStyles(styles)(App)
