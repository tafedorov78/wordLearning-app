import React from 'react'
import App from "../../App";
import classes from "./Section.module.css"


class Sections extends React.Component {

  state = {
    sections:null,
    isDone:false
  }


  componentDidMount() {
    if(!this.state.sections && App.serverController) {
      this.onGetSections()
    }
  }
  async onGetSections () {
    const res = await App.serverController.getSections()
    console.log('getSections', res)
    this.state.isDone = true
    this.state.sections = res.sections
    this.forceUpdate()
  }

  renderSections = () => {
    return this.state.sections.map(item => {
      return (<button>
              {item.name}
              </button>)
    })
  }

  render() {

    return (

      <div className={classes.Section}>
        <div>
          {this.state.isDone
            ? <ul>{this.renderSections()}</ul>
            : null
          }
        </div>
      </div>
    )
  }
}
export default Sections