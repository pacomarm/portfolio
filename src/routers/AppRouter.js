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

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home" component={LandingPage}></Route>
                    <Route exact path="/about" component={AboutPage}></Route>
                    <Route exact path="/contact" component={ContactPage}></Route>
                    <Route exact path="/projects" component={ProjectsPage}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        </Router>
    )
}
