import './App.css';

import { HashRouter as Router,Routes, Route } from 'react-router-dom';

import BasicQuiz from './components/BasicQuiz';
import DetailedQuiz from './components/DetailedQuiz';
import CareerReport from './components/CareerReport';
import HomePage from './components/HomePage';
function App() {
 
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basicquiz" element={<BasicQuiz/>} />
          <Route path="/detailedquiz" element={<DetailedQuiz/>} />
          <Route path="/results" element={<CareerReport/>} />
        </Routes>
    </Router>
  );
}

export default App;
