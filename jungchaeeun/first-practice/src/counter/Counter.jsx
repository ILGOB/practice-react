import React, { useState } from 'react';

const styles = {
  main: {
    margin: '100px',
    alignItems: 'center',
    border: '3px solid blue',
    display: 'flex',
    justifyContent: 'center',
    width: '600px',
    height: '400px',
  },

  button: {
    margin: '50px',
    width: '40px',
    height: '40px',
    backgroundColor: 'lightgresy',
    border: 'none',
  },
};

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
    <main style={styles.main}>
      <button style={styles.button} onClick={onDecreaseTwo}>
        -2
      </button>
      <button style={styles.button} onClick={onDecreaseOne}>
        -1
      </button>
      <h1>{count}</h1>
      <button style={styles.button} onClick={onIncreaseOne}>
        +1
      </button>
      <button style={styles.button} onClick={onIncreaseTwo}>
        +2
      </button>
    </main>
  );
};

export default Counter;
