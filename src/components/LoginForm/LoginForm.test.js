//need to test local state changing 
//validate user should hit fetch
//need to mock out fetch
//need to jest fn preventDefault

//need a snapshot test
//test mapDispatchToProps
//need to test the redirect 


import React from 'react';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { shallow } from 'enzyme'
import { fetchData } from '../../utils/fetchCalls';
import { loginUser, loadUserRatings } from '../../actions';

describe('LoginForm', () => {
    describe('LoginForm Container', () => {
        it('should match snapshot', () => {
            const wrapper = shallow(<LoginForm />)

            expect(wrapper).toMatchSnapshot()
        })
    });

    describe('mapDispatchToProps', () => {
        it('call dispatch with the loginUser action when addUserToStore is called', () => {
            const mockDispatch = jest.fn();
            const user = {
                id: 21,
                name: "Lucy",
                email: "lucy@turing.io"
            }
            const actionToDispatch = loginUser(user)
            const mappedProps = mapDispatchToProps(mockDispatch)

            mappedProps.addUserToStore(user)

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })

        it('call dispatch with the loadUserRatings action when addUserRatingsToStore is called', () => {
            const mockDispatch = jest.fn();
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
            const actionToDispatch = loadUserRatings(ratings)
            const mappedProps = mapDispatchToProps(mockDispatch)

            mappedProps.addUserRatingsToStore(ratings)

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })
    });

    describe('LoginForm Container', () => {
        it('should match snapshot', () => {
            const wrapper = shallow(<LoginForm />)

            expect(wrapper).toMatchSnapshot()
        })
    });
})