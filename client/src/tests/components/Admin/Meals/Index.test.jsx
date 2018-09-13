/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import { shallow } from 'enzyme';
import Meals from '../../../../components/Admin/Meals/Index';

describe('AddMealModal Component', () => {
  const wrapper = shallow(<Meals />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toEqual(1);
  });
});
