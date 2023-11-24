import React, { useState, useContext } from 'react'
import {Box, Tooltip, IconButton, Avatar, Menu, Typography, MenuItem} from '@mui/material'

import imageProfile from '../../../assets/profile.png'

import {Context as AuthContext} from '../../../context/authContext'

const MenuProfile = () => {
    const settings = [
      {
        name: "Perfil",
        function: () => {
          
        }
      },
      {
        name: "Reservaciones",
        function: () => {}
      },
      {
        name: "Cerrar sesión",
        function: () => {
          clearToken()
        }
      }
    ];
    
    const [anchorElUser, setAnchorElUser] = useState(null)
    
    const {clearToken} = useContext(AuthContext)
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
  return (
    <Box>
        <Tooltip title="Abrir menu">
            <IconButton sx={{p: 0}} onClick={handleOpenUserMenu}>
                <Avatar alt="Profile" src={imageProfile}/>
            </IconButton>
        </Tooltip>
        <Menu
              sx={{ 
                mt: '45px'
              }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={setting.function}>
                  <Typography 
                    textAlign="center"
                    fontSize={20}
                    >
                        {setting.name}
                  </Typography>
                </MenuItem>
              ))}
        </Menu>
    </Box>
  )
}

export default MenuProfile