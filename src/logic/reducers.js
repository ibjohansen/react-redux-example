import {UP_VOTE, DOWN_VOTE} from './actions'

// Reducer: voter
// en funksjon som tar state (defaluter til 0) og en action
// basert på type, øker eller reduserer state-variablene count med 1

export const voter = (state = {count: 0}, action) => {

  const count = state.count

  switch (action.type) {
    case UP_VOTE:
      console.log('upvote reducer is called');
      return {count: count + 1}

    case DOWN_VOTE:
      console.log('downvote reducer is called');
      return {count: count - 1}

    default:
      return state
  }
}
