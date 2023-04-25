import React from "react"
import { connect } from "react-redux"
import { Todo, fetchTodos } from "../actions"
import { StoreState } from "../reducers"

interface AppProps {
	todos: Todo[]
	fetchTodos(): any
}

export class _App extends React.Component<AppProps> {
	render() {
		return <div>Test</div>
	}
}

const mapStateProps = ({ todos }: StoreState) => {
	return { todos }
}

export const App = connect(mapStateProps, { fetchTodos })(_App)
