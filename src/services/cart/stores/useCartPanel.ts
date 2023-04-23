import {create} from "zustand";
import {devtools} from "zustand/middleware";

export interface CartStateOverlay {
    open: boolean;
    toggle: () => void;
    openOverlay: () => void;
    closeOverlay: () => void;
}

export const useCartPanel = create<CartStateOverlay>()(devtools((set,get) => ({
    open: false,
    toggle: () => set({open: !get().open},false,{type:"cartPanel/toggle"}),
    openOverlay: () => set({open: true},false,{type:"cartPanel/openOverlay"}),
    closeOverlay: () => set({open: false},false,{type:"cartPanel/closeOverlay"}),
}),
    {name: "cartPanel"}
));
