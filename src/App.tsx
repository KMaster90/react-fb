import React from "react";
import {Outlet} from "react-router-dom";
import {NavBar} from "@/shared";
import "./App.css";

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
