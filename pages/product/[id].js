import React from 'react';
import Layout from "../../components/Layout";
import {Box, Container, Divider, Grid, Paper, Typography} from "@mui/material";
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

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

    const handleImage = (test) => {
        console.log(test.src)
    }

    return (
        <Layout>
            <Paper sx={{ padding: 2, backgroundColor: 'white'}} elevation={0}>
                <Grid container lg={12} >
                    <Grid item xs={12} lg={8}>
                        {
                            product.images && (
                                <>
                                    <Box>
                                        <Image layout={'responsive'} height={'0'} width={'0'} style={{ objectFit: 'scale-down'}} src={`https://api.extaz.pl${JSON.parse(product.images)[0]}`} />
                                    </Box>
                                    <Box>
                                        { product.images && JSON.parse(product.images).map((image, index) => (
                                                <Image key={index} height={50} width={50} src={`https://api.extaz.pl${image}`} style={{ objectFit: 'scale-down', maxHeight: '100px' }} onClick={handleImage} />
                                            )
                                        )}
                                    </Box>
                                </>
                            )
                        }
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        {
                            product.title && (
                                <Typography sx={{ fontSize: '18px', fontWeight: '500', whiteSpace: 'normal' }}>{ ReactHtmlParser(product.title) }</Typography>
                            )
                        }
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

