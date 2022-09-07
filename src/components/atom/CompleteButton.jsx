import styled from "styled-components";
import { CommonButton } from "./CommonButton";

export const CompleteButton = (props) => {
  const { onClick } = props;
  // console.log("atom-button");
  // console.log(props);

  return (
    <div>
      <SButton onClick={onClick}>complete</SButton>
    </div>
  );
};

const SButton = styled(CommonButton)`
  background-color: #11999e;
`;
