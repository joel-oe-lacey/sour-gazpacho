import React from 'react';
import ScrollToTop from './ScrollToTop.js';
import App from '../App/App.js';
import { mount } from 'enzyme';
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

  it('should scroll to top if route pathname changes', () => {
    global.scrollTo = jest.fn();
    expect(global.scrollTo).not.toHaveBeenCalled();
    history.push('/new-url');
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  })

})
