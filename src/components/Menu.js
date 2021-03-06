import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openStudentsTable = () => {
    setAnchorElUser(null);
    let home = document.getElementById("home");
    let studentsTable = document.getElementById("studentsTable");
    let returnButton = document.getElementById("returnButton");
    home.style.display = 'none';
    studentsTable.style.display = "block";
    returnButton.style.display = "block";
  };

  return (
    <AppBar position="static" style={{ background: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
                component="img"
                sx={{
                    height: 40,
                    width: 40,
                    padding: .8,
                    display: { xs: 'none', md: 'flex' }, 
                    mr: 1
                  }}
                alt="Main Icon"
                src={process.env.PUBLIC_URL + '/assets/studyCenterIcon.png'}
            />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            StudyCenter
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
              >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="#Mision" color="inherit" underline="none" sx={{ p: 1 }}>Mision y Vision</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="#courses" color="inherit" underline="none" sx={{ p: 1 }}>Cursos</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                <Link href="#contactos" color="inherit" underline="none" sx={{ p: 1 }}>Contactanos</Link>
                </Typography>
              </MenuItem>
              
            </Menu>
          </Box>
          <Box
                component="img"
                sx={{
                    height: 40,
                    width: 40,
                    padding: .8,
                    display: { xs: 'flex', md: 'none' }, 
                    mr: 1
                  }}
                alt="Main Icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1200px-Closed_Book_Icon.svg.png"
            />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            StudyCenter
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Link href="#Mision" color="inherit" underline="none" sx={{ p: 1 }}>Mision y Vision</Link>
            <Link href="#courses" color="inherit" underline="none" sx={{ p: 1 }}>Cursos</Link>
            <Link href="#contactos" color="inherit" underline="none" sx={{ p: 1 }}>Contactanos</Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='Panel de Estudiantes' onClick={openStudentsTable}>
                <Typography textAlign="center">Panel de Estudiantes</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
