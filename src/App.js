import './App.css';
import Cards from './Components/Cards/Cards';
function App() {
  return (
    <div className='container'>
      <div className='cards'>
        <span className='text'>Ты сегодня покормил кота?</span>
        <Cards />
      </div>
    </div>
  );
}

export default App;
