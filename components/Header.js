// Library
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    styled,
    useTheme
} from "@material-ui/core/styles";

// Design
import {
    Badge,
    Box,
    Container,
    IconButton,
    Toolbar,
} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';

// Icon
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../public/logo-dark.svg';

import CategoriesHeaderMobile from "./categories-header-mobile";
// Components

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ marginBottom: '25px', backgroundColor: 'white' }}>
            <AppBar position="static" color="inherit">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        <Link href="/">
                            <a>
                                <Image src={logo} width={'200px'} alt={'logo'}/>
                            </a>
                        </Link>
                        {isMobile && (
                            <Box>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    // onClick={handleMenu}
                                    sx={{ marginRight: '15px' }}
                                >
                                    <Badge badgeContent={100} color="secondary">
                                        <ShoppingCartOutlinedIcon fontSize={'large'} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleDrawerOpen}
                                >
                                    <MenuIcon fontSize={'large'} />
                                </IconButton>
                            </Box>
                            ) }
                    </Toolbar>
                </Container>
            </AppBar>
            <CategoriesHeaderMobile handleDrawerClose={handleDrawerClose} open={open} />
        </Box>
    );
};

export default Header;