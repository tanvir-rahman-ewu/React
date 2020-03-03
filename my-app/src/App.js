import React, { Component } from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld/HelloWorld';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import Props from './Components/Props/Props';


class App extends Component {

  render()
  {
    return (
      <div>
         <HelloWorld />
         <FunctionalComponent />
         <ClassComponent/>
         <Props name = "React"/>
      </div>
    );
  }
  
}

export default App;
