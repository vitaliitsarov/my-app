import React from 'react';
import {Box, FormControl, Grid, MenuItem, Paper, Select} from "@mui/material";

const Filter = () => {
    return (
        <Paper sx={{ marginBottom: '15px', padding: 2}}>
            <Grid container spacing={2} >
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Grid item xs={12} lg={6}>
                            <Box component={'span'} >Sortuj według:</Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    defaultValue={'sell_count-DESC'}
                                >
                                    <MenuItem value={'pname-ASC'}>Nazwy (A-Z)</MenuItem>
                                    <MenuItem value={'pname-DESC'}>Nazwy (Z-A)</MenuItem>
                                    <MenuItem value={'price_brutto-ASC'}>Ceny (rosnąco)</MenuItem>
                                    <MenuItem value={'price_brutto-DESC'}>Ceny (malejąco)</MenuItem>
                                    <MenuItem value={'sell_count-DESC'}>Najlepiej sprzedające się</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container spacing={2} sx={{ alignItems: 'center'}}>
                        <Grid item xs={12} lg={6}>
                            <Box component={'span'} >Produktów na stronie</Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    defaultValue={10}
                                >
                                    <MenuItem value={'10'}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                    <MenuItem value={100}>100</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Filter;