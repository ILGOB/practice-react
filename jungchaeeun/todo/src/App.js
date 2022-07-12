import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>
      <h1>Todo List</h1>
    </div>
  );
}

export default App;
