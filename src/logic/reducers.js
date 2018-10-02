import {UP_VOTE, DOWN_VOTE} from './actions'

// Reducer: voter
// en funksjon som tar state (defaulter til 0) og en action
// basert på action.type, øker eller reduserer state-variablene count med 1

export const voter = (state = {count: 0}, action) => {

  const count = state.count

  switch (action.type) {
    case UP_VOTE:
      return {count: count + 1}

    case DOWN_VOTE:
      return {count: count - 1}

    default:
      return state
  }
}
