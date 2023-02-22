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

export function paymentSuccessful() {
    return {
        type: actionTypes.PAYMENT_SUCESSFUL
    }
}

export function paymentFailed() {
    return {
        type: actionTypes.PAYMENT_FAILED
    }
}

export function paymentCancelled() {
    return { 
        type: actionTypes.PAYMENT_CANCELLED
    }
}