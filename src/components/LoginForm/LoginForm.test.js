//need to test local state changing 
//validate user should hit fetch
//need to mock out fetch return (actual fetch tested in fetchCalls file)
//need to jest fn preventDefault
//test happy and sad path of fetch mock 

//need a snapshot test
//test mapDispatchToProps
//need to test the redirect 


import React from 'react';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { shallow } from 'enzyme';
import { loginUser, loadUserRatings } from '../../actions';
import { fetchData, fetchDataAlt } from '../../utils/fetchCalls';

jest.mock('../../utils/fetchCalls.js')

const user = {
    id: 21,
    name: "Lucy",
    email: "lucy@turing.io"
}

const ratings = [{
    id: 826,
    user_id: 21,
    movie_id: 23,
    rating: 8,
    created_at: "2020-02-23T22:01:31.515Z",
    updated_at: "2020-02-23T22:01:31.515Z"
},
{
    id: 831,
    user_id: 21,
    movie_id: 25,
    rating: 1,
    created_at: "2020-02-23T22:10:46.621Z",
    updated_at: "2020-02-23T22:10:46.621Z"
}]

describe('LoginForm', () => {
    describe('LoginForm Container', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<LoginForm />)
        })

        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot()
        });

        it('should track user input entry', () => {
            const mockEmailEvent = { target: { name: 'email', value: 'user1' } };
            const mockPassEvent = { target: { name: 'password', value: 'passTest' } };

            wrapper.instance().handleChange = jest.fn();
            wrapper.instance().forceUpdate();
            wrapper.find('[name="email"]').simulate('change', mockEmailEvent);
            wrapper.find('[name="password"]').simulate('change', mockPassEvent);

            expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEmailEvent);
            expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockPassEvent);        });
    });

    describe('mapDispatchToProps', () => {
        it('call dispatch with the loginUser action when addUserToStore is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = loginUser(user)
            const mappedProps = mapDispatchToProps(mockDispatch)

            mappedProps.addUserToStore(user)

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })

        it('call dispatch with the loadUserRatings action when addUserRatingsToStore is called', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = loadUserRatings(ratings)
            const mappedProps = mapDispatchToProps(mockDispatch)

            mappedProps.addUserRatingsToStore(ratings)

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })
    });

    describe('LoginForm Fetch Calls', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<LoginForm />)
        })

        it('should store error on failed fetch', () => {
            const instance = wrapper.instance();
            const mockEvent = { preventDefault: jest.fn() } 

            fetchData.mockImplementation(() => {
                return Promise.reject(Error('There was an error fetching data'))
            })

            instance.validateUser(mockEvent,'Debbie Downer','raincloud')
            expect(wrapper.state('error')).toEqual('Invalid Login');
        })

        it('should fire rating fetch on successful fetch', () => {
            const instance = wrapper.instance();
            const mockEvent = { preventDefault: jest.fn() }

            jest.mock(mapDispatchToProps)

            wrapper = shallow(<LoginForm addUserRatingsToStore={jest.fn()} addUserToStore={jest.fn()}/>)

            //jest fn to replace mock

            fetchData.mockImplementation(() => {
                return Promise.resolve({ user })
            })

            fetchDataAlt.mockImplementation(() => {
                return Promise.resolve({ user })
            })

            instance.validateUser(mockEvent, 'Debbie Downer', 'raincloud')

        })
    });

    
})