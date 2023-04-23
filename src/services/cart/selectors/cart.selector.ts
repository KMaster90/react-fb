import {CartState} from "@/services";

export const selectCartList = ({list}:CartState)=>list;
export const selectCartIsEmpty = ({list}:CartState)=>!list.length;
export const selectTotalCartItems = ({list}:CartState)=>list.reduce((s,{qty})=>s+qty,0);
export const selectTotalCartCost = ({list}:CartState)=>list.reduce((s,{product:{cost},qty})=>s+cost*qty,0);
export const addToCartSelector = ({addToCart}:CartState)=>addToCart;
