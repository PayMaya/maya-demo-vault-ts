import { ADD } from "./actions"

const count = (state: number = 0, action: any): number => {
    switch (action.type) {
        case ADD:
            return state + 1
        default:
            return state
    }
}

export { count }