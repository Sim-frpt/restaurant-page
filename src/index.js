import addHomePage from "./homepage";
import { addMenu } from "./menu";
import addContact from "./contact";

window.onload = addHomePage();

const navigationHeader = document.getElementById( 'header-banner' );
const contentDiv       = document.getElementById( 'content' );

const updatePageContent = event => {
  const innerText = event.target.textContent;

  switch( innerText ) {
    case 'Menu' :
      if ( document.getElementById( 'menu-content' )) {
        return;
      }
      contentDiv.innerHTML = '';
      addMenu();
      updateTabStyle( innerText );
      break;

    case 'Contact' :
      if ( document.getElementById( 'contact-content' )) {
        return;
      }
      contentDiv.innerHTML = '';
      addContact();
      updateTabStyle( innerText );
      break;

    case 'Home' :
      if ( document.getElementById( 'home-content' )) {
        return;
      }
      contentDiv.innerHTML = '';
      addHomePage();
      updateTabStyle( innerText );
      break;
  }
};

const updateTabStyle = tabText => {
  const links = [...document.getElementById( 'links' ).children];
  const stylingClass = 'link__selected';

  links.forEach( link => {
    if ( link.textContent === tabText ) {
      link.classList.add( stylingClass );
    } else {
      link.classList.remove( stylingClass );
    }
  });
}

navigationHeader.addEventListener( 'click', updatePageContent );

updateTabStyle( 'Home' );
