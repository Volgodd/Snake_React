import './App.css';
import TestComponent from './components/TestComponent/Test'

function App() {
  const names = ['katya', 'max', 'kuzya', 'kolia', 'kolia']

  return (
    <div className="App">
      {names.map((value, index) => {
        return (<TestComponent name={value} key={index} />)
      })}
    </div>
  );
}

export default App;
