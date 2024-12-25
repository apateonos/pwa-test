// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global.js'; 
import Login from './pages/login.js';
import Home from './pages/home.js';
import About1 from './pages/about1.js';
import About2 from './pages/about2.js'; // 예시로 About 페이지 추가
import styled from 'styled-components';

function App() {
    const [showImage, setShowImage] = useState(true); // 이미지를 보여줄지 말지를 상태로 관리
  
    // 3초 후에 이미지를 숨기고 다른 화면으로 전환
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImage(false); // 3초 후에 이미지 숨김
      }, 3000); // 3000ms = 3초
    });

  return (
    <div>
    {showImage ? (
      <Image src="IMG_2221.PNG" alt="loading" />
    ) : (
      <Router>
      <div className="App">
        <GlobalStyle /> {/* 글로벌 스타일 적용 */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* 메인 화면 경로 */}
          <Route path="/about1" element={<About1 />} />
          <Route path="/about2" element={<About2 />} />
        </Routes>
      </div>
      </Router>
    )}
  </div>
  );
}

export default App;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;