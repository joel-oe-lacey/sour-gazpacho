import React from 'react';
import ScrollToTop from './ScrollToTop.js';
import App from '../App/App.js';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

describe('ScrollToTop', () => {
  let wrapper;
  let history;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter initialEntries={['/']}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    );
    history = wrapper.instance().history;
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
