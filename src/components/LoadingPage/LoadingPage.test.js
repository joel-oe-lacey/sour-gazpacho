import React from 'react';
import LoadingPage from './LoadingPage';
import { shallow } from 'enzyme'

describe('LoadingPage', () => {


  it('should match a snapshot as expected', () => {
    const wrapper = shallow(<LoadingPage />)

    expect(wrapper).toMatchSnapshot()
  })
})
