import { InputAreaButton } from "../molecule/InputAreaButton";
import styled from "styled-components";
export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClick } = props;
  console.log("organism");
  console.log(props);
  console.log(onClick);
  return (
    <Sdiv>
      <InputAreaButton>
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClick}
      </InputAreaButton>
    </Sdiv>
  );
};

const Sdiv = styled.div`
  background-color: #c1ffff;
  width: 400px;
  height: 30px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
