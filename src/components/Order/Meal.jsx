import React, { Component } from 'react';
import classname from 'classnames';
/* eslint-disable */

class Meal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meal: '', 
      accompaniment1: '',
      accompaniment2: '',
      checked:false,
      select: '',
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {

    if(!event.target.checked) {
      this.setState({
        select: '',
        value: ''
      })
    }
    else {
      this.setState({
        select: 'selected',
      })
    }
  }
  render() {
    const {meals} = this.props
    return (
      <li key={meals.id} className={ this.state.select }>
        <div className="image">
          <img src={meals.mealPicture} alt="food" />
        </div>
        <div className="meal-name">
          {meals.meal}
        </div>
        <div className="menu-checkbox">
          <input 
          id={meals.id} 
          type="radio" 
          name="food"
          className="radio-custom" 
          onChange={this.onChange} 
          value={meals.meal}/>
          <label className="radio-custom-label" htmlFor={meals.id}></label>
        </div>
      </li>
    );
  }
}
export default Meal;
