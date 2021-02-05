import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './views/Home';

//组件的引入文件
import DatePicker1 from './views/commponent/DatePicker';
import Form1 from './views/commponent/Form';
import Transfer1 from './views/commponent/Transfer';
import Table1 from './views/commponent/Table';
import Grid1 from './views/commponent/Grid';
import Affix1 from './views/commponent/Affix';
import Breadcrumb1 from './views/commponent/Breadcrumb';

class router extends React.Component {
  render() {
    return (
      // <Router>
      //   {/* <Route path="/"  render{() => <Redirect to="/home"/>}></Route> */}
      //   <Route path="/" exact component={Home}></Route>
      // </Router>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/DatePicker1" component={DatePicker1}></Route>
          <Route path="/Form1" component={Form1}></Route>
          <Route path="/Transfer1" component={Transfer1}></Route>
          <Route path="/Table1" component={Table1}></Route>
          <Route path="/Grid1" component={Grid1}></Route>
          <Route path="/Affix1" component={Affix1}></Route>
          <Route path="/Breadcrumb1" component={Breadcrumb1}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default router;
