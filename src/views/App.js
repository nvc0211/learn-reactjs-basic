import logo from './logo.svg';
import './App.scss';
import MyExample from './myExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hoang Cuong FullStack 2023
        </p>
        <MyExample />
      </header>

    </div>

  );
}

export default App;
