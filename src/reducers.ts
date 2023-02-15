import { GET_CARDS } from "./actions"

const cards = (state: CardDetails[] = [], action: any): CardDetails[] => {
    switch (action.type) {
        case GET_CARDS:
            const { payload } = action 
            return payload
        default:
            return state
    }
}

export { cards }