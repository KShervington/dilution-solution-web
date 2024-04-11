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

      </div>
    </InputStoreProvider >
  );
}

export default App;