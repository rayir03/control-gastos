import styled from "styled-components";
import { ItemsDesplegable, v } from "../../index"
export function ListaMenuDesplegable({data, top}) {
  return (
  <Container top={top}>
    {
      data.map((item, index) => {
        return (
          <ItemsDesplegable 
            key={index}
            item={item}
          />
        )
      })
    }
  </Container>
  );
}
const Container =styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({theme})=> theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${()=> v.boxshadowGray};
`