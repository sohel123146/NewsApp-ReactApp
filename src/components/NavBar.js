import React, { Component } from 'react'

export class NavBar extends Component {
  state = {
    mode : 'light',
    text : 'Enable dark mode',
    textColor : '#000000',
  }

  togglemode = () =>
  {
    if(this.state.mode === 'light')
    {
      this.setState({
        mode : 'dark',
        text : 'Enable light mode',
        textColor : '#ffffff',
      })
      document.body.style.backgroundColor = '#282828';
      
    }
    else
    {
     this.setState({
      mode : 'light',
      text : 'Enable dark mode',
      textColor : '#000000',
     })
     document.body.style.backgroundColor = 'white';
    }
  }
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${this.state.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={this.togglemode} id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.state.text}</label>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar 
