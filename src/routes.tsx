import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Page404 from './pages/Page404';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
