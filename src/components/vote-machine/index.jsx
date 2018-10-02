import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './vote-machine.css'
import {Button} from '../button'

export class VoteMachine extends Component {
  render() {
    const {value, onUpVoteClick, onDownVoteClick} = this.props

    return (
      <div className="container">
        <div className="vote-machine">
          <div className="votes">{value}</div>
          <div className="panel">
            <Button type="button" name="btn_upvote" onClick={onUpVoteClick}>
              <i className="fas fa-thumbs-up"/>
            </Button>
            <Button type="button" name="btn_downvote" onClick={onDownVoteClick}>
              <i className="fas fa-thumbs-down"/>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

VoteMachine.propTypes = {
  value: PropTypes.number.isRequired,
  onUpVoteClick: PropTypes.func.isRequired,
  onDownVoteClick: PropTypes.func.isRequired
}
