import styled from 'styled-components';
import {IoIosAddCircleOutline} from "react-icons/io";
import {IoIosRemoveCircleOutline} from "react-icons/io";

// @media screen and (max-width: 600px){   width: 50%;   display: block;
// margin-bottom: 20px; }
export const Row = styled.div `
  border-bottom:2px solid gray;
  color:white;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${props => props.img});
  background-position: center;
  background-size: cover;
  heigth:100%;
`;

export const H3 = styled.p `
  letter-spacing:2px;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;
export const H1 = styled.p `
  text-transform:uppercase;
  text-align:center;
  font-size:32px;
  margin:50px 0px;
`;

export const Scroll = styled.div ` 
  overflow : scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  max-height:700px;
  background-color:black;
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`;

export const MenuContainer = styled.div `
  width: 100%;
  position: relative;
  color:white;
  padding-top:20px;
  border-top:3px solid #ffc500;
  background-color:black;
`;

export const ProductCard = styled.div `
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  color:white;
  margin:20px 50px;
  padding:20px;
  height:100%;
 
`;

export const ProductInfo = styled.div `
  flex-grow: 1;
  width: 33%;
  border:2px solid black;
  padding:5px 20px;
  border-radius:10px;
  text-align:center;
  background-color: rgba(0, 30, 20, 0.4);
  `;
export const ImgContainer = styled.div `
  flex-grow: 1;
  width: 33%;
  padding-left:40px;
  @media screen and (max-width: 1300px){   
    display:none}
  `;

export const Price = styled.div `
  color:#FDC500;
  font-size: 2rem;
  text-align:center;
  margin-top:20px;
`;

export const ProductImg = styled.div `
  position:relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${props => props.img});
  background-position: center;
  background-size: cover;
  height:18rem;
  width:18rem;
  border-radius:50%;
  border:1px solid white;
`;

export const Add = styled(IoIosAddCircleOutline)`
  font-size: 4rem;
  color: #ffc500;
  transition: 0.1s ease-out;
  &:hover {
    transition: 0.1s ease-out;
    transform: scale(1.2); 
    cursor: pointer;
  }
  &:active {
    transition: 0.1s ease-in;
     transform: scale(1.5); 
    cursor: pointer;
  }
`;
export const Remove = styled(IoIosRemoveCircleOutline)`
  font-size: 4rem;
  color: #ffc500;
  transition: 0.2s ease-out;
  &:hover {
    transition: 0.1s ease-out;
    transform: scale(1.2); 
    cursor: pointer;
  }
  &:active {
    transition: 0.1s ease-in;
     transform: scale(1.5); 
    cursor: pointer;
  }


`;

export const ProductActions = styled.div `
width:33%;
flex-grow: 1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
@media screen and (max-width: 768px){   
    display:none}
`;
export const ProductActionsMobile = styled.div `
  margin-top:10px;
  display: none;
  @media screen and (max-width: 768px){   
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
`;
export const P = styled.p `
  margin-top:10px;
  font-size:14px;
  font-weight:0;
  font-family:Arial, Sans-serif;
`;
export const Count = styled.div `
  font-size:32px;
  margin:0 15px;
  border-radius:10px;
  height:50px;
  background-color:red;
  width:100px;
`;
