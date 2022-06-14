import '../src/styles/App.css';
import freeCodeCampLogo from '../src/img/freecodecamp-logo.png';
import Button from './components/Button';

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
        <div className='row'>
          <Button>1</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;