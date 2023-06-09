import { Todo, FetchTodosAction } from "../actions"
import { ActionTypes } from "../actions/type"

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload
		default:
			return state
	}
}
