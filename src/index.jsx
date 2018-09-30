import React  from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {VoteMachine} from './components/vote-machine'

import {mapDispatchToProps, mapStateToProps, store} from './logic/store'

const App = connect(mapStateToProps, mapDispatchToProps)(VoteMachine)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
