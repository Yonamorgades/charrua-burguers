import React from 'react';
import {
  SidebarContainer,
  CartInfo,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,CartTotal
} from './SidebarElements';
import {connect} from 'react-redux';

const Sidebar = ({ isOpen, toggle,Cart }) => {
  let total = 0;
  Cart.map((e)=> {total = total + e.price})
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarMenu>
        <SidebarLink to='/#MainProducts'>Destacados</SidebarLink>
        <SidebarLink to='/#Sale'>Promo</SidebarLink>
        <SidebarLink to='/#Menu'>Menu completo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <CartInfo>
          Total :
          <CartTotal>$ {total}</CartTotal>
          <SidebarRoute to='/'>Ordenar ahora</SidebarRoute>
        </CartInfo>
        
      </SideBtnWrap>
    </SidebarContainer>
  );
};
const mapStateToProps = state => ({Cart: state.items})


export default connect(mapStateToProps)(Sidebar)
