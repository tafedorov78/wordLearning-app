import React from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../components/menuToggle/MenuToggle'
import SideMenu from "../../components/menu/SideMenu";

class Layout extends React.Component {

  state = {
    isMenuOpened: false
  }

  onClickMenuHandler = () => {
    console.log('Click')
    const isMenuOpened = !this.state.isMenuOpened
    this.setState({
      isMenuOpened
    })
  }

  render() {
    return(
      <div className={classes.Layout}>

        <SideMenu
          isMenuOpened={this.state.isMenuOpened}
          onClick={this.onClickMenuHandler}

        />
        <MenuToggle
          isMenuOpened={this.state.isMenuOpened}
          onClick={this.onClickMenuHandler}
        />

        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout