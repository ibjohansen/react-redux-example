import React, {Component} from 'react'

export class Basic extends Component {

  constructor(props) {
    super(props)

    this.state = {input: 'hallo på do'}
    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    const {value} = event.target
    this.setState({input: value})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.onChange}
        />
        <br/>
        <p>{this.state.input}</p>
      </div>
    )
  }
}
