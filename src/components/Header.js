import { MenuSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import Menu from './Menu'

function Header(props) {
  var [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-nav">
      <div className="menu" onClick={() => {setMenuOpen(true)}}><MenuSharp fontSize='large' /></div>
      <div className="logo" onClick={props.onLogoClick}>Dinggick's Blog</div>
      <Menu open={menuOpen} 
            onHomeClick={() => {
              props.onLogoClick();
              setMenuOpen(false);
            }} 
            onAboutClick={() => {
              props.onAboutClick();
              setMenuOpen(false);
            }}
            onPostListClick={() => {
              props.onPostListClick();
              setMenuOpen(false);
            }} 
            onClose={() => {
              setMenuOpen(false);
            }}/>
    </header>
  );
}

export default React.memo(Header);