import styled from "styled-components";

export const InputArea = (props) => {
  const { todoText, onChange } = props;
  return (
    <div>
      <SInput
        type="text"
        placeholder="write todo"
        value={todoText}
        onChange={onChange}
      />
    </div>
  );
};

const SInput = styled.input`
  background-color: #c0c0c0;
  color: #fff;
  border-radius: 16px;
  border: none;
  padding: 6px 16px;
  outline: none;
`;
