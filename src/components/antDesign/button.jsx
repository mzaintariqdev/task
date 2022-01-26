import { Button } from "antd";
import styled from "styled-components";

const ButtonComp = styled(Button)`
  background: ${(p) => p.theme.colors.primary};
  border-radius: 14px;
  margin-bottom: 29px;
  border: 1px solid rgba(150, 169, 186, 0.7);
  justify-content: center;
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.font.weight.semiBold};
  font-size: 12px;
  color: #fdfdfe;
  cursor: pointer;
`;

export default ButtonComp;
