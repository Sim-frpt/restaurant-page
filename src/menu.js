const menuContents = [
  {
    name: "Margherita",
    ingredients: "tomato, mozzarela, oregano",
    price: 10,
  },
  {
    name: "Napolitana",
    ingredients: "tomato, mozzarela, oregano, mushrooms",
    price: 12,
  },
  {
    name: "Capriciosa",
    ingredients: "tomato, mozzarela, oregano, mushrooms, ham",
    price: 12,
  },
  {
    name: "Diavola",
    ingredients: "tomato, mozzarela, pepperoni, oregano, mushrooms",
    price: 12,
  },
  {
    name: "Del Capo",
    ingredients: "tomato, mozzarela, oregano, mushrooms, Parma",
    price: 14,
  },
  {
    name: "Quattro Fromaggio",
    ingredients: "tomato, mozzarela, oregano, pargimiano, gorgonzola, magor",
    price: 14,
  },
];

function addMenu() {
  const menuDiv  = document.createElement( 'div' );
  const menuList = document.createElement( 'ul' );

  menuDiv.setAttribute( 'id', 'menu-content' );
  menuList.setAttribute( 'id', 'menu-list' );

  menuContents.forEach( pizza => {
    const menuListElement = document.createElement( 'li' );
    const nameSpan        = document.createElement( 'span' );
    const ingredientsSpan = document.createElement( 'span' );
    const priceSpan       = document.createElement( 'span' );

    menuListElement.classList.add( 'menu-list-item' );
    nameSpan.classList.add( 'name-span' );
    ingredientsSpan.classList.add( 'ingredients-span' );
    priceSpan.classList.add( 'price-span' );

    nameSpan.textContent = pizza.name;
    ingredientsSpan.textContent = pizza.ingredients;
    priceSpan.textContent = pizza.price;

    menuListElement.append( nameSpan, ingredientsSpan, priceSpan );
    menuList.append( menuListElement );
  });

    menuDiv.append( menuList );
    document.body.append( menuDiv );
}

export { addMenu };
