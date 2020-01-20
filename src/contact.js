function addContact() {
  const contentDiv = document.getElementById( 'content' );

  const contactDiv = document.createElement( 'id' );
  const contactHeadline = document.createElement( 'h1' );
  const contactAddress = document.createElement( 'address' );
  const googleMapIFrame = document.createElement( 'iFrame' );

  contactDiv.setAttribute( 'id', 'contact-content' );
  contactAddress.setAttribute( 'id', 'contact-address' );
  googleMapIFrame.setAttribute( 'id', 'google-map' );

  contactHeadline.textContent = 'Contact';

  contactAddress.innerHTML = "Pizzeria Don Giovanni <br> Mail: Giovanni@pizzeria.com <br> Tel: 034/523.22.19 <br> 5, Piazza Bologna, 12390 Italia";

  googleMapIFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.043319369189!2d12.51898761581546!3d41.91342747118094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61652cb0f03d%3A0x7786fbc021d2a78d!2sPiazza%20Bologna%2C%2000162%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sbe!4v1579526943229!5m2!1sen!2sbe";

  googleMapIFrame.width = '600';
  googleMapIFrame.height = '450';
  googleMapIFrame.frameborder = '0';

  contactDiv.append( contactHeadline, contactAddress, googleMapIFrame );
  contentDiv.append( contactDiv );
}

export { addContact as default };
