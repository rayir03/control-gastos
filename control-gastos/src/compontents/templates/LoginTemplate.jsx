import styled from "styled-components";
export function LoginTemplate() {
  return (
    <Container>
      <div>
        <span>versión 1.0</span>
        <div>
          <img src="" alt="" />
        </div>
        <Titulo>CDC</Titulo>
        <p>Toma el control de tus gastos e ingresos</p>
      </div>

      
    </Container>
  );
}
const Container =styled.div`
  
`

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`