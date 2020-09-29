
require('./bootstrap');
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Company from './components/Company';
import Candidate from './components/Candidate';
import LoginCompany from './components/LoginCompany';
import LoginCandidate from './components/LoginCandidate';
import Dashboard from './components/Dashboard';
import DashboardStudent from './components/DashboardStudent';
import Job from './components/Job';
import PostedJobs from './components/PostedJobs';



function App() {
    return (
    	<BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/registerCompany" component={Company} exact />
                <Route path="/registerCandidate" component={Candidate} exact />
                <Route path="/LoginCompany" component={LoginCompany} exact />
                <Route path="/LoginCandidate" component={LoginCandidate} exact />
                <Route path="/Dashboard"   render={(props) => <Dashboard {...props}/>} />
                <Route path="/DashboardStudent"   render={(props) => <DashboardStudent {...props}/>} />
                <Route path="/Job" component={Job} exact />
                <Route path="/PostedJobs" component={PostedJobs} exact />
                
            </Switch>
        </BrowserRouter>
    )
}

export default App;



if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

