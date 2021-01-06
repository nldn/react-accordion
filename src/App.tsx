import styled from 'styled-components';
import './App.css';
import { Accordion } from './components/Accordion';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 128px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <div style={{ width: 768 }}>
          <Accordion>
            <div style={{ padding: 24 }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis dolore quibusdam, nemo eveniet doloremque tempora quisquam laborum vitae dolores facere rerum aperiam eos fugiat voluptatibus consequuntur labore ipsum facilis?
              </p>
            </div>
          </Accordion>

          <Accordion>
            <div style={{ padding: 24 }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis dolore quibusdam, nemo eveniet doloremque tempora quisquam laborum vitae dolores facere rerum aperiam eos fugiat voluptatibus consequuntur labore ipsum facilis?
              </p>
            </div>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default App;
