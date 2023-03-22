import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SimpleFooter from './SimpleFooter';
import MainVisual from './MainVisual';
import ProfileCard from './ProfileCard';
import { useElementClientRect } from '../hooks/useElementClientRect';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { styled } from '@mui/material';
import { user, projectName } from '../data/user/UserData';
import { works } from '../data/works/WorkData';

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

const StyledToolbar = styled(Toolbar)({
    maxHeight: '64px',
    minHeight: '64px'
});

export default function Header(props: Props) {
    const { window, children } = props;

    const location = useLocation();
    const {width} = useWindowDimensions();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawerWidth = 220;

    const headerRef = useRef(null);
    const {clientRect: headerClientRect} = useElementClientRect(headerRef);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const drawerItems = [
        {
            icon: <HomeIcon />,
            title: 'TOP',
            url: '/'
        },
        {
            icon: <AccountCircleIcon />,
            title: 'ABOUT',
            url: '/about'
        },
        {
            icon: <EngineeringIcon />,
            title: 'WORKS',
            url: '/works',
            child: works
        }
    ]

    const [drawerItemChildOpen, setDrawerItemChildOpen] = useState<{[key: string]: boolean}>(
        Object.fromEntries(
            drawerItems.filter((drawerItem) => (drawerItem.child !== undefined))
            .map((hasChildItem) => ([hasChildItem.title, true]))
        )
    );

    const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const key = event.currentTarget.getAttribute('data-title') ?? '';

        setDrawerItemChildOpen((drawerItemChildOpen) => ({...drawerItemChildOpen, [key]: !drawerItemChildOpen[key]}))
    };

    const drawer = (
        <Box>
            <StyledToolbar />
            <List disablePadding>
                {drawerItems.map((item) => (
                    <React.Fragment key={item.title}>
                        <ListItem disablePadding sx={{pr: 0}}>
                            <ListItemButton component={Link} to={item.url}>
                                <ListItemIcon sx={{ color: 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                            {item.child &&
                                <ListItemSecondaryAction>
                                    <IconButton onClick={handleExpandClick} data-title={item.title}>
                                        {drawerItemChildOpen[item.title] ? <ExpandLess /> : <ExpandMore />}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            }
                        </ListItem>
                        <Divider />
                        {item.child &&
                            <Collapse in={drawerItemChildOpen[item.title]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.child.map((child) => (
                                        <React.Fragment key={child.id}>
                                            <ListItem disablePadding>
                                                <ListItemButton component={Link} to={`/work/${child.id}`} sx={{ pl: 4 }}>
                                                    <ListItemText
                                                        primary={child.title}
                                                        primaryTypographyProps={{
                                                            variant: 'body2',
                                                            sx: {
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden',
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: '1',
                                                                WebkitBoxOrient: 'vertical',
                                                            }
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Collapse>
                        }
                    </React.Fragment>
                ))}
            </List>
            <Box sx={{position: 'absolute', bottom: '8px', width: '100%'}}>
                <Box sx={{display: 'flex', gap: '0 4px', alignItems: "center", justifyContent: "center", width: '100%'}}>
                    {user.links.map((item) => (
                        <IconButton key={item.url} component={Link} to={item.url} target='_blank' sx={{ color: 'inherit' }}>
                            {item.icon}
                        </IconButton>
                    ))}
                </Box>
                <SimpleFooter wrap={true} style={{marginTop: 1}} />
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                ref={headerRef}
                component="nav"
                position="fixed"
                sx={{
                    // width: { md: `calc(100% - ${drawerWidth}px)` },
                    // ml: { md: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <StyledToolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', md: 'block' }, fontWeight: 'bold' }}
                    >
                        {projectName}
                    </Typography>
                    <Box sx={{ display: { xs: 'flex', sm: 'flex' }, gap: '0 8px' }}>
                        {user.links.map((item) => (
                            <IconButton key={item.url} component={Link} to={item.url} target='_blank' sx={{ color: 'inherit' }}>
                                {item.icon}
                            </IconButton>
                        ))}
                    </Box>
                </StyledToolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` }}}>
                <StyledToolbar />
                <Box sx={{display: location.pathname === '/' ? 'block' : 'none'}}>
                    <MainVisual headerClientRect={headerClientRect} />
                    <Box
                        sx={{
                            display: {xs: 'none', sm: 'block'},
                            position: 'absolute',
                            right: '40px',
                            top: '104px',
                            width: '500px',
                            maxWidth: width ? `${width * 0.95}px` : 0
                        }}
                    >
                        <ProfileCard
                            style={{
                                background: 'rgba(30, 30, 30)',
                                minHeight: `calc(100vh - ${headerClientRect ? headerClientRect!.height : 0}px - 80px)`
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        p: 2,
                        // pb: 100, // テスト用
                    }}
                    >
                    <ProfileCard
                        style={{
                            display: {xs: location.pathname === '/' ? 'block' : 'none', sm: 'none'},
                            mb: 4
                        }}
                    />
                    {children}
                </Box>
            </Box>
        </Box>
    );
}