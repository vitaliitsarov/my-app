// Library
import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    useTheme
} from "@material-ui/core/styles";

// Design
import {
    Box,
    Container,
    Grid
} from "@mui/material";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";


const Layout = ({ children }) => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <>
            <Header />
                <Container sx={{ minHeight: '100vh'}}>
                    <Grid container spacing={3}>
                        {isDesktop && (
                            <Grid item xs={12} lg={3} >
                                <Box  sx={{ backgroundColor: "#fff"}}>
                                    <Category />
                                </Box>
                            </Grid>
                        )}

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