import React from 'react';
import {
    Box,
    IconButton,
    Typography, Container, Grid, List, ListSubheader, ListItemButton, ListItemText, InputBase, Paper, ListItemIcon,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Components
import Header from "./Header";
import Footer from "./Footer";

import Cat from '../FakeDb.json';
import Category from "./Category";


const Layout = ({ children }) => {

    return (
        <>
            <Header />

            {/*<Box sx={{ marginBottom: '15px'}}>*/}
            {/*    <Container>*/}
            {/*        <Paper*/}
            {/*            component="form"*/}
            {/*            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}*/}
            {/*        >*/}
            {/*            <InputBase*/}
            {/*                sx={{ ml: 1, flex: 1 }}*/}
            {/*                placeholder="Szukaj..."*/}
            {/*                inputProps={{ 'aria-label': 'Szukaj...' }}*/}
            {/*            />*/}
            {/*            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">*/}
            {/*                <SearchIcon />*/}
            {/*            </IconButton>*/}
            {/*        </Paper>*/}
            {/*    </Container>*/}
            {/*</Box>*/}

            <Container sx={{ minHeight: '100vh'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3}>
                        <Box  sx={{ backgroundColor: "#fff"}}>
                            <Category />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        { children }
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>



    );
};

export default Layout;