import React from 'react';
import './App.scss';
import './misc/font-awesome-lib';
import Toolbar  from './components/Toolbar';
import Canvas   from './components/Canvas';

function App() {
  return (
    <div className="App">
      <aside>
        <Toolbar/>
      </aside>
      <main>
        <Canvas width={900} height={500}/>
      </main>
    </div>
  );
}

export default App;
