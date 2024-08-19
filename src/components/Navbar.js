import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="flex-start"
    sx={{ gap: { sm: '40px', xs: '20px' }, mt: { sm: '32px', xs: '20px' } }}    px="20px"
  >
    <Link
      to="/"
      style={{
        textDecoration: 'none',
        fontSize: '38px',
        display: 'flex',
        alignItems: 'flex-end',
        color: 'black',
      }}
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: '48px', height: '48px', margin: '0px 20px' }}
      />
      FitPulse
    </Link>

    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{ textDecoration: 'none', color: '#3A1212' }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
