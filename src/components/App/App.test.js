import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import { fetchData } from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App', () => {
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)
})

  it('should call fetchData when component mounts', () => {
    jest.spyOn(wrapper, 'fetchData')
    wrapper.instanceOf().componentDidMount()
    expect(fetchData).toHaveBeenCalled()

  })
})
