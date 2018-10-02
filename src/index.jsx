import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {VoteMachine} from './components/vote-machine'

import {mapDispatchToProps, mapStateToProps, store} from './logic/store'

// sett opp app-en vår, her bruker vi Redux' connect for og sender inn mapStateToProps, mapDispatchToProps,
// inn i vårt connectede komponent, på denne måten vil vi i komponentet kunne hente state
// og dispatche actions for å endre state
const App = connect(mapStateToProps, mapDispatchToProps)(VoteMachine)

//Provider sørger for at vår store er tilgjengelig for applikasjonen vår
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
