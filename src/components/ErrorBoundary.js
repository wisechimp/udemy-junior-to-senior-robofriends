import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // This is like the try-catch block in js
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1 id='errorMessage'>Oops, there's been an error.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary