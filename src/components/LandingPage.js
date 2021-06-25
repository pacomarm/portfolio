import React from 'react'
// import { useDispatch } from 'react-redux'
// import { getProjects } from '../actions/projects';


export const LandingPage = () => {
    
    // const dispatch = useDispatch();
    
    // const handleClick = () => {
    //     dispatch( getProjects() )
    // }

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
                    <button className="button"><span className="b1">Projects</span></button>
                    <button className="button"><span className="b2">About</span></button>
                    <button className="button"><span className="b3">Contact</span></button>
                </div>
            </div>
        </>
    )
}
