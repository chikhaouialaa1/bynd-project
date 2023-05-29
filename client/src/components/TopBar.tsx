import { useState, useEffect } from 'react';
import { Grid, MenuItem, Container, Menu, Typography, Toolbar, Box, AppBar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants/routes'
import {
    getAccessToken,
    removeAccessToken
} from "../utils/auth";

export const TopBar = () => {
    const navigate = useNavigate()
    const settings = ['Home', 'Add Article', 'Logout'];
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
                navigate(routes.addArticle)
                break;
            case 2:
                removeAccessToken()
                navigate(routes.login)
                break;
            default:
                setAnchorElUser(null);
        }

        setAnchorElUser(null);
    };


    const handleHomeClick = () => {
        navigate(routes.home)
    };

    const handleAddArticleClick = () => {
        navigate(routes.addArticle)
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
                                    <img
                                        style={{
                                            width: "129px",
                                            height: "37px"
                                        }}
                                        src={'https://bynd.fr/wp-content/uploads/2020/05/logo-bynd.svg'}
                                    />
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
                                            onClick={handleHomeClick}
                                        >
                                            <HomeIcon />
                                        </IconButton>
                                    </Box>
                                    {
                                        currentUser &&
                                        <Box>
                                            <IconButton
                                                onClick={handleAddArticleClick}
                                            >
                                                <BusinessCenterIcon />
                                            </IconButton>
                                        </Box>
                                    }
                                    {
                                        currentUser &&
                                        <Box>
                                            <IconButton
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
