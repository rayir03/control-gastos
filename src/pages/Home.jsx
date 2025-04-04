import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";

export function Home() {
  const { signout } = useAuthStore();
  const { user } = UserAuth();
  return (
    <Container>
      <h1>Bienvenido a Home {user.full_name}</h1>
      <img src={user.picture} alt="" />
      <button onClick={ signout }>Cerrar</button>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`


