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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export default function Header(props: Props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const projectName = 'Awesome Header';
    const drawerWidth = 240;

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
            <Toolbar />
            <Divider />
            <List disablePadding>
                {drawerItems.map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{position: 'absolute', bottom: '8px', display: 'flex', alignItems: "center", justifyContent: "center", width: '100%'}}>
                <SimpleFooter wrap={true} />
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                position="fixed"
                sx={{
                    // width: { sm: `calc(100% - ${drawerWidth}px)` },
                    // ml: { sm: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, fontWeight: 'bold' }}
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
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}