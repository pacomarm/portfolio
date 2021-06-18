import React from 'react'
import { useDispatch } from 'react-redux'
import { getProjects } from '../actions/projects';


export const LandingPage = () => {
    
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch( getProjects() )
    }

    return (
        <>
            <div className="cards">
                <h2 className="titles">My Portfolio</h2>
                <button className="btn btn-primary" onClick={handleClick}>Hi</button>
            </div>
        </>
    )
}
