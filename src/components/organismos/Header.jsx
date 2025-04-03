import styled from "styled-components";
import { ContentHeader, DataUsers } from "../../index";

export function Header({ stateConfig}) {
    return (
        <ContentHeader>
            <DataUsers stateConfig={ stateConfig } />
        </ContentHeader>
    )
}

const Container = styled.div`

`