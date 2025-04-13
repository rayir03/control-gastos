import styled from "styled-components";
import { v, InputBuscadorLista, ConvertirCapitalize } from "../../index";
import iso from "iso-country-currency";
import { useState } from "react";


export function ListaPaises({ setSelect, setState }) {
    const isocodigos = iso.getAllISOCodes();
    const [ dataresult, setDataresult ] = useState([]);

    function seleccionar(p) {
        setSelect(p)
        setState();
    }

    function buscar(e) {
        let filtrado = isocodigos.filter((item) => {
            return item.countryName == ConvertirCapitalize(e.target.value)
        })
        setDataresult(filtrado);
    }
    return (
        <Container >
            <header className="header">
               <span>Busca tu país</span> 
               <span className="close" onClick={setState}>
                    {<v.iconocerrar />}
                </span> 
            </header>
            <InputBuscadorLista onChange={buscar} placeholder="buscar..."/>
            {
                dataresult.length > 0 &&
                dataresult.map((item, index ) => {
                    return (
                        <ItemContainer key={ index } onClick={() => seleccionar(item)}>
                           <span>{ item.countryName }</span> 
                           <span>{ item.symbol }</span>
                        </ItemContainer>
                    )
                })
            }
        </Container>
    )
};

const Container = styled.div`

`;
const ItemContainer = styled.section`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #303030;
    }
`