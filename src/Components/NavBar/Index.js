import React from 'react';

import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  MobileBars,
  CartIcon,
  NavMain,
  NavIcons,
  Logo,
  CartIconContainer
} from './NavBarElements';
import {connect} from 'react-redux';
import bg from '../../Images/Logo/vector/default-monochrome.svg'
const Navbar = ({toggle, Cart, addItem, RemoveItem}) => {
  return (
    <Nav>
      <NavLink to='/'>
        <Logo src={bg}></Logo>
      </NavLink>
      <NavMain></NavMain>
      <NavIcons>
        <CartIconContainer count={Cart.length}>
          <CartIcon></CartIcon>
        </CartIconContainer>
        <NavIcon onClick={toggle}>
          <Bars/>
        </NavIcon>
      </NavIcons>
    </Nav>
  );
};

const mapStateToProps = state => ({Cart: state.items})

const mapDispatchToProps = dispatch => ({
  addItem(item) {
    dispatch({type: 'ADD_ITEM', item})
  },
  RemoveItem(item) {
    dispatch({type: 'REMOVE_ITEM', item})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
