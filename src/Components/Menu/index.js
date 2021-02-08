import React from 'react'

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
  Count,
  Add,Remove
} from './MenuElements';
function Menu({heading, data}) {
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
                </ProductInfo>
                <ProductActions>
                  <Add></Add>
                  <Count>0</Count>
                  <Remove></Remove>
                </ProductActions>
              </ProductCard>
            </Row>
          )
        })}
      </Scroll>
    </MenuContainer>
  )

}
export default Menu;