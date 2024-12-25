import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트

function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordLength, setPasswordLength] = useState(0);
  const [keypadLayout, setKeypadLayout] = useState([]);
  const [lastDigit, setLastDigit] = useState(null); // 마지막 버튼에 랜덤 숫자 저장
  const [isLocked, setIsLocked] = useState(false); // 비밀번호가 6자리일 때 키패드 잠금
  const correctPassword = '123456'; // 예시 비밀번호 (올바른 비밀번호)

  const navigate = useNavigate(); // useNavigate를 사용하여 페이지 이동

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (num) => {
    if (passwordLength < 6 && !isLocked) {
      setPassword((prev) => prev + num);
      setPasswordLength(passwordLength + 1);
    }
  };

  // 로그인 처리 핸들러
  const handleSubmit = (e) => {
    if (password === correctPassword) {
      navigate('/home'); // 로그인 성공 시 메인 화면으로 이동
    } else {
      setError('비밀번호가 잘못되었습니다.');
      setPassword(''); // 비밀번호 초기화
      setPasswordLength(0); // 입력된 자리수 초기화
      handleShuffle();
    }
  };

  // Backspace 핸들러
  const handleBackspace = () => {
    if (passwordLength > 0) {
      setPassword(password.slice(0, -1));
      setPasswordLength(passwordLength - 1);
    }
  };

  // 재배열 버튼 핸들러
  const handleShuffle = () => {
    const arr = shuffleArray([...Array(10).keys()]);
    setKeypadLayout(arr); // 1~9의 배열 생성
    setLastDigit(arr[9]); 
  };

  // 키패드 배열 랜덤화 함수
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 두 요소를 교환
    }
    return arr;
  };

  // 초기 키패드 배열 설정
  useEffect(() => {
    const arr = shuffleArray([...Array(10).keys()]);
    setKeypadLayout(arr); // 1~9의 배열 생성
    setLastDigit(arr[9]); // 랜덤으로 마지막 숫자 설정
  }, []);

  // 비밀번호가 6자리일 경우 키패드 잠금
  useEffect(() => {
    if (passwordLength === 6) {
        console.log(password);
        handleSubmit();
    }
  }, [passwordLength]);

  return (
    <LoginWrapper>
      <BackButton onClick={() => window.history.back()}>&#8592;</BackButton>
      <LoginContainer>
        <Title>신한인증서</Title>  
        {error ? <Error>{error} 비밀번호를 다시 입력해주세요.</Error> : <Subtitle>비밀번호를 입력해주세요.</Subtitle>} {/* 에러 메시지 */}
        <PasswordBox>
          {Array(6)
            .fill('')
            .map((_, index) => (
              <Circle key={index} filled={index < passwordLength} />
            ))}
        </PasswordBox>
        <Keypad>
          {keypadLayout.slice(0, 9).map((num) => (
            <Key key={num} onClick={() => handlePasswordChange(num)}>
              {num} {/* 1부터 9까지 숫자 */}
            </Key>
          ))}
          <Key onClick={handleShuffle}>재배열</Key>
          <Key onClick={() => handlePasswordChange(lastDigit)}>{lastDigit}</Key> {/* 랜덤 숫자 */}
          <Key onClick={handleBackspace}>뒤로</Key>
        </Keypad>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Login;

// src/pages/Login.js (스타일 부분)
const LoginWrapper = styled.div`
  height: 100vh;
  background-color: #FFFFFF;
  position: relative;
`;

const LoginContainer = styled.div`
  background-color: transparent;
  width: 100%;
  position: relative;
  text-align: center;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #1e90ff;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  padding-top: 9rem;
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const PasswordBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 7.5rem;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${({ filled }) => (filled ? 'none' : '1px solid #333;')};
  background-color: ${({ filled }) => (filled ? '#1e90ff' : '#fff')};
  transition: background-color 0.3s ease;
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const Keypad = styled.div`
  width: 100%; /* 화면 전체 너비 */
  height: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Key = styled.button`
  padding: 20px;
  background-color: #0471E9;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0471E9;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShuffleButton = styled.button`
  background-color: #1e90ff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0d74d4;
  }
`;

const BackspaceButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e04f3f;
  }
`;
