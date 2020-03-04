import React, { Component } from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld/HelloWorld';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import Props from './Components/Props/Props';
import State from './Components/State/State';
import SetState from './Components/SetState/SetState';


class App extends Component {

  render()
  {
    return (
      <div>
         <HelloWorld />
         <FunctionalComponent />
         <ClassComponent/>
         <Props name = "React"/>
         <State />
         <SetState />
      </div>
    );
  }
  
}

export default App;
