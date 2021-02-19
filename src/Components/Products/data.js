import product1 from '../../Images/product-1.jpg';
import product2 from '../../Images/product-2.jpg';
import product3 from '../../Images/product-3.jpg';
import menuProduct from '../../Images/menu-1.jpg';

export const productData = [
  {
    img: product1,
    name: 'El pistolero',
    desc:
      'Morron, Cebolla, 120g Carne, Tomate , Queso, Mostaza',
    price: '$350',
    button: 'Agregar al carrito'
  },
  {
    img: product2,
    name: 'La rendidora',
    desc:
      'Huevo frito, 160g Carne, Tomate , Queso',
    price: '$300',
    button: 'Agregar al carrito'
  },
  {
    img: product3,
    alt: 'Hamburguesa',
    name: 'La titular',
    desc:
      '160g Carne, 2 Huevos, Panceta, Queso cheddar',
    price: '$420',
    button: 'Agregar al carrito'
  }
];

export const productDataTwo = [
  {
    id:1,
    img: product1,
    name: 'Hamburguesa completa',
    desc:
    'Morron, Cebolla, 120g Carne, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$300',
  },
  {
    id:2,
    img: menuProduct,
    name: 'Hamburguesa economica',
    desc:
    'Tomate, Lechuga, 120g Carne, Muzzarella',
    price: '$160',
  }
  ,
  {
    id:3,
    img: product2,
    name: 'Hamburguesa infantil',
    desc:
    '120g Carne, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$180',
  }
  ,
  {
    id:6,
    img: product1,
    name: 'Hamburguesa de pollo',
    desc:
    'Morron, Cebolla, 120g pollo, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$240',
  }
  ,
  {
    id:5,
    img: product3,
    name: 'Hamburguesa picante',
    desc:
    'Morron, Cebolla, 120g Carne, Tomate , Queso, Mostaza, Salsa picante, Pimientos',
    price: '$240',
  },
];
