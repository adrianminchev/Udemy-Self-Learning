/* eslint-disable array-callback-return */
import { Todo, Actions, ActionTypes } from "../actions";

export const todosReducer = (
    state: Todo[] = [],
    action: Actions
    ) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
        return action.payload;

        case ActionTypes.deleteTodo:
        return state.filter((todo: Todo) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            todo.id !== action.payload;
        });

        default:
        return state;
    }
};
