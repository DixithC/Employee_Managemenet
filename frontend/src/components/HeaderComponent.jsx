import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {

        }
    }
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div><a href="https://javaguides.net" className='navbar-brand'>Employee Management App</a></div>
            </nav>
        </header>
      </div>
    )
  }
}
