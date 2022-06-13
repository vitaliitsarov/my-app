import * as actionTypes from '../types';

const initState = {
    Carts: [],
    numberCart: 0,
    _products: []
}

const cartReducer = (state = initState, action)=>{
    switch(action.type){
        case actionTypes.GET_ALL_PRODUCT:
            return{
                ...state,
                _products:action.payload
            }
        case actionTypes.GET_NUMBER_CART:
            return{
                ...state
            }
        case actionTypes.ADD_CART:
            if(state.numberCart === 0){
                let cart = {
                    id: action.payload.id,
                    title: action.payload.title,
                    price_brutto: action.payload.price_brutto,
                    vat: action.payload.vat,
                    stock: action.payload.stock,
                    barcode: action.payload.barcode,
                    description: action.payload.description,
                    quantity: 1,
                    image: JSON.parse(action.payload.images)[0],
                }
                state.Carts.push(cart);
            } else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id === action.payload.id){
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if(!check){
                    let _cart = {
                        id: action.payload.id,
                        title: action.payload.title,
                        price_brutto: action.payload.price_brutto,
                        vat: action.payload.vat,
                        stock: action.payload.stock,
                        barcode: action.payload.barcode,
                        description: action.payload.description,
                        quantity: 1,
                        image: JSON.parse(action.payload.images)[0],
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart: state.numberCart + 1
            }
        case actionTypes.INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return{
                ...state
            }
        case actionTypes.DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return{
                ...state
            }
        case actionTypes.DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id !== state.Carts[action.payload].id
                })

            }
        default:
            return state;
    }
}

export default cartReducer