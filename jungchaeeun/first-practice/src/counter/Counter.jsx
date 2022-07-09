import React, { useState } from 'react';
import styled from 'styled-components';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncreaseOne = () => {
    setCount((num) => num + 1);
  };

  const onIncreaseTwo = () => {
    setCount((num) => num + 2);
  };

  const onDecreaseOne = () => {
    setCount((num) => num - 1);
  };

  const onDecreaseTwo = () => {
    setCount((num) => num - 2);
  };

  return (
    <Wrapper>
      <Main>
        <Button onClick={onDecreaseTwo}>-2</Button>
        <Button onClick={onDecreaseOne}>-1</Button>
        <h1>{count}</h1>
        <Button onClick={onIncreaseOne}>+1</Button>
        <Button onClick={onIncreaseTwo}>+2</Button>
      </Main>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  margin: 100px;
  align-items: center;
  border: 3px solid blue;
  display: flex;
  justify-content: center;
  width: 600px;
  height: 400px;
`;

const Button = styled.button`
  margin: 50px;
  width: 40px;
  height: 40px;
  background-color: lightgrey;
  border: none;
`;
