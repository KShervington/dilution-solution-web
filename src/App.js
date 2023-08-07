import { useState } from 'react';
import './App.css';
import DilutionTubes from './components/DilutionTubes';
import Header from "./components/Header"
import MainInputs from './components/MainInputs';

function App() {

  // could create an object here which gathers all data from input fields

  // How to handle data from tubes?
  // Could send it all here then centralize into an array

  // How to handle form submission and subsequent calculations?
  // On 'submit' click, add InputFields data to an object passed down to it

  const [tubes, setTubes] = useState(0);

  const pullNumTubesTop = (tubeCount) => {
    setTubes(tubeCount);
  }

  return (
    <div className="App">
      <Header />
      <div id='mainBody' className='bg-gradient-to-b from-stone-300 to-white h-screen'>
        <MainInputs topNumTubeGetter={pullNumTubesTop} />

        <div className='flex flex-col flex-wrap sm:flex-row justify-center items-center'>
          {Array.from({ length: tubes }).map((x, index) => <DilutionTubes key={index} tubeNumber={index + 1} />)}
        </div>

      </div>
      <footer className='bg-gradient-to-l from-slate-700 to-slate-600 border-solid border-t-2 border-slate-500'>
        <h1>Attributions:</h1>
        <p>Favicon created by Iconjam - <a href="https://www.flaticon.com/" title="beaker icons" className='text-blue-500 underline'>Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
