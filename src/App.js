import '../src/styles/App.css';
import freeCodeCampLogo from '../src/img/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';

function App() {
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
        <Screen />
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>

        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>

        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>

        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>

        <div className='row'>
          <ClearButton>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;