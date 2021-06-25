import React from 'react'
import { useHistory } from 'react-router-dom'

export const LandingPage = () => {

    const history = useHistory();

    const handleClick = (route) => {
        history.push(route);
    }
    
    return (
        <>
            <div className="name">
                <span>FRANCISCO MARMOLEJO</span>
            </div>
            <div className="poss">
                <div className="titlebox">
                    <h2 className="titles">Software, Engineer; Designer: Human.</h2>
                    <h2 className="titles2">Software, Engineer; Designer: Human-ish</h2>
                </div>
                <div className="rou">
                    <button className="button" onClick={() => handleClick('projects')}><span className="b1">Projects</span></button>
                    <button className="button" onClick={() => handleClick('about')}><span className="b2">About</span></button>
                    <button className="button" onClick={() => handleClick('contact')}><span className="b3">Contact</span></button>
                </div>
            </div>
        </>
    )
}
