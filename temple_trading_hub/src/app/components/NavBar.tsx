import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { UserAuth } from '@context/AuthContext';
import { useEffect, useState } from 'react';
import logo from '@Images/temple-logo.svg';
import Link from 'next/link';
import styles from '../Styles/TopBar.module.css';
import Image from 'next/image';
import { Avatar, IconButton, Menu, Tooltip } from '@mui/material';

const settings = ['Profile', 'Logout'];

function NavBar() {
  const [open, setOpen] = useState(false);
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSignOut = async (e: any) => {
    logOut();
  };

  useEffect(() => {
    const checkAuthentication = async () => {};
    checkAuthentication();
  }, [user]);

  return (
    <div>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}>
        <Container maxWidth='lg'>
          <Toolbar
            variant='regular'
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}>
              <Link href={'/'} className={styles.section}>
                <Image
                  src={logo.src}
                  alt='Logo'
                  className={styles.vercelLogo}
                  style={{
                    marginRight: '5px',
                    marginLeft: '-8px',
                  }}
                  width={100}
                  height={100}
                  priority
                />
                Temple Trading Hub
              </Link>
              <div className={styles.section2}></div>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2' color='text.primary'>
                    <Link href={'/trading'}>Trading</Link>
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2' color='text.primary'>
                    <Link href={'/threads'}>Threads</Link>
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: '6px', px: '12px' }}>
                  <Typography variant='body2' color='text.primary'>
                    <Link href={'/about'}>About Us</Link>
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}>
              {!user && (
                <Button color='primary' variant='text' size='small'>
                  <Link href={'/auth/signin'}>Sign In</Link>
                </Button>
              )}
              {!user && (
                <Button color='primary' variant='contained' size='small'>
                  <Link href={'/auth/signup'}>Sign Up</Link>
                </Button>
              )}
              {user && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title='User'>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ bgcolor: '#A31F37', color: 'white' }}
                        aria-label='user'>
                        {user.email[0]}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}>
                    <MenuItem key={'Profile'} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>
                        <Link href={'/account/profile'}>Profile</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem key={'Logout'} onClick={handleSignOut}>
                      <Typography textAlign='center'>{'Logout'}</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}>
                <MenuIcon />
              </Button>
              <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}></Box>
                  {user && (
                    <Link href={'/account/profile'}>
                      <MenuItem sx={{ mb: 0.75 }}>
                        <Avatar
                          sx={{ bgcolor: '#A31F37', color: 'white', mr: 1 }}
                          aria-label='user'>
                          {user.email[0]}
                        </Avatar>
                        {user.email}
                      </MenuItem>
                    </Link>
                  )}
                  <MenuItem>
                    <Link href={'/trading'}>Trading</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/threads'}>Threads</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={'/about'}>About Us</Link>
                  </MenuItem>
                  <Divider />
                  {!user && (
                    <Button
                      color='primary'
                      variant='outlined'
                      sx={{ width: '95%', margin: '2.5%' }}>
                      <Link href={'/auth/signin'}>Sign In</Link>
                    </Button>
                  )}
                  {!user && (
                    <Button
                      color='primary'
                      variant='contained'
                      sx={{ width: '95%', margin: '2.5%' }}>
                      <Link href={'/auth/signup'}>Sign Up</Link>
                    </Button>
                  )}
                  {user && (
                    <Button
                      color='primary'
                      variant='contained'
                      sx={{ width: '95%', margin: '2.5%' }}
                      onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;