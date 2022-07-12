import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  const onClick = (event) => {
    setToDos(toDos.filter((toDo) => toDo.event !== event));
  };

  return (
    <Wrapper>
      <div className="fisrt">
        <form onSubmit={onSubmit}>
          <Input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="할 일을 입력하세요"
          />
          <AddBtn>추가</AddBtn>
        </form>
        <h1>Todo List</h1>
        <div>
          <ol>
            {toDos.map((item, index) => (
              <List key={index}>
                {item}
                <br />
                <DeleteBtn onClick={() => onClick(toDos.event)}>삭제</DeleteBtn>
              </List>
            ))}
          </ol>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 4px solid skyblue;
  width: 50vw;
`;

const AddBtn = styled.button`
  margin-left: 20px;
  border: 3px solid skyblue;
  background-color: skyblue;
  color: white;
`;

const List = styled.li`
  border: 2px solid skyblue;
  width: 50vw;
  padding: 10px;
  margin-bottom: 5px;
`;

const DeleteBtn = styled.button`
  margin-top: 8px;
  border: 2px solid skyblue;
  background-color: white;
  color: skyblue;
`;
