interface AppState {
    cards: CardDetails[]
    defaultCard: string
    paymentTokenId: string
    cardTokenId: string
    cart: Cart
    currentUser: User
    postPaymentRedirectUrl: string
}