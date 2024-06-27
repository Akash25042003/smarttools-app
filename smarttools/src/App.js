import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Qrcode from './Qrcode'
import Bmi from './Bmi'
import Calculator from './Calculator'
import Agecalculator from './Agecalculator'
import Watt from './Watt'
import Leapyear from './Leapyear'
import Notes from './Notes'
import Todolist from './Todolist'
import Stopwatch from './Stopwatch'
import Password from './Password'
import Unit from './Unit'
import Binary from'./Binary'
import Weather from './Weather'
import Percentage from './Percentage'
import Discount from './Discount'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/Watt'>
          <Watt/>
        </Route>
        <Route path='/Qrcode'>
          <Qrcode/>
        </Route>
        <Route path='/Bmi'>
          <Bmi/>
        </Route>
        <Route path='/Calculator'>
          <Calculator/>
        </Route>
        <Route path='/Agecalculator'>
          <Agecalculator/>
        </Route>
        <Route path='/Leapyear'>
          <Leapyear/>
        </Route>
        <Route path='/Notes'>
          <Notes/>
        </Route>
        <Route path='/Todolist'>
          <Todolist/>
        </Route>
        <Route path='/Stopwatch'>
          <Stopwatch/>
        </Route>
        <Route path='/Password'>
          <Password/>
        </Route>
        <Route path='/Unit'>
          <Unit/>
        </Route>
        <Route path='/Binary'>
          <Binary/>
        </Route>
        <Route path='/Weather'>
          <Weather/>
        </Route>
        <Route path='/Percentage'>
          <Percentage/>
        </Route>
        <Route path='/Discount'>
          <Discount/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App