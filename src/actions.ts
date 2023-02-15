export const GET_CARDS = 'GET_CARDS'
export function getCards(payload: CardDetails[]) {
    return {
        type: GET_CARDS,
        payload
    }
}