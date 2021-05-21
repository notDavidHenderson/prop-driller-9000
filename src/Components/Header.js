import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        onClick= {props.setDisplay}
        src = {props.proptimusLogo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
