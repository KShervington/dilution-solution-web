import { useState } from 'react';
import './App.css';
import DilutionTubes from './components/DilutionTubes';
import Header from "./components/Header"
import MainInputs from './components/MainInputs';
import { InputStoreProvider } from './InputStoreContext';
import InputStore from './InputStore';
// import Footer from './components/Footer';

function App() {

  // How to handle form submission and subsequent calculations?

  //Old code for getting number of tubes
  const [tubes, setTubes] = useState(0);

  const pullNumTubesTop = (tubeCount) => {
    setTubes(tubeCount);
  }

  return (
    <InputStoreProvider store={InputStore}>
      <div className="App">
        <Header />
        <div id='mainBody' className='bg-gradient-to-b from-stone-300 to-white h-screen'>
          <MainInputs topNumTubeGetter={pullNumTubesTop} />

          <div className='flex flex-col flex-wrap sm:flex-row justify-center items-center'>
            {Array.from({ length: tubes }).map((x, index) => <DilutionTubes key={index} tubeNumber={index + 1} />)}
          </div>

        </div>

        {/* <Footer /> */}

        {/* <footer style={{ position: 'absolute', transform: `translateY(100%)` }} className='w-full max-w-screen flex flex-row justfify-left items-end mb-auto bg-gradient-to-l from-slate-700 to-slate-600 border-solid border-t-2 border-slate-500 mt-2'>
          <h1>Attributions:</h1>
          <p>Favicon created by Iconjam - <a href="https://www.flaticon.com/" title="beaker icons" className='text-blue-500 underline'>Flaticon</a></p>
        </footer> */}

      </div>
    </InputStoreProvider >
  );
}

export default App;