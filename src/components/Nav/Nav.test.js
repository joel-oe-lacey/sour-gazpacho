import { Nav, mapStateToProps, mapDispatchToProps } from './Nav.js';
import { logOut } from '../../actions';
import { shallow } from 'enzyme';
import React from 'react';



describe('Nav', () => {
  let mockUser = {name: 'Karl the Llama', id: 9, password: 'password1'}

  describe('Nav Component', () => {
    let wrapper;
    let mockLogOutFromStore = jest.fn()

    beforeEach(() => {
    wrapper=shallow(<Nav
        user={mockUser}
        logOutFromStore={mockLogOutFromStore}
      />);
    })

    it('should be an instance of Nav', () => {
      expect(wrapper).toMatchSnapshot();
    })

  })
  describe('mapStateToProps', () => {
    it('should return an object with an array of todos', () => {
      const mockState = {
        user: mockUser,
        movies: 'Big Lebowski'
      }
      const expected = { user: mockUser }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with addTodo action when logOutFromStore is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOut();
      const dispatchedProps = mapDispatchToProps( mockDispatch );
      dispatchedProps.logOutFromStore();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
