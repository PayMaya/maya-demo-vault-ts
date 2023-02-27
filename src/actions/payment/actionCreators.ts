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

export function paymentSuccessful(payload: string) {
    return {
        type: actionTypes.PAYMENT_SUCESSFUL,
        payload
    }
}

export function paymentFailed(payload: string) {
    return {
        type: actionTypes.PAYMENT_FAILED,
        payload
    }
}

export function paymentCancelled(payload: string) {
    return { 
        type: actionTypes.PAYMENT_CANCELLED,
        payload
    }
}

export function paymentCleared(payload: string) {
    return { 
        type: actionTypes.PAYMENT_CLEARED,
    }
}