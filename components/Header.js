// Library
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import  {connect} from  'react-redux'
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
    Toolbar, Typography,
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

const Header = ({ numberCart }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleCartOpen = () => {
        console.log('Open cart');
    }

    const handleCartClose = () => {
        console.log('Close cart');
    }

    return (
        <Box sx={{ marginBottom: '25px', backgroundColor: 'white' }}>
            <Box sx={{
                backgroundColor: '#973232',
                p: '5px 25px 5px 25px',
                color: '#fff',
                textAlign: 'center',
            }}>
                <Typography>Uwaga! Możliwość zamówienia towaru wyłączona! Strona jest w fazie rozwoju.</Typography>
            </Box>
            <AppBar position="static" color="inherit">
                <Container maxWidth="lg" >
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }} id="back-to-top-anchor">
                        <Link href="/">
                            <a>
                                <Image src={logo} width={'200px'} alt={'logo'}/>
                            </a>
                        </Link>
                            <Box>
                                <Link href={'/cart'} >
                                    <a>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            onClick={handleCartOpen}
                                            sx={{ marginRight: '15px' }}
                                        >
                                            <Badge badgeContent={numberCart} color="secondary">
                                                <ShoppingCartOutlinedIcon fontSize={'large'} />
                                            </Badge>
                                        </IconButton>
                                    </a>
                                </Link>
                                {isMobile && (
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        onClick={handleDrawerOpen}
                                    >
                                        <MenuIcon fontSize={'large'} />
                                    </IconButton>
                                ) }

                            </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CategoriesHeaderMobile handleDrawerClose={handleDrawerClose} open={open} />

        </Box>
    );
};

const mapStateToProps = state =>{
    return{
        numberCart:state.cart.numberCart
    }
}

export default connect(mapStateToProps,null)(Header)