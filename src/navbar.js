import * as React from 'react'
import './css/navbar.css'
import Button from '@mui/material/Button';


function navbar() {
    return (
            <div className="nav-wrapper">
                <ul>
                    <li><Button variant="text">Home</Button></li>
                    <li><Button variant="contained">About</Button></li>
                    <li><Button variant="outline">Contact</Button></li>
                </ul>
            </div>
    )
}

export default navbar
