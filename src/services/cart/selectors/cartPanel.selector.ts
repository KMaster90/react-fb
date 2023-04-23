import {CartStateOverlay} from "@/services";

export const openOverlaySelector = ({openOverlay}:CartStateOverlay)=>openOverlay;
export const closeOverlaySelector = ({closeOverlay}:CartStateOverlay) => closeOverlay;
