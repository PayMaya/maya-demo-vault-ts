interface CardDetails {
    first6: string
    last4: string
    cardTokenId: string
    cardType: string
    maskedPan: string
    createdAt: string
    updatedAt: string
    walletType: string
    state: string
    default: boolean
}

interface GetCardsAction {
    type: string
    payload: any
}

interface NewCardDetails {
    number: string
    expMonth: string
    expYear: string
    cvc: string
    isDefault: boolean
}

interface CreateCardRequest {
    paymentTokenId: string,
    isDefault: boolean,
    redirectUrl?: {
        success?: string,
        failure?: string,
        cancel?: string
    },
    requestReferenceNumber?: string
}

interface CreatedCard {
    cardTokenId: string,
    cardType: string,
    maskedPan: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    state: string,
    default: boolean,
    verificationUrl: string
}

interface CreateCardAction {
    type: string
    payload: CreatedCard
}

interface CardPaymentRequest {
    totalAmount: {
        amount: number
        currency: string
    }
    redirectUrl?: {
        success?: string
        failure?: string
        cancel?: string
    }
    requestReferenceNumber: string
    authorizationType?: string
    card?: {
        cvc: string
    }
}

interface CardPayment {
    id: string
    isPaid: boolean
    status: string
    amount: number
    currency: string
    canVoid: boolean
    canRefund: boolean
    canCapture: boolean
    createdAt: string
    updatedAt: string
    requestReferenceNumber?: string
    description?: string
    paymentTokenId?: string
}
