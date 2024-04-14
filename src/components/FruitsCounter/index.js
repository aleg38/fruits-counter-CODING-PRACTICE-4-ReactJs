// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onMangoBtn = () => {
    this.setState(prevValue => ({mangoesCount: prevValue.mangoesCount + 1}))
  }

  onBananaBtn = () => {
    this.setState(prevValue => ({bananasCount: prevValue.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-detail-container">
          <h1 className="fruits-text">
            Bob ate <span className="span-styling">{mangoesCount}</span> mangoes
            <span className="span-styling"> {bananasCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="banana"
            />
          </div>
          <div className="fruits-btn-container">
            <button
              onClick={this.onMangoBtn}
              type="button"
              className="button btn-1"
            >
              Eat Mango
            </button>
            <button onClick={this.onBananaBtn} type="button" className="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
