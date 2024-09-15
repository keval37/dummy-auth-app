import logo from './logo.svg';
import './App.css';
import ProtectedComponent from './ProtectedComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProtectedComponent />
      </header>
    </div>
  );
}

export default App;
