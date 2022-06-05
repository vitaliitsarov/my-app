import React from 'react';
import {Grid, Pagination} from "@mui/material";

const PaginationList = () => {
    return (
        <Grid container sx={{ marginBottom: '15px'}} spacing={2}>
            <Grid container item xs={12} lg={12}  sx={{ justifyContent: 'start', alignItems: 'center' }}>
                <Pagination count={10} color="primary" />
            </Grid>
        </Grid>
    );
};

export default PaginationList;