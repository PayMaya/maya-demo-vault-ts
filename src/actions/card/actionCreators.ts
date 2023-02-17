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

export function makeCardDefaultSuccessful(payload: CardDetails) {
    return {
        type: actionTypes.MAKE_CARD_DEFAULT_SUCCESSFUL,
        payload
    }
}

export function makeCardDefaultFailed() {
    return {
        type: actionTypes.MAKE_CARD_DEFAULT_FAILED
    }
}

export function createCardSuccessful(payload: CreatedCard) {
    return {
        type: actionTypes.CREATE_CARD_SUCCESSFUL,
        payload
    }
}

export function createCardFailed() {
    return {
        type: actionTypes.CREATE_CARD_FAILED
    }
}