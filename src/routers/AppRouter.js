import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
//   Link
} from "react-router-dom";
import { AboutPage } from '../components/AboutPage';
import { ContactPage } from '../components/ContactPage';
import { LandingPage } from '../components/LandingPage';
import { ProjectsPage } from '../components/ProjectsPage';
import { Constants } from '../Constants';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={`${Constants.baseURL}/home`} component={LandingPage}></Route>
                    <Route exact path={`${Constants.baseURL}/about`} component={AboutPage}></Route>
                    <Route exact path={`${Constants.baseURL}/contact`} component={ContactPage}></Route>
                    <Route exact path={`${Constants.baseURL}/projects`} component={ProjectsPage}></Route>
                    <Redirect to={`${Constants.baseURL}/home`}></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
