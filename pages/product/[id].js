// Libs
import React, {useState} from 'react';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

// Design
import { Box, Button, Divider, Grid, Paper, Typography, Rating, ListItem, ListItemText, List, ListItemIcon} from "@mui/material";

// Components
import Layout from "../../components/Layout";

// Icon
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

export async function getServerSideProps({ query }) {
    const id = query.id;
    const res = await fetch(`https://api.extaz.pl/api/v1/products/${id}`,{
        method: 'GET',
            headers: new Headers({
            'Authorization': 'Bearer dde4d629-2662-4ab0-b733-6e586e4e2e00',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    });
    const { data: product } = await res.json();
    return {
        props: {
            product,
        },
    }
}

const Product = ({ product }) => {

    const [value, setValue] = useState(2);

    const handleImage = (test) => {
        console.log(test.src)
    }

    return (
        <Layout title={product?.title} description={``}>
            <Paper sx={{ padding: 2, backgroundColor: 'white'}} elevation={0}>
                <Grid container lg={12} >
                    <Grid item xs={12} lg={8}>
                        {product.title && (
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', whiteSpace: 'normal' }}>{ ReactHtmlParser(product.title) }</Typography>
                        )}

                        {product.images && (
                            <>
                                <Box>
                                    <Image layout={'responsive'} height={'0'} width={'0'} style={{ objectFit: 'scale-down'}} src={`https://api.extaz.pl${JSON.parse(product.images)[0]}`} />
                                </Box>
                                <Box sx={{ marginBottom: '10px' }}>
                                    { product.images && JSON.parse(product.images).map((image, index) => (
                                        <Image key={index} height={50} width={50} src={`https://api.extaz.pl${image}`} style={{ objectFit: 'scale-down', maxHeight: '100px' }} onClick={handleImage} />
                                        )
                                    )}
                                </Box>
                            </>
                        )}
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        { product.title && (
                            <Box sx={{ marginBottom: '15px'}}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '700', whiteSpace: 'normal' }}>{ ReactHtmlParser(product.title) }</Typography>
                            </Box>
                        )}

                        {/*{product.price_netto && (*/}
                        {/*    <Box sx={{ marginBottom: '15px'}}>*/}
                        {/*        <Typography variant={'h5'} component={'h6'} sx={{ fontWeight: '600', color: '#3a4e5d'}}>{ product.price_netto * 1}{' '}zł</Typography>*/}
                        {/*    </Box>*/}
                        {/*)}*/}

                        {product.barcode && (
                            <Box sx={{ marginBottom: '15px'}}>
                                <Typography>Kod EAN: { product.barcode }</Typography>
                            </Box>
                        )}

                        {product.brand && (
                            <Box sx={{ marginBottom: '15px'}}>
                                <Typography>Brand: </Typography>
                            </Box>
                        )}

                        <Box>
                            <Typography></Typography>
                            <Rating name="read-only" value={value} readOnly size="large" />
                        </Box>

                        <Box sx={{ marginBottom: '15px'}}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalShippingOutlinedIcon fontSize={'large'}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Dyskretna przesyłka" secondary="dbamy o dyskrecję" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CreditScoreOutlinedIcon fontSize={'large'}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Wygodne płatności" secondary="PayU, Tpay, Stripe, PayPal" />
                                </ListItem>
                            </List>
                        </Box>

                        <Box >
                            <Button variant="contained" size={'large'} startIcon={<AddShoppingCartOutlinedIcon />} fullWidth={true} >
                                Dodaj do koszyka
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Divider />

            { product.description && (
                <>
                    <Grid container sx={{ backgroundColor: 'white', padding: 2, marginBottom: '15px' }}>
                        <Grid item xs={12} lg={12}>
                            { ReactHtmlParser(product.description) }
                        </Grid>
                    </Grid>
                </>
                ) }
        </Layout>
    );
};

export default Product;

