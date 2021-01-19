import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 48px;
    background: none;
    border: none;
  }
`;

type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>备注</span>
      <input {...rest} />
    </Label>
  );
};

export {Input};
