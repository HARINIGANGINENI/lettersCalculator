// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="letter" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              className="letters-input"
              id="letter"
              onChange={this.onChange}
              placeholder="Enter the phrase"
              type="text"
              value={count}
            />
          </div>
          <div className="letters-container">
            <p className="letters-count">No.of letters: {count.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
