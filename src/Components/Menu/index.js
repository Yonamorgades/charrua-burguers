import React from 'react'
import {connect} from 'react-redux';
import {
  Row,
  ProductCard,
  H1,
  H3,
  P,
  Price,
  ImgContainer,
  ProductImg,
  MenuContainer,
  Scroll,
  ProductInfo,
  ProductActions,
  ProductActionsMobile,
  Count,
  Add,
  Remove
} from './MenuElements';

function Menu({heading, data, Cart, addItem, RemoveItem}) {

  return (
    <MenuContainer>
      <H1>{heading}</H1>
      <Scroll>
        {data.map((p, i) => {
          return (
            <Row key={i} img={p.img}>
              <ProductCard >
                <ImgContainer>
                  <ProductImg img={p.img}></ProductImg>
                </ImgContainer>
                <ProductInfo>
                  <H3>{p.name}</H3>
                  <P>{p.desc}</P>
                  <Price>{p.price}</Price>
                  <ProductActionsMobile>
                  <Add onClick={() => addItem(p)}></Add>
                  <Count><p>{Cart
                      .filter(i => i.id === p.id)
                      .length}</p></Count>
                  <Remove onClick={() => RemoveItem(p)}></Remove>
                </ProductActionsMobile>
                </ProductInfo>
                <ProductActions>
                  <Add onClick={() => addItem(p)}></Add>
                  <Count><p>{Cart
                      .filter(i => i.id === p.id)
                      .length}</p></Count>
                  <Remove onClick={() => RemoveItem(p)}></Remove>
                </ProductActions>
              </ProductCard>
            </Row>
          )
        })}
      </Scroll>
    </MenuContainer>
  )

}
const mapStateToProps = state => ({Cart: state.items})

const mapDispatchToProps = dispatch => ({
  addItem(item) {
    dispatch({type: 'ADD_ITEM', item})
  },
  RemoveItem(item) {
    dispatch({type: 'REMOVE_ITEM', item})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
