import React from 'react'
import {Link} from "react-router-dom";
import classes from './SideMenu.module.css'


class SideMenu extends React.Component {

  backDrop = () => {
    return (
      <div
        className={classes.BackDrop}
        onClick={this.props.onClick}
      >

      </div>
    )
  }

  render() {
    const cls = [ classes.SideMenu ]

    if (!this.props.isMenuOpened) {
      cls.push(classes.close)
    }

    return (
        <div>
          <nav className={cls.join(' ')}>
            <div className={classes.MenuHeader}>
              <small>Menu</small>
              <hr/>
            </div>
            <ul>

                <Link to={"/login"} className={classes.MenuItem}
                onClick={this.props.onClick}
                >Log in</Link>

                <Link to={"/register"} className={classes.MenuItem}
                onClick={this.props.onClick}
                >Register</Link>

                <Link to={"/play"} className={classes.MenuItem}
                onClick={this.props.onClick}
                >Play</Link>

                <Link to={"/sections"} className={classes.MenuItem}
                onClick={this.props.onClick}
                >Sections</Link>


            </ul>

          </nav>

          {this.props.isMenuOpened ? this.backDrop() : null}
        </div>
    )
  }
}

export default SideMenu

//{ this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null }