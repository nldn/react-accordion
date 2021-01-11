import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #d5d5d5;
`;

const Toggle = styled.span`
  cursor: pointer;
  padding: 15px 24px;
`;

const Content = styled.div<{ isOpen: boolean, contentRef: React.RefObject<HTMLDivElement> }>`
  overflow: hidden;
  border: 1px solid #d5d5d5;
  max-height: ${({ isOpen, contentRef }) => isOpen ? contentRef?.current?.scrollHeight + 'px' : 0};
  transition: max-height 500ms ease-in-out;
`;

export const Accordion: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header>
        <Toggle onClick={() => setIsOpen(!isOpen)}>Toggle</Toggle>
      </Header>
      <Content ref={contentRef} contentRef={contentRef} isOpen={isOpen}>
        {children}
      </Content>
    </div>
  );
};