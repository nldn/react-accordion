import { FC } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #d5d5d5;
`;

const Content = styled.div`
  border: 1px solid #d5d5d5;
`;

export const Accordion: FC = ({ children }) => {
  return (
    <div>
      <Header>
        <span>Toggle</span>
      </Header>
      <Content>
        {children}
      </Content>
    </div>
  );
};