
import './App.css';
import imagemplace from '../src/images/imagemplace.jpg';

function App() {
  return (
    <div className="App">
      <h1>Aninha <span>dev</span></h1>
      <div className='aboutMe'>
        <img src={imagemplace}/>
      </div>
    </div>
  );
}

export default App;
