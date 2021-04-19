import { shallow } from 'enzyme'
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary Component Tests', () => {
  const wrapper = shallow(<ErrorBoundary />)

  it('expect to render ErrorBoundary component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('recognises that an error has occured', () => {
    wrapper.setState({ hasError: true })
    expect(wrapper.state().hasError).toBeTruthy()
    expect(wrapper.find('[id="errorMessage"]').length).toBe(1)
  })

  it('performs as expected when there is no error', () => {
    wrapper.setState({ hasError: false })
    expect(wrapper.state().hasError).toBeFalsy()
    expect(wrapper.find('[id="errorMessage"]').length).toBe(0)
  })
})
