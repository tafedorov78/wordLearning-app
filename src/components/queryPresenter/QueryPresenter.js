import React from 'react'
import Query from "../query/Query";

class QueryPresenter extends React.Component {
  state = {
    currentID: 0,
    questions: [
      {
        question: 'How old ... you?',
        options: [ 'are', 'is', 'am' ]
      },
      {
        question: 'Pencil',
        options: [ 'ручка', 'карандаш', 'линейка' ]
      },
      {
        question: 'Women',
        options: [ 'Женщины', 'Женщина', 'Бабушка' ]
      }
    ]

  }

  onClick = (target) => {
    console.log(`Answer received from ${target}`)
    const currentID = this.state.currentID + 1 <= this.state.questions.length - 1
      ? this.state.currentID + 1
      : 0

    this.setState({
      currentID
    })

    console.log(this.state.currentID)
  }

  render() {

    return (
      <Query
        id={this.state.currentID}
        question={this.state.questions[this.state.currentID].question}
        options={this.state.questions[this.state.currentID].options}
        onClick={this.onClick}
      >

      </Query>
    )
  }
}

export default QueryPresenter