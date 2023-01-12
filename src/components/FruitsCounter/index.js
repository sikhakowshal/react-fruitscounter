import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onMangoesIncrement = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onBananasIncrement = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="content-card">
          <h1 className="heading">
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>

          <div className="fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <div className="button-container">
                <button className="button" onClick={this.onMangoesIncrement}>
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <div className="button-container">
                <button className="button" onClick={this.onBananasIncrement}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
