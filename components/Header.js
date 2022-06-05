import React from 'react';
import {AppBar, Box, Container, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import logo from '../public/logo-dark.svg';
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <Box sx={{ marginBottom: '25px', backgroundColor: 'white' }}>
            <Container>
                <Paper elevation={0}>
                    <Link href="/">
                        <a>
                            <Image src={logo} width={'200px'} alt={'logo'}/>
                        </a>
                    </Link>
                </Paper>
            </Container>
        </Box>
    );
};

export default Header;