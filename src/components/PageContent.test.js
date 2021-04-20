import { shallow } from 'enzyme'
import React from 'react'
import PageContent from './PageContent'

let wrapper

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<PageContent { ...mockProps } />)
})

it('renders PageContent', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  const mockPropsFilterTest = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const wrapper2 = shallow(<PageContent { ...mockPropsFilterTest } />)
  expect(wrapper.instance().filteredRobots()).toEqual([])
  expect(wrapper2.instance().filteredRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }])
})