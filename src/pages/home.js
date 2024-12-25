import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 임포트
import HomeIcon from '../assets/home.js';

const Home = () => {
  const navigate = useNavigate();

  const handleAccountAction = (action) => {
    alert(`${action} 버튼이 눌렸습니다.`);
  };

  return (
    <HomeWrapper>
      {/* Main Bar */}
      <MainBar>
        <Topbarimg src='topbar.png'/>
      </MainBar>

      {/* Ad Banner 1 */}
      <MainWrapper>
        <AdBanner>
          <AdImage src='ad1.png'/>
          <AdTextWrapper>
            <TextWrapper>
              <AdTitle>해외여행 혜택 가득한 NEW 카드 출시</AdTitle>
              <Adsubtitle>혜택 확인하고 지금 발급해보세요!</Adsubtitle>
            </TextWrapper>
          </AdTextWrapper>
        </AdBanner>

      {/* 내 계좌 */}
      <AccountSection>
        <AccountTitle>내 계좌</AccountTitle>
        <BalanceCard>
          <Link to='/about1'>
          <NameWrapper>
                <ImageName src='shc_symbol_ci.png'/>
                <NameTextWrapper>
                    <AccountName>입출금 U드림 저축예금(인터넷 전용)</AccountName>
                    <AccountNumber>신한 110-326-182985</AccountNumber>
                </NameTextWrapper>
            </NameWrapper>
          <Balance>11,714,507원</Balance>
          <ActionButtons>
            <ActionButton onClick={() => handleAccountAction('이체')}>이체</ActionButton>
            <ActionButton onClick={() => handleAccountAction('간편 앱 출금')}>간편 앱 출금</ActionButton>
          </ActionButtons>
          </Link>
        </BalanceCard>
        <BalanceCard>
          <Link to='/about2'>
            <NameWrapper>
                  <ImageName src='shc_symbol_ci.png'/>
                  <NameTextWrapper>
                      <AccountName>입출금 Y24 일반예금(창구 전용)</AccountName>
                      <AccountNumber>신한 121-326-318335</AccountNumber>
                  </NameTextWrapper>
              </NameWrapper>
            <Balance>35,000,000원</Balance>
            <ActionButtons>
              <ActionButton onClick={() => handleAccountAction('이체')}>이체</ActionButton>
              <ActionButton onClick={() => handleAccountAction('간편 앱 출금')}>간편 앱 출금</ActionButton>
            </ActionButtons>
          </Link>
        </BalanceCard>
      </AccountSection>

      {/* Ad Banner 2 */}
      <AdBanner>
          <AdImage src='ad1.png'/>
          <AdTextWrapper>
            <TextWrapper>
              <AdTitle>해외여행 혜택 가득한 NEW 카드 출시</AdTitle>
              <Adsubtitle>혜택 확인하고 지금 발급해보세요!</Adsubtitle>
            </TextWrapper>
          </AdTextWrapper>
        </AdBanner>
      </MainWrapper>

      {/* Fixed Category Bar */}
      <CategoryBar>
        <img src='category.png'/>
        <CategoryItem>홈</CategoryItem>
        <CategoryItem>자산관리</CategoryItem>
        <CategoryItem>상품</CategoryItem>
        <CategoryItem>혜택</CategoryItem>
        <CategoryItem>전체메뉴</CategoryItem>
      </CategoryBar>
    </HomeWrapper>
  );
};
const Topbarimg = styled.img`
  width: 100%;
  height: auto;
`;  

const AdImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  `;
const TextWrapper = styled.div``;
const AdTextWrapper = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: auto;
`;
const Adsubtitle = styled.div`
  font-weight: bold;
  font-size: 0.85rem;
`;
const AdTitle = styled.div`
  color: #6C747E;
  font-size: 0.75rem;
`;
const NameWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;
const ImageName = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 5px;
`;
const NameTextWrapper = styled.div`
`;
const AccountNumber = styled.div`
  font-size: 0.77rem;
  color: #666666;
`;

const MainWrapper = styled.div`
    margin: 0 20px;
`;


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F9FAFD;
`;

const MainBar = styled.div`
  background-color: #FFFFFF;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const AdBanner = styled.div`
  padding: 0.25rem 1rem;
  background-color: #F3F6FB;
  border: 1px solid #EBEFF5;
  border-radius: 12px;
  display: flex;
  margin-bottom: 10px;
`;

const AdText = styled.p`
  font-size: 18px;
`;

const AccountSection = styled.div`

`;

const AccountTitle = styled.h2`
  font-size: 1rem;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 12px;
  margin-bottom: 10px;
  background-color: #FFFFFF;
`;

const BalanceCard = styled.div`
  background-color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const AccountName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #444;
`;

const Balance = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
`;

const ActionButton = styled.button`
  flex-grow: 1; 
  padding: 10px 0;
  font-weight: bold;
  background-color: #E5F0FC;
  color: #0471E9;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0d74d4;
  }
`;

const CategoryBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  color: white;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
`;

const CategoryItem = styled.div`
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Home;                                                                                                                                                                            
