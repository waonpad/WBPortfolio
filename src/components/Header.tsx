import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ExternalLink from './ExternalLink';
import SimpleFooter from './SimpleFooter';
import MainVisual from './MainVisual';
import ProfileCard from './ProfileCard';
import { useElementClientRect } from '../hooks/ElementClientRect';
import { useWindowDimensions } from '../hooks/WindowDimensions';
import { styled } from '@mui/material';
import { user, projectName } from '../data/userData';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
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
            url: '/works'
        }
    ]

    const drawer = (
        <Box>
            <StyledToolbar />
            <List disablePadding>
                {drawerItems.map((item, index) => (
                    <React.Fragment key={item.title}>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to={item.url}>
                                <ListItemIcon sx={{ color: 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
            <Box sx={{position: 'absolute', bottom: '8px', width: '100%'}}>
                <Box sx={{display: 'flex', gap: '0 4px', alignItems: "center", justifyContent: "center", width: '100%'}}>
                    {user.links.map((item) => (
                        <IconButton key={item.url} sx={{ color: 'inherit' }}>
                            <ExternalLink
                                url={item.url}
                                style={{color: 'inherit'}}
                            >
                                {item.icon}
                            </ExternalLink>
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
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '0 8px' }}>
                        {user.links.map((item) => (
                            <IconButton key={item.url} sx={{ color: 'inherit' }}>
                                <ExternalLink
                                    url={item.url}
                                    style={{color: 'inherit'}}
                                >
                                    {item.icon}
                                </ExternalLink>
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
                        pb: 100, // テスト用
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