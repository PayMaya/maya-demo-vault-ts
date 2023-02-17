interface AppState {
    cards: Cards
    paymentTokenId: string
    cardTokenId: string
    cart: Cart
    currentUser: User

    // UI STATE
    addNewCardModalVisible: boolean
}