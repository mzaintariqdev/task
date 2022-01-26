import { Button } from "antd";
import styled from "styled-components";

const ChatButtonComp = styled(Button)`
  border-radius: 14px;
  margin-bottom: 29px;
  justify-content: center;
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 12px;
  color: #fdfdfe;
  border: none;
  cursor: pointer;
`;

export default ChatButtonComp;
