// action creators, funksjoner som lager actions
// exporterte actions
import {DOWN_VOTE, UP_VOTE, UPDATE_VOTES} from './action-types'

export const upVoteAction = () => {
  return {
    type: UP_VOTE
  }
}
export const downVoteAction = () => {
  return {
    type: DOWN_VOTE
  }
}
export const updateVotes = (value) => {
  return {
    type: UPDATE_VOTES,
    payload: value
  }
}
