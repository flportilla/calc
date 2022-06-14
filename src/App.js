import '../src/styles/App.css';
import freeCodeCampLogo from '../src/img/freecodecamp-logo.png';

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
    </div>
  );
}

export default App;