import {UP_VOTE, DOWN_VOTE, UPDATE_VOTES} from './action-types'

// Reducer: voter
// en funksjon som tar state (defaulter til 0) og en action
// basert på action.type, øker eller reduserer state-variablene count med 1

export const voter = (state = {votes: 0}, action) => {

  const votes = state.votes

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
