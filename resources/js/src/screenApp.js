import React from "react"
import { Route, Routes } from "react-router-dom"
import { DetailsModule } from "./components/detailsModule"
import { Home } from "./components/home"
import { NavBar } from "./components/navBar"

export const ScreenApp = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/module/:id" element={<DetailsModule/>}/>
            </Routes>
        </>
    )
}