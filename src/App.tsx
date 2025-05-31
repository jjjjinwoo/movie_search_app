import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 다른 페이지도 여기에 추가 가능 */}
    </Routes>
  );
}

export default App;