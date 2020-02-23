import { Nav, mapStateToProps, mapDispatchToProps } from './Nav.js';
import { logOut }

describe('Nav', () => {
  describe('Nav Component', () => {
    // component testing we already know
  })
  describe('mapStateToProps', () => {
    it('should return an object with an array of todos', () => {
      const mockState = {
        user: {name: 'Karl the Llama', id: 9, password: 'password1'},
        movies: 'Big Lebowski'
      }
      const expected = { user: {name: 'Karl the Llama', id: 9, password: 'password1'} }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with addTodo action when logOutFromStore is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOut();
      const dispatchedProps = mapDispatchToProps( mockDispatch );
      dispatchedProps.logOut();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
