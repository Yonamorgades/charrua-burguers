import React, {useState} from 'react'
import {connect} from 'react-redux';
import Carousel from 'react-elastic-carousel'

import {
  ProductCard,
  H1,
  H3,
  P,
  Price,
  ProductImg,
  MenuContainer,
  ProductInfo,
  ProductActions,
  Count,
  Add,
  Remove,
  FilterContainer,
  FilterItem,
  CheckFilter
} from './MenuElements';

function Menu({heading, data, Cart, addItem, RemoveItem}) {
  const [filterValue,
    setFilterValue] = useState("");
  const handleFilter = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <MenuContainer id="Menu">
      <H1>{heading}</H1>
      <FilterContainer>
        
        <FilterItem>
          <CheckFilter
            type="radio"
            value=""
            checked={!filterValue
            ? true
            : false}
            onClick={(e) => handleFilter(e)}></CheckFilter>Todo</FilterItem>
        <FilterItem>
          <CheckFilter
            type="radio"
            value="burguer"
            checked={filterValue === "burguer"
            ? true
            : false}
            onClick={(e) => handleFilter(e)}></CheckFilter>Hamburguesa</FilterItem>
        <FilterItem>
          <CheckFilter
            type="radio"
            value="drink"
            checked={filterValue === "drink"
            ? true
            : false}
            onClick={(e) => handleFilter(e)}></CheckFilter>Bebidas</FilterItem>
      </FilterContainer>
      <Carousel
        showArrows={false}
        transitionMs={1000}
        pagination={false}
        focusOnSelect={false}
        breakPoints={[
        {
          width: 550,
          itemsToShow: 1,
          itemsToScroll: 1,
          pagination: false
        }, {
          width: 850,
          itemsToShow: 3
        }, {
          width: 1150,
          itemsToShow: 3,
          itemsToScroll: 2
        }, {
          width: 1450,
          itemsToShow: 4
        }
      ]}
        enableSwipe>

        {data.map((p, i) => {
          if (filterValue !== "" && p.category !== filterValue) {
            return false;
          }
          return (
            <ProductCard key={i}>
              <ProductImg img={p.img}></ProductImg>
              <ProductInfo>
                <H3>{p.name}</H3>
                <P>{p.desc}</P>
                <Price>{p.price}</Price>
                <ProductActions>
                  <Add onClick={() => addItem(p)}></Add>
                  <Count>
                    <p>{Cart
                        .filter(i => i.id === p.id)
                        .length}</p>
                  </Count>
                  <Remove onClick={() => RemoveItem(p)}></Remove>
                </ProductActions>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </Carousel>
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
