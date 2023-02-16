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

interface Cards {
    list: CardDetails[]
    count: number
}

interface GetCardsAction {
    type: string
    payload: CardDetails[]
}