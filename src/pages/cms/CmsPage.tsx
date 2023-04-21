import {NavLink, Outlet} from "react-router-dom";
import React from "react";

const isActive = (obj: {isActive: boolean}) => {
    return obj.isActive ? 'btn primary' : 'btn'
}

export const CmsPage = () => {
    return (
        <div>
            
            <NavLink to="products" className={isActive}>Products</NavLink>
            <NavLink to="orders" className={isActive}>Orders</NavLink>
            
            <Outlet />
        </div>
    )
}
