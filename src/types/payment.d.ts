interface PaymentTokenRequest {
    card: {
        number: string
        expMonth: string
        expYear: string
        cvc: string
    }
}

interface PaymentTokenResponse {
    paymentTokenId: string
    state: string
    createdAt: string
    updatedAt: string
    issuer: string
}
