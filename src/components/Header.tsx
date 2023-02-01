import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
import Profile from './Profile';
import { useElementClientRect } from '../hooks/ElementClientRect';
import { useWindowDimensions } from '../hooks/WindowDimensions';
import { styled } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const StyledToolbar = styled(Toolbar)({
    maxHeight: '64px',
    minHeight: '64px'
});

export default function Header(props: Props) {
    const { window, children } = props;

    const {width} = useWindowDimensions();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const projectName = 'Awesome Header';
    const drawerWidth = 240;

    const headerRef = useRef(null);
    const {clientRect: headerClientRect} = useElementClientRect(headerRef);

    const mailAddress = 'hoge@example.com';
    const defaultSubject = '件名';
    const defaultBody = 'メール本文';

    const navItems = [
        {
            icon: <GitHubIcon />,
            url: 'https://github.com'
        },
        {
            icon: <TwitterIcon />,
            url: 'https://twitter.com'
        },
        {
            icon: <EmailIcon />,
            url: `https://mail.google.com/mail/?view=cm&to=${mailAddress}&su=${defaultSubject}&body=${defaultBody}`
        }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerItems = [
        {
            icon: <HomeIcon />,
            text: 'TOP'
        },
        {
            icon: <AccountCircleIcon />,
            text: 'PROFILE'
        },
        {
            icon: <EngineeringIcon />,
            text: 'WORKS'
        }
    ]

    const drawer = (
        <Box>
            <StyledToolbar />
            <List disablePadding>
                {drawerItems.map((item, index) => (
                    <React.Fragment key={item.text}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
            <Box sx={{position: 'absolute', bottom: '8px', width: '100%'}}>
                <Box sx={{display: 'flex', gap: '0 4px', alignItems: "center", justifyContent: "center", width: '100%'}}>
                    {navItems.map((item) => (
                        <IconButton key={item.url} sx={{ color: '#fff' }}>
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
                        {navItems.map((item) => (
                            <IconButton key={item.url} sx={{ color: '#fff' }}>
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
                <Toolbar />
                <MainVisual headerClientRect={headerClientRect} />
                <Box
                    sx={{position: 'absolute', transform: {xs: 'translate(50%, 0)', sm: 'translate(0, 0)'}, right: {xs: '50%', sm: '40px'}, top: '104px', width: '500px', maxWidth: width ? `${width * 0.95}px` : 0}}
                >
                    <Profile
                        style={{
                            opacity: 0.9,
                            '& .MuiCardContent-root': {
                                minHeight: `calc(100vh - ${headerClientRect ? headerClientRect!.height : 0}px - 80px)`
                            }
                        }}
                    />
                </Box>
                <Box sx={{p: 2}}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}