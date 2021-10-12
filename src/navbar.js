import React from 'react'
import './css/navbar.css'

function navbar() {
    return (
        <>
            <div className="nav-wrapper">
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
        </>
    )
}

export default navbar
