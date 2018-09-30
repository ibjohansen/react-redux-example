import {createStore} from 'redux'
import {voter} from './reducers'
import {upVoteAction, downVoteAction} from './actions'

export const store = createStore(
  voter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // denne brukes kun i utvikling!
)

// Map Redux-tilstand (state) til komponentets props
// en funksjon som tar state, og returnerer et objekt med property
// value, og i dette tilfellet telleren fra state.
// På denne måten sendes tilstanden nedover i komponent-treet
export const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}

// Map Redux-actions til Komponentets props
// På denne måten får vi distribuert actions nedover i komponent-treet
export const mapDispatchToProps = (dispatch) => {
  return {
    onUpVoteClick: () => dispatch(upVoteAction),
    onDownVoteClick: () => dispatch(downVoteAction)
  }
}
