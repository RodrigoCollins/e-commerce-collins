import CartWidget from "./CartWidget"


export const links = [
  {
    id: 1,
   path: '/about',
    text: 'About',
  },
  {
    id: 2,
    path: '/itemListContainer',
    text: 'Shop',
  },
  {
    id: 3,
    path: '/faq',
    text: 'FAQ',
  },
  {
    id: 4,
    path: '/cart' ,
    text: <CartWidget/>,
  },

];