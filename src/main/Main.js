import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Timesheet from '../components/Timesheet/Timesheet'
import Department from '../components/Department/Department'
import Employee from '../components/Employee/Employee'
import Project from '../components/Project/Project'
import Task from '../components/Task/Task'
import Profile from '../components/Profile/Profile'

export const Main = () =>

  (
    <main>
      <Switch>
          <Route path="/app/home/" component={Home} />
          <Route path="/app/timesheet/" component={Timesheet} />
          <Route path="/app/department" component={Department} />
          <Route path="/app/employee" component={Employee} />
          <Route path="/app/project" component={Project} />
          <Route path="/app/task" component={Task} />
          <Route path="/app/profile" component={Profile} />
          <Route exact path='/app' component={Home} />
      </Switch>
    </main>
  )