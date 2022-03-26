import './App.css';
import AnswerText from './component/AnswerText/AnswerText';
import MainShop from './component/MainShop/MainShop';

import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainShop></MainShop>
      <AnswerText></AnswerText>

    </div>
  );
}

export default App;
