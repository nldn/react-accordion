import { FC, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #d5d5d5;
`;

const Content = styled.div<{ isOpen: boolean, height: number }>`
  overflow: hidden;
  border: 1px solid #d5d5d5;
  max-height: ${({ isOpen, height }) => isOpen === true ? height + 'px' : 0};
  transition: max-height 500ms ease-in-out;
`;

export const Accordion: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    };
  }, []);

  return (
    <div>
      <Header>
        <span onClick={() => setIsOpen(!isOpen)}>Toggle</span>
      </Header>
      <Content ref={contentRef} isOpen={isOpen} height={height}>
        {children}
      </Content>
    </div>
  );
};