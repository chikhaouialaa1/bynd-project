import { useState, useEffect } from 'react';
import { Grid, MenuItem, Container, Menu, Typography, Toolbar, Box, AppBar } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { AgentChatUrl } from '../constants/externalUrls'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { routes } from '../constants/routes'
import {
    getAccessToken,
    removeAccessToken
} from "../utils/auth";

export const TopBar = () => {
    const navigate = useNavigate()
    const settings = ['Home', 'Logout'];
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        setCurrentUser(getAccessToken())
    }, [getAccessToken()])

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleItemMenuClick = (key: number) => {
        switch (key) {
            case 0:
                navigate(routes.home)
                break;
            case 1:
                removeAccessToken()
                navigate(routes.login)
                break;
            default:
                setAnchorElUser(null);
        }

        setAnchorElUser(null);
    };

    const handleQueryMenu = () => {
        navigate(routes.Request)
    };


    const handleHomeClick = () => {
        navigate(routes.home)
    };

    const handleDashboardClick = () => {
        navigate(routes.dashboard)
    };


    const handleChatClick = () => {
        window.open(
            AgentChatUrl,
            '_blank',
            'noopener,noreferrer,width=1000,height=800,left=200,top=200'
        )
    };



    const MyMenu = () => {
        return (
            <>
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
                    {settings.map((setting, index) => (
                        <MenuItem key={index} onClick={() => handleItemMenuClick(index)}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>

            </>
        )
    }

    return (
        <>
            <AppBar style={{
                backgroundColor: '#fff',
                borderRadius: '18px',
            }}>
                <Container
                    maxWidth={false}
                >
                    <Toolbar
                        disableGutters>
                        <Grid container >
                            <Grid item md={1} xs={6} >
                                <Typography
                                    onClick={handleHomeClick}
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        textDecoration: 'none',
                                        color: '#000',
                                        cursor: 'pointer'
                                    }}
                                >
                                    SABA
                                    {/* <img
                                        style={{
                                            width: "129px",
                                            height: "37px"
                                        }}
                                        src={AgentChatUrl}
                                    /> */}
                                </Typography>
                            </Grid>
                            <Grid item md={10} xs={0} />
                            <Grid item md={1} xs={6} >
                                <Box style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }} >
                                    <Box>
                                        <IconButton
                                            title='Dashboard'
                                            onClick={handleDashboardClick}
                                        >
                                            <QueryStatsIcon />
                                        </IconButton>
                                    </Box>
                                    {
                                        <Box>
                                            <IconButton
                                                title='Agent'
                                                onClick={handleChatClick}
                                            >
                                                <ChatIcon />
                                            </IconButton>
                                        </Box>
                                    }
                                    {
                                        <Box>
                                            <IconButton
                                                title='Query'
                                                onClick={handleQueryMenu}
                                            >
                                                <WebAssetIcon />
                                            </IconButton>
                                            <MyMenu />
                                        </Box>
                                    }
                                    {
                                        <Box>
                                            <IconButton
                                                title='Profile'
                                                onClick={handleOpenUserMenu}
                                            >
                                                <AccountCircleIcon />
                                            </IconButton>
                                            <MyMenu />
                                        </Box>
                                    }
                                </Box>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
