import { Input } from "antd";
import styled from "styled-components";

const InputComp = styled(Input)`
  background: ${(p) => p.theme.colors.white};
  border: none;
  font-weight: ${(p) => p.theme.font.weight.light};
  font-family: ${(p) => p.theme.font.family};
  font-size: 12px;
  color: ${(p) => p.theme.colors.gray};
  width: 90%;
  margin-left: 14px;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default InputComp;
