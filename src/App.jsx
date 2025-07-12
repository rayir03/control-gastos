import { MyRoutes, Sidebar, Device, Light, Dark, AuthContextProvider, MenuHambur } from "./index"
import { createContext, useState } from "react";

import { ThemeProvider, styled } from "styled-components";
export const ThemeContext = createContext(null);

function App() {
  const [ theme, setTheme ] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
 
  return (
    <>
    <ThemeContext.Provider value={{ setTheme,  theme }}>
      <ThemeProvider theme={ themeStyle }>
        <AuthContextProvider>
          <Container>
            <div className="ContentSidebar">
              <Sidebar />
            </div>
            <div className="ContentMenuHambur">
              <MenuHambur />
            </div>
            <Containerbody>

              <MyRoutes />
            </Containerbody>
          </Container>

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
