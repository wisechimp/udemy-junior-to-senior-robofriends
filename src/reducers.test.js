import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

 import * as reducers from './reducer'

 describe ('searchRobots', () => {
   const initialStateSearch = {
     searchField: ''
   }
   it('should return the initial state', () => {
     expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
   })
   it('should handle the CHANGE_SEARCH_FIELD event', () => {
     expect(reducers.searchRobots(initialStateSearch, {
       type: CHANGE_SEARCH_FIELD,
       payload: 'abc'
     })).toEqual({
       searchField: 'abc'
     })
    })
 })

 describe ('requestRobots', () => {
   const initialStateRobots = {
     robots: [],
     error: '',
     isPending: false
   }
   const roboTestData = {
     id: '123',
     name: 'test',
     email: 'test@gmail.com'
   }
   it('should return the initial state', () => {
     expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
   })
   it('should handle REQUEST_ROBOTS_PENDING action', () => {
     expect(reducers.requestRobots(initialStateRobots, {
       type: REQUEST_ROBOTS_PENDING,
     })).toEqual({
       robots: [],
       error: '',
       isPending: true
     })
   })
   it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
     expect(reducers.requestRobots(initialStateRobots, {
       type: REQUEST_ROBOTS_SUCCESS,
       payload: [
         roboTestData
       ]
     })).toEqual({
       robots: [roboTestData],
       error: '',
       isPending: false
     })
   })
   it('should handle REQUEST_ROBOTS_FAILED action', () => {
     expect(reducers.requestRobots(initialStateRobots, {
       type: REQUEST_ROBOTS_FAILED,
       payload: 'Snafu'
     })).toEqual({
       robots: [],
       error: 'Snafu',
       isPending: false
     })
   })
 })