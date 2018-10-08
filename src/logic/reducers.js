import {UP_VOTE, DOWN_VOTE, UPDATE_VOTES} from './action-types'

// Reducer: voter
// En funksjon som tar state (med en initial state = 0) og en action
// (når reduceren kalles første gang kalles den med undefined state av Redux)
// basert på action.type, øker eller reduserer state-variablene count med 1

export const voter = (state = {votes: 0}, action) => {
  const {votes} = Object.assign({}, state)

  switch (action.type) {
    case UP_VOTE:
      return {votes: votes + 1}

    case DOWN_VOTE:
      return {votes: votes - 1}

    case UPDATE_VOTES:
      const {value} = action.payload
      return {votes: value}

    default:
      return state
  }
}
