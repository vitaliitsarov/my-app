import {Avatar, Box, Grid, Skeleton} from "@mui/material";

const ProductsLoading = () => {

    return (
        <Grid container spacing={2} sx={{ marginBottom: '15px' }}>
            { [...Array(12)].map((a, index) =>
                (
                        <Grid item xs={6} lg={4} key={index}>
                            <Skeleton sx={{ height: 190, mb: '10px' }} animation="wave" variant="rectangular" />
                            <Box>
                                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </Box>
                        </Grid>
                    )
            )}
        </Grid>
    );
};

export default ProductsLoading