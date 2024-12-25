import React, { useState } from 'react';
import styled from 'styled-components';

const TransactionPage = () => {
  const [transactions] = useState([
    // 2024년 12월 25일 - 10월 25일 거래 내역 (역순으로 배치)
    {
      date: '2024-12-25',
      time: '14:00',
      description: '원금/이자 납부',
      amount: -500000,
      type: '출금',
      balance: 17540100
    },
    {
      date: '2024-12-25',
      time: '14:00',
      description: '이자 (최종 조정)',
      amount: -65000, // 마지막 이자 조정
      type: '출금',
      balance: 11714507
    },
    {
      date: '2024-12-25',
      time: '10:00',
      description: '소프트웨어 구매 (Quixel)',
      amount: -4000000, // 소프트웨어 구매로 큰 금액이 나간 경우
      type: '출금',
      balance: 18040100
    },
    {
      date: '2024-12-13',
      time: '10:00',
      description: '이자 (0.00005%)',
      amount: 85025,
      type: '입금',
      balance: 22040100
    },
    {
      date: '2024-12-13',
      time: '11:00',
      description: 'Quixel 소프트웨어 구매',
      amount: -1100000, // 추가적인 소프트웨어 구매
      type: '출금',
      balance: 22455075
    },
    {
      date: '2024-12-13',
      time: '10:00',
      description: '이자 (0.00005%)',
      amount: 85025,
      type: '입금',
      balance: 23155075
    },
    {
      date: '2024-12-27',
      time: '09:30',
      description: '월급 (긴트 회사)',
      amount: 3000000,
      type: '입금',
      balance: 23470050
    },
    {
      date: '2024-11-30',
      time: '14:00',
      description: '원금/이자 납부',
      amount: -500000,
      type: '출금',
      balance: 20470050
    },
    {
      date: '2024-11-30',
      time: '12:00',
      description: '소프트웨어 구매 (Quixel)',
      amount: -1200000, // 소프트웨어 구매 금액
      type: '출금',
      balance: 20970050
    },
    {
      date: '2024-11-30',
      time: '14:00',
      description: '원금/이자 납부',
      amount: -500000,
      type: '출금',
      balance: 20470050
    },
    {
      date: '2024-11-13',
      time: '10:00',
      description: '이자 (0.00005%)',
      amount: 85025,
      type: '입금',
      balance: 21870050
    },
    {
      date: '2024-11-27',
      time: '09:30',
      description: '월급 (긴트 회사)',
      amount: 3000000,
      type: '입금',
      balance: 21785025
    },
    {
      date: '2024-11-13',
      time: '11:00',
      description: 'Quixel 소프트웨어 구매',
      amount: -1300000,
      type: '출금',
      balance: 18785025
    },
    {
      date: '2024-11-13',
      time: '10:00',
      description: '이자 (0.00005%)',
      amount: 85025,
      type: '입금',
      balance: 20085025
    },
    {
      date: '2024-10-27',
      time: '09:30',
      description: '월급 (긴트 회사)',
      amount: 3000000,
      type: '입금',
      balance: 20000000
    }
  ]);
  
  return (
    <Container>
      <h1>거래 내역 조회</h1>
      <CardContainer>
        {transactions.map((transaction, index) => (
          <TransactionCard key={index}>
            <TransactionHeader>{transaction.date}</TransactionHeader>
            <BillWrapper>
            <TextWrapper>
              <DiscriptionWrapper>
                <Time>{transaction.time}</Time>
                <Description> | {transaction.description}</Description>
              </DiscriptionWrapper>
              <Title>{transaction.title}</Title>
            </TextWrapper>
            <AmountWrapper>
            <Type className={transaction.type}>{transaction.type}</Type>
            <Amount type={transaction.type}>
              {transaction.amount.toLocaleString()}원
            </Amount>
            <Balance>잔액 {transaction.balance}원</Balance>
            </AmountWrapper>
            </BillWrapper>
          </TransactionCard>
        ))}
      </CardContainer>
    </Container>
  );
};

const BillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: bold;
`;
const Time = styled.div`
  font-size: 0.7rem;
`;
const DiscriptionWrapper = styled.div`
  display: flex;
`;
const TextWrapper = styled.div``;
const AmountWrapper = styled.div`
  position:relative;
  text-align: right;
  font-size: 0.85rem;
`;
const Balance = styled.div`
  font-size: 0.75rem;
`;
const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const TransactionCard = styled.div`
`;

const TransactionHeader = styled.div`
  font-size: 0.85rem;
  color: #6C747E;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

const Description = styled.p`
  font-size: 0.7rem;
  color: #555;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ type }) => (type === '입금' ? 'green' : 'red')};;
`;

const Type = styled.p`
  font-size: 16px;
  color: ${({ className }) => (className === '입금' ? 'green' : 'red')};
`;

export default TransactionPage;
