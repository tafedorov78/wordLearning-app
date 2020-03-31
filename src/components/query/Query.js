import React from 'react'
import classes from './Query.module.css'

class Query extends React.Component {

  renderOptions () {
    return this.props.options.map((option, index) => {
      return (
          <button
            key={index}
            className={classes.Button} onClick={() => this.props.onClick(this.props.id)}>
            {option}
          </button>
      )
    })
  }

  render() {
    return (
      <div className={classes.Query}>
        <div>
          <small className={classes.Caption}>Вопрос:</small>
          <h1>{this.props.question}</h1>
          <small className={classes.Caption}>Варианты:</small>
          <ul>
            {this.renderOptions()}
          </ul>
          <small className={classes.Caption}>Вопрос 1 из 20</small>
        </div>
      </div>
    )
  }
}

export default Query