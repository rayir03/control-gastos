import styled from "styled-components";
import { v, LinksArray } from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({state, setState}) {
  return (
  
    <Main >
        <Container isOpen={state}>
          <div className="Logocontent">
            <div className="imgcontent">
              <img src={v.logo}/>
              <h2>CerDis</h2>
            </div>
          </div>
          {
            LinksArray.map(({ icon, label,to }) => (
              <NavLink to={to}>
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            ))
          }
          <Divider />
        </Container>
    </Main>
  
  );
}
const Container =styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .imgcontent{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${({isOpen}) => (isOpen?`scale(0.7)`:`scale(1.5)`)} 
      rotate(${(props) => props.theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
    @keyframes flotar {
      0%   {
        transform: translate(0, 0px);
      }
      50%   {
        transform: translate(0, 4px);
      }
      100%   {
        transform: translate(0, -0px);
      }
    }
  }
`
const Main = styled.div`
    
`
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`