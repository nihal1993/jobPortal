
require('./bootstrap');
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Company from './components/Company';
import Candidate from './components/Candidate';
import LoginCompanyDashboard from './components/LoginCompanyDashboard';
import LoginCandidate from './components/LoginCandidate';
import Dashboard from './components/Dashboard';
import Job from './components/Job';




function App() {
    return (
    	<BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/registerCompany" component={Company} exact />
                <Route path="/registerCandidate" component={Candidate} exact />
                <Route path="/LoginCompany" component={LoginCompanyDashboard} exact />
                <Route path="/LoginCandidate" component={LoginCandidate} exact />
                <Route path="/Dashboard"   render={(props) => <Dashboard {...props}/>} />
                <Route path="/Job"   render={(props) => <Job {...props}/>} />
                
                
            </Switch>
        </BrowserRouter>
    )
}

export default App;



if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

