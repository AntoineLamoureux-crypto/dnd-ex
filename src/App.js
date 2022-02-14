import './App.css';
import DragDrop from './components/DragDrop';
import Example from './components/ex2/example'

function App() {
  return (
    <div className="App">
      <div>
        <DragDrop />
      </div>
      <div>
        <Example />
      </div>
    </div>
  );
}

export default App;
