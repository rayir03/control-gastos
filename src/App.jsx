import { MyRoutes, Sidebar, Device, Light, Dark, AuthContextProvider, MenuHambur, useUsuariosStore } from "./index"
import { createContext, useState } from "react";
import {useLocation} from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query"
export const ThemeContext = createContext(null);

function App() {
  
  const { mostrarUsuarios, datausuarios} = useUsuariosStore();

  const { pathname } = useLocation();
  // const [ theme, setTheme ] = useState("dark");
  const theme = datausuarios?.tema === "0" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"], 
    queryFn: () => mostrarUsuarios(),
  });
 if(isLoading) {
  return <h1>Cargando...</h1>
 }
 if(error) {
  return <h1>Error...</h1>
 }
  return (
    <>
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={ themeStyle }>
        <AuthContextProvider>
          {
            pathname != "/login" ? (
              <Container className={sidebarOpen ? "active" : ""}>
            <div className="ContentSidebar">
              <Sidebar state={sidebarOpen} setState={setSidebarOpen}/>
            </div>
            <div className="ContentMenuHambur">
              <MenuHambur />
            </div>
            <Containerbody>

              <MyRoutes />
            </Containerbody>
          </Container>
            ) : (
              <Login />
            )
          }
          
          <ReactQueryDevtools initialIsOpen={true} />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
    
      
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${(props) => props.theme.bgtotal};
  transition: 0.3s ease-in-out;
  .ContentSidebar {
    display: none;
  }
  .ContentMenuHambur{
    display: block;
    position: absolute;
    left: 20px;
  }
@media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuHambur {
      display: none;
    }
  }
`;
const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App
