import Layout from "../../components/Layout";
import {Box, Grid, IconButton, Divider, Typography, Avatar} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartPage = () => {
    return (
        <Layout title={"Koszyk"}>
            <Box sx={{ backgroundColor: 'white', padding: 2}}>
                <Typography variant={'h6'} sx={{ marginBottom: '15px'}}>Koszyk</Typography>
                <Grid container>
                    <Grid item xs={12} lg={12} sx={{ display: 'flex', height: '100%', justifyContent: 'space-between' }}>
                        <Grid container sx={{ alignItem: 'center', alignItems: 'center'}}>
                            <Grid item xs={4} lg={4}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://api.extaz.pl/storage/products/33401/ec62c7bea6d8610ce602f021857501ad.jpg"
                                    sx={{ width: 30, height: 30 }}
                                />
                            </Grid>
                            <Grid item xs={2} lg={4}>
                                Title
                            </Grid>
                            <Grid item xs={2} lg={2}>
                                Count
                            </Grid>
                            <Grid item xs={4} lg={2} sx={{ justifyContent: 'end' }}>
                                <IconButton aria-label="delete" size="large">
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                </Grid>
            </Box>

        </Layout>
    )
}


export default CartPage;