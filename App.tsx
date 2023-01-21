import React from 'react';

import './App.css';

import {Karta} from "./componenty/karta";
import {VegeStranka} from "./componenty/vegestranka";


function App() {
  return (

    <div className="App">
      <Karta>
           <VegeStranka/>
      </Karta>
      </div>


  );
}

export default App;
