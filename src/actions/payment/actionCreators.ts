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

export function paymentSuccessful(payload: CreateCardPaymentPayload) {
    return {
        type: actionTypes.PAYMENT_SUCCESSFUL,
        payload
    }
}

export function paymentFailed(payload: CreateCardPaymentPayload) {
    return {
        type: actionTypes.PAYMENT_FAILED,
        payload
    }
}

export function paymentCancelled(payload: CreateCardPaymentPayload) {
    return { 
        type: actionTypes.PAYMENT_CANCELLED,
        payload
    }
}

export function paymentCleared() {
    return { 
        type: actionTypes.PAYMENT_CLEARED,
    }
}