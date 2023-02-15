interface AppState {
    count: number
    cards: CardDetails[]
}

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