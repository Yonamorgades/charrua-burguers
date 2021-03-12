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
  margin-left:30px;
  @media screen and (max-width: 768px){   
    justify-content:center;
    width:100%;
    margin:0;
   }

`

export const FilterItem = styled.span`
  display:flex;
  flex-direction:row;
  margin:0 10px 0 30px;
  font-weight:300;
  font-size:1.4rem;
  color: white;
  padding:0 10px;
  &:hover{
    border-bottom:2px solid #FDC500;
    border-right:1px solid #FDC500;
  }
  ${props => !props.active} {
    border-bottom:2px solid #FDC500;
    border-right:1px solid #FDC500;
  }
  @media screen and (max-width: 768px){   
    font-size:1.8rem;
    margin:20px 10px 20px 50px;
   }
`


export const H3 = styled.p `
  font-size: 20px;
  text-align: center;
  margin-bottom:20px;
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
  border-top:3px solid #42B6E7;
  background-color:black;
`;

export const ProductCard = styled.div `
  border-left:2px solid #42B6E7; 
  border-right:2px solid #42B6E7; 
  margin:20px 50px;
  border-radius:20px;
  display:flex;
  flex-direction:column;
  color:white;
  padding:20px;
  align-items:center;
  height:500px;
  `;

export const ProductInfo = styled.div `
  flex-grow: 1;
  border:2px solid black;
  padding:5px 20px;
  border-radius:10px;
  text-align:center;
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
  height:15rem;
  width:15rem;
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

export const FilterText = styled.p`
@media screen and (max-width: 768px){   
  display:none;
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
  font-size:12px;
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
