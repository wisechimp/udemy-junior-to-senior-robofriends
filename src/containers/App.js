import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestRobots, setSearchField } from '../actions'
import PageContent from '../components/PageContent'

const mapStateToProps = state => {
  return {
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    searchField: state.searchRobots.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component { 
  render() {
    return <PageContent { ...this.props }/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)