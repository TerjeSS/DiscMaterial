import React from 'react'
import DiscStat from './DiscStat'

const DiscCard = ({Name, Category, Speed, Glide, Turn, Fade, Image}) => {
    return (
        <>
        <div className="card-wrapper" style={{width: "8rem", margin: "0 2rem", border: "2px solid black", borderRadius: "15px"}}>
            <h2 className="disc-name" style={{marginBottom: "1rem"}}>{Name}</h2>
            <h5 style={{marginBottom: "0.7rem"}}>{Category}</h5>
            <img className="disc-image" style={{marginBottom: "0.7rem"}} src={`../img/${Image}`} alt="discimage" height="90px"></img>
            <div className="disc-stats" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <DiscStat stat={Speed} />
                <DiscStat stat={Glide}/>
                <DiscStat stat={Turn}/>
                <DiscStat stat={Fade}/>
            </div>
        </div>
        
        </>
    )
}
export default DiscCard
