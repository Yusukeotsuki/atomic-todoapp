import { CompleteButton } from "../atom/CompleteButton";
import { InputArea } from "../atom/InputArea";
import styled from "styled-components";

export const InputAreaButton = (props) => {
  const { todoText, onChangeTodoText, onClick } = props;
  // console.log("molecule");
  // console.log(props);

  return (
    <Sdiv>
      <InputArea>
        todoText={todoText}
        onChangeTodoText = {onChangeTodoText}
      </InputArea>
      <CompleteButton>onClick={onClick}</CompleteButton>
    </Sdiv>
  );
};

const Sdiv = styled.div`
  display: flex;
`;
