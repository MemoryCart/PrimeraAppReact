import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import  { TercerComponente } from './components/TercerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un repaso de React de FABIAN MENA</p>

        <PrimerComponente />

        <SegundoComponente />

        < TercerComponente />
      </header>
    </div>
  );
}

export default App;
