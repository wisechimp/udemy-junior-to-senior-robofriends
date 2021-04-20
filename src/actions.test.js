import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants'

import * as actions from './actions'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([
  thunkMiddleware
])

describe('testing the two actions', () => {
  it('should create an action to search robots', () => {
    const testText = 'test'
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: testText
    }
    expect(actions.setSearchField(testText)).toEqual(expectedAction)
  })
  it('handles requesting robots', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions()
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
  })
})