import React from 'react'
import { Button } from '@mui/material'
function Sliderbar() {
    return (
        <div style={{height: "3rem", width: "90%", margin: "auto", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "3 px solid black", backgroudnColor
        : "blue"}}>
                <Button>View All</Button>
                <Button>View Bag</Button>
                <Button>View Wishlist</Button>
        </div>
    )
}

export default Sliderbar
