import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import ReactHtmlParser from 'react-html-parser';

import nophoto from '../../public/no-image-icon-23485.png';
import Image from "next/image";

const ProductItem = ({ productImage, id, title }) => {

    return (
        <Grid item xs={6} lg={4}>
            <Paper elevation={1} >
                <Link href={`/product/${id}`}>
                    <a>
                        { productImage ? (
                            <Image src={`https://api.extaz.pl` + productImage} width={'250px'} height={'250px'} style={{maxHeight: '250px', objectFit: 'scale-down'}} alt={title}/>
                        ) : (
                            <Image src={nophoto} width={'250px'} height={'250px'} style={{maxHeight: '250px', objectFit: 'scale-down'}} alt={title}/>

                            )}
                    </a>
                </Link>
                <Box sx={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '16px' }}>
                    <Typography fontSize={14} component={'h6'} maxHeight={'60px'} height={'44px'} sx={{ fontWeight: "400", lineHeight: '1.5', overflow: 'hidden' }}>
                        { ReactHtmlParser(title) }
                    </Typography>
                </Box>
                {/*<Box sx={{ justifyContent: 'center', display: 'flex', padding: '10px', alignItems: 'center'}}>*/}
                {/*    <Button sx={{ fontSize: 16}}>Do koszyka 100.00 PLN</Button>*/}
                {/*</Box>*/}
            </Paper>
        </Grid>
    );
};

export default ProductItem;