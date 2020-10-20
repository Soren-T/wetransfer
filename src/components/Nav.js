import React from 'react';
import { Button, ButtonGroup, Image, Menu, MenuItem } from 'semantic-ui-react';
import '../styles/nav.css';

import logo from '../we-logo.png';

function Nav() {
  const menuItems = [
    {
      name: 'Help',
      link: ''
    },
    {
      name: 'About Us',
      link: ''
    },
    {
      name: 'Got Plus?',
      link: ''
    }
  ];

  return (
    <Menu className="nav">
      <MenuItem className="nav_left">
        <Image src={logo} />
      </MenuItem>
      <MenuItem className="nav_right">
        <ButtonGroup>
          {menuItems.map(m => (
            <Button
              key={m.name}
              content={m.name}
              onClick={() => {/* go to link */}} />
          ))}
        </ButtonGroup>        
      </MenuItem>
    </Menu>
  );
}

export default Nav;
