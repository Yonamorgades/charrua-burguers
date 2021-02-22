import styled from 'styled-components';
import {IoIosAddCircleOutline} from "react-icons/io";
import {IoIosRemoveCircleOutline} from "react-icons/io";


export const Row = styled.div `
  border-bottom:2px solid gray;
  color:white;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  background-position: center;
  background-size: cover;
  heigth:100%;
  display:flex;
  flex-direction:row;
`;

export const FilterContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
  border:1px solid white;
  margin-left:30px;
`
export const CheckFilter = styled('input')`
  margin:0px 10px;
`
export const FilterItem = styled.span`
  margin:10px 30px;
`
export const H3 = styled.p `
  letter-spacing:2px;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  height:120px;

`;
export const H1 = styled.p `
  text-transform:uppercase;
  text-align:center;
  font-size:32px;
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
  border-left:2px solid white; 
  border-right:2px solid white; 
  margin:20px 70px;
  border-radius:20px;
  display:flex;
  flex-direction:column;
  color:white;
  padding:20px;
  align-items:center;
  height:700px;
  `;

export const ProductInfo = styled.div `
  flex-grow: 1;
  border:2px solid black;
  padding:5px 20px;
  border-radius:10px;
  text-align:center;
  background-color: rgba(0, 30, 20, 0.4);
  `;


export const Price = styled.div `
  color:#FDC500;
  font-size: 2rem;
  text-align:center;
  margin-top:20px;
`;

export const ProductImg = styled.div `
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
flex-grow: 1;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
`;

export const P = styled.p `
  margin-top:10px;
  font-size:18px;
  font-weight:0;
  font-family:Arial, Sans-serif;
  height:80px;
`;
export const Count = styled.div `
  font-size:32px;
  margin:0 15px;
  border-radius:10px;
  height:50px;
  background-color:red;
  width:100px;
`;
