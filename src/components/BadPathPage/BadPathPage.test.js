import React from 'react';
import BadPathPage from './BadPathPage';
import { shallow } from 'enzyme'

describe('BadPathPage', () => {


  it('should match a snapshot as expected', () => {
    const wrapper = shallow(<BadPathPage />)

    expect(wrapper).toMatchSnapshot()
  })
})
