import styled from 'styled-components';
// import {NavLink as Link} from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import { HashLink } from 'react-router-hash-link';


export const Nav = styled.nav `
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-weight: 700;
  overflow: hidden;
  flex-wrap: wrap;
  position: fixed; 
  padding-top:20px;
  width: 100%;
  z-index:100;
  border-bottom:gray 1px solid;
  background-color:black;
  
`;
export const CartIconContainer = styled.div `
  cursor:pointer;

  ${props => props.count < 1} {
    &:after {
      content:'${props => props.count}';
      color:black;
      transition: 0.1s ease-out;
      transform: scale(1.2); 
      cursor: pointer;
      top:10px;
      right:75px;
      position:absolute;
      font-size:12px;
      text-align:center;
      background-color:#FFC500;
      width:18px;
      border-radius:50%;
      border:1px solid white;
    }
  }
}
 
`;

export const NavIcons = styled.div `
  display: flex;
  justify-content: flex-end;
  padding:5px 15px;
  
  width:33%;
  `


export const Logo = styled("img")`
  width:14rem;
  margin-left:20px;
`
export const NavMain = styled("h1")`
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  text-align:center;
  width:33%;
  @media screen and (max-width: 768px){   
   display:none;
  }
`;
export const NavIcon = styled.div `
  margin:0 10px;
  padding-right:5px;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  margin-left:15px;
  margin-bottom:5px;
`;


export const CartIcon = styled(FaShoppingCart)`
  font-size: 2rem;
  color:white;
  margin-bottom:5px;
`
