import React from 'react';
import { AppBar, Toolbar, Typography, } from '@mui/material';
import SocialsChips from './SocailsChips';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brendan Khoury
        </Typography>
        <SocialsChips/>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
