import React from "react";
import Sliderbar from './Sliderbar'
import DiscCard from './DiscCard'
import { discArray } from "./discData";
const Main = () => {
    let value = 0;



    return (
        <>
        <h1 style={{margin: 0, textAlign: "center"}}>Disc Library</h1>
            <div style={{overflow: "hidden", boxShadow: "5px 10px 10px black", height: "90vh", width: "80vw", margin: "auto", borderRadius: "4rem"}}>
                <Sliderbar />
                <section style={{display: "flex", flexWrap: "wrap"}}>
                    {discArray.map((disc) => {
                        return <DiscCard {...disc} key={value++} /> 
                    })}
                </section>
            </div>
        </>
    )
}

export default Main