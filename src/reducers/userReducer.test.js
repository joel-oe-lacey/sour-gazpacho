import { userReducer } from './user';

describe('userReducer', () => {

  it('should have an initial state of an empty object', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should be able to log a user in', () => {
    const mockState = {}
    const user = {
      id: 21,
      name: "Lucy",
      email: "lucy@turing.io"
    }
    const mockAction = {
      type: 'LOGIN_USER',
      user
    }
    const expected = {
      id: 21,
      name: "Lucy",
      email: "lucy@turing.io"
    }
    const result = userReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should be able to log a user out', () => {
    const mockState = {
      id: 21,
      name: "Lucy",
      email: "lucy@turing.io"
    }
    const mockAction = {
      type: 'LOG_OUT',
      user: {}
    }
    const expected = {}
    const result = userReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

})
