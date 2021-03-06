import React from 'react';
import {Collapse, ListItemButton, ListItemText, List} from "@mui/material";
import useSwr from "swr";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from "next/link";

const fetcher = (url) => fetch(`https://api.extaz.pl${url}`,{
    method: 'GET',
    headers: new Headers({
        'Authorization': 'Bearer dde4d629-2662-4ab0-b733-6e586e4e2e00',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    })
}).then((res) => res.json());

const Category = () => {

    const Tree = ({ category }) => {
        if(category.id == '79' || category.id == '80' || category.id == '92' || category.id == '99'  || category.id == '103') {
            return;
        }
        if(category.parent_id == 0) {
            return (
                <ListItemButton>
                    <ListItemText primary={category.title}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            )
        } else {
            return (
                    <List component="div" disablePadding>
                        <Link href={`/category/${category.id}`} >
                            <a>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary={category.title} />
                                </ListItemButton>
                            </a>
                        </Link>
                    </List>
            )
        }
    }

    const { data, error } = useSwr(`/api/v1/categories`, fetcher);

    if (error) return <div>Failed to load users</div>;

    return (
            <>
                { data && data.data.map((category, index) => (
                    <Tree category={category} key={index} />
                )) }
            </>
    );
};

export default Category;