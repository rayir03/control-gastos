import styled from "styled-components";
import { ItemsDesplegable } from "../../index"

export function ListaMenuDesplegable({ data }) {
    return (
        <Container>
            {
                data.map((item, index) => {
                    return (
                        <ItemsDesplegable key={ index } item={ item } />
                    )
                })
            }
        </Container>
    );
}

const Container = styled.div`

`;