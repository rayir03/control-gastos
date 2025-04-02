import styled from "styled-components";
import { ContentHeader, DataUsers } from "../../index";

export function Header({ state, setState }) {
    return (
        <ContentHeader>
            <DataUsers state={ state } setState={ setState } />
        </ContentHeader>
    )
}

const Container = styled.div`

`