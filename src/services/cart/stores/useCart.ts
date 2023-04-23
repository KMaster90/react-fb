import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {CartItem, Product} from "@/model";

export interface CartState {
    list: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(devtools((set, get) => ({
        list: [],
        addToCart: (product) => get().list.some(({product:p})=>p.id===product.id)?get().increaseQuantity(product.id):set( {list:  [...get().list, {product, qty: 1}]},false,{type:"cart/addToCart"}),
        removeFromCart: (productId) => set({list: get().list.filter(item => item.product.id !== productId)}, false, {type: "cart/removeFromCart"}),
        increaseQuantity: (productId) => set({list: get().list.map(item => item.product.id === productId ? {...item, qty: ++item.qty} : item)}, false, {type: "cart/increaseQuantity"}),
        decreaseQuantity: (productId) => set({list: get().list.reduce((s, item) => [...s, ...(item.product.id === productId ? (item.qty > 1 ? [{...item, qty: --item.qty}] : []) : [item])], [] as CartItem[])}, false, {type: "cart/decreaseQuantity"}),
        clearCart: () => set({list: []}, false, {type: "cart/clearCart"}),
    }),
    {name: "cart"}
));
