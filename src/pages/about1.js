import React from 'react';
import styled from 'styled-components';

const TransactionPage = () => {
  return (
    <Container>
      {/* 상단 바 */}
      <TopBar>
        <h1>거래 내역 조회</h1>
      </TopBar>

      {/* 계좌 정보 */}
      <AccountInfo>
        <AccountDetail>
          <AccountName>입출금 U드림 저축예금(인터넷 전용)</AccountName>
          <AccountNumber>신한 110-326-182985</AccountNumber>
          <AccountBalance>11,714,507원</AccountBalance>
        </AccountDetail>
      </AccountInfo>

      {/* 이체와 계좌 관리 버튼 */}
      <ActionButtons>
        <Button>이체</Button>
        <Button>계좌 관리</Button>
      </ActionButtons>

      {/* 거래 내역 리스트 */}
      <TransactionList>
        <TransactionItem>
          <TransactionDate>2024-12-01</TransactionDate>
          <TransactionAmount>₩ 1,000,000</TransactionAmount>
          <TransactionType>입금</TransactionType>
        </TransactionItem>
        <TransactionItem>
          <TransactionDate>2024-12-02</TransactionDate>
          <TransactionAmount>₩ 500,000</TransactionAmount>
          <TransactionType>출금</TransactionType>
        </TransactionItem>
        {/* 추가적인 거래 내역들 */}
      </TransactionList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
`;

const TopBar = styled.div`
  background-color: #1e90ff;
  color: white;
  padding: 20px;
  text-align: center;
`;

const AccountInfo = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const AccountDetail = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const AccountName = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

const AccountNumber = styled.div`
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
`;

const AccountBalance = styled.div`
  font-size: 20px;
  color: #1e90ff;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;

  &:hover {
    background-color: #0d74d4;
  }
`;

const TransactionList = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const TransactionDate = styled.div`
  font-size: 16px;
  color: #555;
`;

const TransactionAmount = styled.div`
  font-size: 16px;
  color: #333;
`;

const TransactionType = styled.div`
  font-size: 16px;
  color: ${props => (props.children === '입금' ? 'green' : 'red')};
`;

export default TransactionPage;
