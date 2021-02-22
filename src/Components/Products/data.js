import product1 from '../../Images/product-1.jpg';
import product2 from '../../Images/product-2.jpg';
import norteña from '../../Images/norteña-litro.jpg';
import coca from '../../Images/Cola_Cola600.jpg';
import corona  from '../../Images/cerveza_corona.jpg';
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
    category : "burguer",
    name: 'Hamburguesa completa',
    desc:
    'Morron, Cebolla, 120g Carne, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$300',
  },
  {
    id:2,
    img: menuProduct,
    category : "burguer",
    name: 'Hamburguesa economica',
    desc:
    'Tomate, Lechuga, 120g Carne, Muzzarella',
    price: '$160',
  }
  ,
  {
    id:3,
    img: product2,
    category : "burguer",
    name: 'Hamburguesa infantil',
    desc:
    '120g Carne, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$180',
  }
  ,
  {
    id:4,
    img: product1,
    category : "burguer",
    name: 'Hamburguesa de pollo',
    desc:
    'Morron, Cebolla, 120g pollo, Tomate , Mozzarella, Jamon, Huevo frito, Cheddar, Lechuga, Panceta',
    price: '$240',
  }
  ,
  {
    id:5,
    img: product3,
    category : "burguer",
    name: 'Hamburguesa picante',
    desc:
    'Morron, Cebolla, 120g Carne, Tomate , Queso, Mostaza, Salsa picante, Pimientos',
    price: '$240',
  },
  {
    id:6,
    category : "drink",
    img: norteña,
    name: 'Cerveza Norteña',
    desc:
    'Cerveza 1Lt Norteña',
    price: '$200',
  },
  {
    id:7,
    img: corona,
    category : "drink",
    name: 'Cerveza Corona',
    desc:
    'Cerveza 710mm Corona',
    price: '$200',
  },
  {
    id:8,
    img: coca,
    category : "drink",
    name: 'CocaCola',
    desc:
    'Cocacola 1Lt No retornable',
    price: '$170',
  },
];
