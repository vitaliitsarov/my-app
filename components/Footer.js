import Image from "next/image";
import Link from "next/link";

// Design
import {Box, Container, Grid} from "@mui/material";
import { makeStyles } from '@mui/styles';

import logo from "../public/logo.svg";

const Footer = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: 'rgb(12, 14, 48)'}}>
                <Container
                    maxWidth={'lg'}
                >
                    <Box sx={{ paddingTop: '80px', paddingBottom: '80px', overflow: 'hidden' }}>
                        <Grid container spacing={{ xs: 3 }} columnSpacing={{ xs: 3 }}>
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <a style={{ marginBottom: '10px' }}>
                                    <Image src={logo} alt={''} />
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={2}>
                                <Box sx={{ fontSize: '25px', fontWeight: '600', marginBottom: '20px', lineHeight: '1', color: 'white'}}>
                                    Informacje
                                </Box>
                                <div>
                                    <Link href={'/pages/privacy-policy'} >
                                        <a style={{ position: 'relative', display: 'block', padding: '0.3rem 0rem', cursor: 'pointer', borderRadius: '4px', color: 'rgb(174, 180, 190)' }}>Polityka prywatności</a>
                                    </Link>
                                    <Link href={'/pages/regulamin'}>
                                        <a style={{ position: 'relative', display: 'block', padding: '0.3rem 0rem', cursor: 'pointer', borderRadius: '4px', color: 'rgb(174, 180, 190)' }}>Regulamin</a>
                                    </Link>
                                    <Link href={'/pages/faq'}>
                                        <a style={{ position: 'relative', display: 'block', padding: '0.3rem 0rem', cursor: 'pointer', borderRadius: '4px', color: 'rgb(174, 180, 190)' }}>FAQ</a>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{ fontSize: '25px', fontWeight: '600', marginBottom: '20px', lineHeight: '1', color: 'white'}}>
                                    Obsługa klienta
                                </Box>
                                <div>
                                    <Link href="/" >
                                        <a style={{ position: 'relative', display: 'block', padding: '0.3rem 0rem', cursor: 'pointer', borderRadius: '4px', color: 'rgb(174, 180, 190)' }}>Zamówienia</a>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={3}>
                                <Box sx={{ fontSize: '25px', fontWeight: '600', marginBottom: '20px', lineHeight: '1', color: 'white'}}>
                                    Kontakt
                                </Box>
                                <Box sx={{ paddingTop: '4.8px', paddingBottom: '4.8px', color: 'rgb(174, 180, 190)'}}>
                                    Bolesława Krzywoustego 5/u2, 70-244 Szczecin, Polska
                                </Box>
                                <Box sx={{ paddingTop: '4.8px', paddingBottom: '4.8px', color: 'rgb(174, 180, 190)'}}>
                                    Email: sklep@extaz.pl
                                </Box>
                                {/*<Box sx={{ paddingTop: '4.8px', paddingBottom: '4.8px', color: 'rgb(174, 180, 190)'}}>*/}
                                {/*    Phone: +1 1123 456 780*/}
                                {/*</Box>*/}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;