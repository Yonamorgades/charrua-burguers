import React from 'react';

import {
  Nav,
  NavIcon,
  Bars,
  CartIcon,
  NavMain,
  NavIcons,
  Logo,
  CartIconContainer
} from './NavBarElements';
import {connect} from 'react-redux';
import bg from '../../Images/Logo/vector/isolated-monochrome-white.svg'
const Navbar = ({toggle, Cart, addItem, RemoveItem}) => {
  return (
    <Nav>
       <a href="/"><Logo src={bg}></Logo></a>
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
