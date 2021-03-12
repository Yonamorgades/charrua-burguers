import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import {GoMail} from 'react-icons/go';
import {
  FooterContainer,
  SocialIcons,
  SocialIconLink,
  SocialName,
  SocialNameContainer
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <SocialNameContainer>
                  <FaFacebook/><SocialName>/CharruaBurguers</SocialName>
                </SocialNameContainer>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <SocialNameContainer>
                  <FaInstagram/><SocialName>@CharruaBurguers</SocialName>
                </SocialNameContainer>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <SocialNameContainer>
                  <GoMail/><SocialName>Charrua.Burguers@gmail.com</SocialName>
                </SocialNameContainer>
              </SocialIconLink>
            </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
