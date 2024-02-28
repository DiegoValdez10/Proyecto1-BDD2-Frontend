import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';
import logoImage from '../images/Logo.png';

import { Link } from 'react-router-dom';

const pages = [
  { 
    name: "Inicio", 
    link: "/"  
  },
  {
    name: "Arreglos",
    link: "/arreglos"
  },
  { 
    name: "Pedidos",
    link: "/pedidos" 
  },
  {
    name: "Clientes",
    link: "/clientes" 
  }
];

function Header() {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar disableGutters>

        <img src={logoImage} alt="Logo" style={{width: 100, marginRight: 'auto'}} />

        <div style={{display: 'flex', alignItems: 'center'}}>
          
          {pages.map(page => (

            <Typography key={page.name} variant="h6" style={{marginRight: 200, color: 'white'}}>

              <Link to={page.link} style={{color:'white', textDecoration:'none'}}>
                {page.name}
              </Link>

            </Typography>

          ))}

        </div>

      </Toolbar>
    </AppBar>
  );

}

export default Header;