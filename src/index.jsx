import React from 'react'
import "./App.css"
import bgimg from "../src/asserts/images2.jpeg"
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Qrcode from './components/Qrcode'
import Bmi from './components/Bmi'
import Calculator from './components/Calculator'
import Agecalculator from './components/Agecalculator'
import Watt from './components/Watt'
import Leapyear from './components/Leapyear'
import Notes from './components/Notes'
import Todolist from './components/Todolist'
import Stopwatch from './components/Stopwatch'
import Password from './components/Password'
import Unit from './components/Unit'
import Binary from'./components/Binary'
import Weather from './components/Weather'
import Percentage from './components/Percentage'
import Discount from './components/Discount'
import Nav from './components/Nav'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app_main' style={{ 
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity:"0.87"
       }}>
      <Router>
      <Nav/>
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
      <Footer/>
    </Router>
    </div>
  )
}

export default App