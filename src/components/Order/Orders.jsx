import React, { Component } from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';
import Menus from './Menus';
import { upcomingDates } from '../../helpers/mockMenus';
import Navbar from '../common/Navbar/Navbar';
import Sidenav from '../common/Sidenav/Sidenav';
// import { isAuthorized } from '../../helpers/authorization';

/* eslint-disable */
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDates() {
    return upcomingDates.map((currentDate, index) =>
      (
        <li key={currentDate.id} className="dates">
        <NavLink activeClassName="active" to={`${this.props.match.url}/${currentDate.date}`} className="date-link">
          {currentDate.date}
        </NavLink>
        <div className="border-circle"></div>
      </li>
      ));
  }


  render() {
    const { match: { url } } = this.props;
    return (
      <div className="wrapper">
        <Navbar />
        <Sidenav />
        <div className="orders-wrapper">
          <h3>Make Orders</h3>

          <div className="orders-container">
            <div className="date-wrapper">
              <h3>
                JUNE 2018
              </h3>
              <ul>
                {this.renderDates()}
              </ul>
            </div>
            <div className="menu-wrapper">
              <Route
                path={`${url}/:date`}
                render={(props) => <Menus data={upcomingDates} {...props} />}
              />
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Orders;
