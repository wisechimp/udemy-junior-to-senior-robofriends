import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'SnowJoke',
      email: 'john.snow@nightwatch.org'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})