// Library
import React from 'react';
import Head from "next/head";
import { useTheme, useMediaQuery } from "@mui/material";

// Design
import { Box, Container, Grid } from "@mui/material";

// Components
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import BackToTop from "./BackToTop";

const Layout = ({ children, title, description }) => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <>
        <Head>
            <meta name='description' content={description} />
            <title>{title}</title>
        </Head>

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

                <BackToTop />
            <Footer />
        </>
    );
};

export default Layout;