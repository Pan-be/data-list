import React from "react"
import ReactDOM from "react-dom"

interface Props {
	color?: string
}

class App extends React.Component<Props> {
	state = { counter: 0 }

	onUp = (): void => {
		this.setState({ counter: this.state.counter + 1 })
	}
	onDown = (): void => {
		this.setState({ counter: this.state.counter - 1 })
	}

	render() {
		return (
			<div>
				<button onClick={this.onUp}>+</button>
				{this.state.counter}
				<button onClick={this.onDown}>-</button>
			</div>
		)
	}
}

ReactDOM.render(<App color='green' />, document.querySelector("#root"))
