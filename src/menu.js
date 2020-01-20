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
  const contentDiv = document.getElementById( 'content' );

  const menuDiv      = document.createElement( 'div' );
  const menuHeadline = document.createElement( 'h1' );
  const menuList     = document.createElement( 'ul' );

  menuDiv.setAttribute( 'id', 'menu-content' );
  menuHeadline.setAttribute( 'id', 'menu-headline' );
  menuList.setAttribute( 'id', 'menu-list' );

  menuHeadline.innerHTML = "Menu";

  menuContents.forEach( pizza => {
    const menuListElement = document.createElement( 'li' );
    const name            = document.createElement( 'h2' );
    const menuDetails     = document.createElement( 'div' );
    const ingredientsSpan = document.createElement( 'span' );
    const priceSpan       = document.createElement( 'span' );

    menuListElement.classList.add( 'menu-list-item' );
    name.classList.add( 'item-name' );
    menuDetails.classList.add( 'item-details' );
    ingredientsSpan.classList.add( 'item-ingredients' );
    priceSpan.classList.add( 'item-price' );

    name.textContent = pizza.name;
    ingredientsSpan.textContent = pizza.ingredients;
    priceSpan.textContent = pizza.price;

    menuDetails.append( ingredientsSpan, priceSpan );
    menuListElement.append( name, menuDetails );
    menuList.append( menuListElement );
  });
    menuDiv.append( menuHeadline, menuList );
    contentDiv.append( menuDiv );
}

export { addMenu };
