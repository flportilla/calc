import '../src/styles/App.css';
import freeCodeCampLogo from '../src/img/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';

function App() {

  const [screenValue, setScreenValue] = useState('');

  function addInput(value) {
    setScreenValue(screenValue + value);
  }

  function handleResult() {
    setScreenValue(eval(screenValue));
  }

  return (
    <div className='App'>
      <div className='freecodecamp_logo_container'>
        <img
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
          className='freecodecamp_logo'
        />
      </div>

      <div className='calc_container'>
        <Screen input={screenValue} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>

        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>

        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>

        <div className='row'>
          <Button handleClick={handleResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>

        <div className='row'>
          <ClearButton handleClick={() => setScreenValue('')}>
            Clear
          </ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;