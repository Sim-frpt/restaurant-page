const contentDiv = document.getElementById( "content" );

const addHeader = () => {
  const header = document.createElement( 'h1' );
  header.setAttribute( "id", "header-title" );
  header.textContent = "Don Giovanni's Pizza Restaurant";
  contentDiv.append( header );
}

const addImage = () => {
  const imageSource = "../src/assets/images/pizza restaurant.jpeg";
  document.body.style.backgroundImage = `url( "${imageSource}" )`;
}

const addCopy = () => {
  const copy = document.createElement( 'p' );
  copy.setAttribute( "id", "excerpt" );
  copy.textContent =
      "Don Giovanni's will open your eyes as to what a real, napolitan Pizza is supposed to taste like. Baked in a wood oven, using only the freshest ingredients our mediterranean soil gives us, they're a proud example of the noble craft we set out to master more than 25 years ago.";
  contentDiv.append( copy );
}

function loadPage() {
  addHeader();
  addImage();
  addCopy();
}

export { loadPage as default };
