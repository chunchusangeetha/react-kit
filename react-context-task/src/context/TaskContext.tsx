import React from "react";
import type { ReactNode } from "react";
import { createContext, useReducer } from "react";
import type { Dispatch } from "react";

export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface State {
    tasks: Task[];
}

export type Action =
    | { type: "ADD_Task"; payload: Task }
    | { type: "Delete_Task"; payload: number }
    | { type: "Toggle_Task"; payload: number };

// --------------------------------------------------------------------------

const initialState: State = {
    tasks: [],
};

export const TaskContext = createContext<{ state: State; dispatch: Dispatch<Action> }>(
    // default value used only for typing; real value provided by TaskProvider
    { state: initialState, dispatch: () => null }
);

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_Task":
            return {
                tasks: [...state.tasks, action.payload],
            };
        case "Delete_Task":
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "Toggle_Task":
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        default:
            return state;
    }
}

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
