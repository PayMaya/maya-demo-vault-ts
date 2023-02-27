import * as actionTypes from "./actionTypes"

export function createCustomerSuccesful(payload: Customer) {
    return {
        type: actionTypes.CREATE_CUSTOMER_SUCCESSFUL,
        payload
    }
}

export function createCustomerFailed() {
    return {
        type: actionTypes.CREATE_CUSTOMER_FAILED
    }
}

export function updateCustomerSuccesful(payload: Customer) {
    return {
        type: actionTypes.UPDATE_CUSTOMER_SUCCESSFUL,
        payload
    }
}

export function updateCustomerFailed() {
    return {
        type: actionTypes.UPDATE_CUSTOMER_FAILED
    }
}

export function deleteCustomerSuccesful() {
    return {
        type: actionTypes.DELETE_CUSTOMER_SUCCESSFUL
    }
}

export function deleteCustomerFailed() {
    return {
        type: actionTypes.DELETE_CUSTOMER_FAILED
    }
}