import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #d5d5d5;
`;

export const Accordion = () => {
  return (
    <div>
      <Header>
        <span>Toggle</span>
      </Header>
    </div>
  );
};