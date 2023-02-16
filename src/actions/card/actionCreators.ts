import * as actionTypes from "./actionTypes"

export function getCardsSuccessful(payload: CardDetails[]) {
    return {
        type: actionTypes.GET_CARDS_SUCCESSFUL,
        payload
    }
}

export function getCardsFailed() {
    return {
        type: actionTypes.GET_CARDS_FAILED
    }
}

export function updateCardSuccessful(payload: CardDetails[]) {
    return {
        type: actionTypes.UPDATE_CARD_SUCCESSFUL,
        payload
    }
}

export function updateCardFailed() {
    return {
        type: actionTypes.UPDATE_CARD_FAILED
    }
}