import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// 現在のRedux上のStore情報(State)を、コンポーネントへ渡す
const mapStateToProps = state => ({ value: state.count.value })
// const mapStateToProps = state => {
//   return { value: state.count.value }
// }

// Actionsを発行するためのdispatch実行をコールバックとしてコンポーネントに渡す
// const mapDispatchToProps = ({ increment, decrement })
const mapDispatchToProps = dispatch => ({
  increment: () =>  dispatch(increment()),
  decrement: () =>  dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
