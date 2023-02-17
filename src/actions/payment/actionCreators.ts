import * as actionTypes from "./actionTypes"

export function createPaymentTokenSuccesful(payload: PaymentTokenResponse) {
    return {
        type: actionTypes.CREATE_PAYMENT_TOKEN_SUCCESSFUL,
        payload
    }
}

export function createPaymentTokenFailed() {
    return {
        type: actionTypes.CREATE_PAYMENT_TOKEN_FAILED
    }
}