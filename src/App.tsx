import "./App.css";
import React from "react";
import {Outlet} from "react-router-dom";
import {NavBar} from "@/shared";

export const App = () => {
    return (
        <>
            <NavBar/>
            <div className="my-[6rem] mx-8">
                <Outlet/>
            </div>
        </>
    )
};
