import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color:black;
  border-top:1px solid white;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;


  
export const SocialNameContainer = styled.div`
  color:white;
  font-size:20px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;
export const SocialName = styled.p`
    letter-spacing:1px;
    font-weigth:200;
    font-style:Bold;
    margin:0 10px;
    font-size:1rem;
    @media screen and (max-width: 820px) {
      display:none;
    }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:50px;
  @media screen and (max-width: 820px) {
    justify-content: flex-end;
  }

`;

export const SocialIconLink = styled.a`
  color: #fff;
  margin:0 20px;
  font-size: 24px;
  text-decoration:none;
`;
