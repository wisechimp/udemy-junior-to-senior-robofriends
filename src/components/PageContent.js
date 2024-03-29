import React, { Component } from 'react'

import CardList from './CardList'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'
import Scroll from './Scroll'
import SearchBox from './SearchBox'

import './PageContent.css'

class PageContent extends Component { 
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props

    return (isPending ?
      <h1>Loading...</h1> : 
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    )
  }
}

export default PageContent