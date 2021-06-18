import React from 'react'
import { Provider } from 'react-redux'
import { LandingPage } from './components/LandingPage'
import { store } from './store/store'


export const PortfolioApp = () => {

    return (
        <Provider store={store}>
            <LandingPage/>
        </Provider>   
    )
}
