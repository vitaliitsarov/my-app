import {
    FETCH_PRODUCTS
} from "../types";

export const getProductData = () => (dispatch) => {
    fetch("https://api.extaz.pl/api/v1/products", {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer dde4d629-2662-4ab0-b733-6e586e4e2e00',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    })
        .then((res) => res.json())
        .catch((err) =>
            fetch("db.json")
                .then((res) => res.json())
                .then((data) => data)
        )
        .then((data) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data });
        });
};
