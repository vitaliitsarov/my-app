import React, {useEffect, useState} from "react";
import useSwr from 'swr';
import { useRouter } from "next/router";

import ProductItem from './../../product-item';
import ProductsLoading from './loading';
import {Grid, Pagination} from "@mui/material";

const fetcher = (url) => fetch(`https://api.extaz.pl${url}`,{
    method: 'GET',
    headers: new Headers({
        'Authorization': 'Bearer dde4d629-2662-4ab0-b733-6e586e4e2e00',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
}).then((res) => res.json());

const ProductsContent = () => {
    const router = useRouter();

    const [pageIndex, setPageIndex] = useState(1);

    const { data, error } = useSwr(`/api/v1/products?page=${pageIndex}`, fetcher);

    if (error) return <div>Failed to load users</div>;

    const handleChange = (event, value) => {
        setPageIndex(value);
        router.push(`/?page=${value}`, undefined, { shallow: true });
    }

    if (router.query.page) {
        useEffect(() => {
            if (router.query.page) {
                setPageIndex(parseInt(router.query.page));
            }
        }, [router.query.page]);
    }
    return (
        <>
            {!data &&
                <ProductsLoading />
            }
            {data &&
                <>
                    <Grid container spacing={2} sx={{ marginBottom: '15px' }}>
                        { data.data.map(item => (
                            <ProductItem
                                key={item.id}
                                id={item.id}
                                productImage={JSON.parse(item.images)[0]}
                                title={item.title}
                            />
                        ))}
                    </Grid>
                    <Grid container sx={{ marginBottom: '15px'}} spacing={2}>
                        <Grid container item xs={12} lg={12}  sx={{ justifyContent: 'start', alignItems: 'center' }}>
                            <Pagination count={data.meta.last_page} page={pageIndex} color="primary" onChange={handleChange} />
                        </Grid>
                    </Grid>
                </>
            }
        </>
    );
};

export default ProductsContent