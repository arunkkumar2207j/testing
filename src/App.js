import './App.css';

import Header from './MyComponents/Header';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <div>Footer should be added here</div>
    </div>
  );
}

export default App;
