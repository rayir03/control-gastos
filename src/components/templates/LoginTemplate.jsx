import styled from "styled-components";
import { BtnSave, v } from "../../index"

export function LoginTemplate() {
  return (
    <Container>

        <div>
            <span>versión 1.0</span>
            <div>
                <img src="" alt="" />
            </div>
            <Titulo> Control Gastos</Titulo>
            <p>Toma el control de tus gastos e ingresos</p>
            <ContainerBtn>
              <BtnSave 
                titulo="Iniciar con google"
                icono={ <v.iconogoogle /> }
              />
            </ContainerBtn>
        </div>
    </Container>
  )
}
const Container = styled.div`
  background-image: url(${v.imagenfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

`

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`

