import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App-header'>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
