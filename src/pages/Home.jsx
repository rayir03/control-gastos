import styled from "styled-components";
import { useAuthStore, UserAuth} from "../index";
export function Home() {
  const {signout} = useAuthStore();
  const { user } = UserAuth();
  
  return (<Container>
    <h1>Bienvenido a Home {user.full_name}</h1>
    
    {user?.picture && <img src={user.picture }/>}
    
    <button onClick={signout}>Cerrar</button>

  </Container>);
}
const Container =styled.div`
  height: 100vh;
`