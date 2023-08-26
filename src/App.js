import { Route, Routes } from 'react-router-dom';
import HomeQuiz from "./features/HomeQuiz";
import QuestionQuiz from './features/QuestionQuiz';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeQuiz />} />
        <Route path='/question' element={<QuestionQuiz />} />
      </Routes>
    </>
  );
}

export default App;
