import loadPage from "./page-load";
import { addMenu } from "./menu";

loadPage();

const navigationHeader = document.getElementById( 'header-banner' );


const updatePageContent = event => {
  console.log( event.target.textContent );
};

navigationHeader.addEventListener( 'click', updatePageContent );

