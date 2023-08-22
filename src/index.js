/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import BaseLayout from "layouts/Base.js";
// import AdminLayout from "layouts/Admin.js";
// import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/`} component={BaseLayout} />
      {/* <Route path={`/admin`} component={AdminLayout} /> */}
      {/* <Route path={`/rtl`} component={RTLLayout} /> */}
      <Redirect from={`/`} to='/survey' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
