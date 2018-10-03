// exporterte actions
import {DOWN_VOTE, UP_VOTE} from './action-types'

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
