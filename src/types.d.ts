interface AppState {
    count: number
    cards: CardDetails[]
    currentUser: User
    cart: Cart
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

interface User {
    firstName: string
    lastName: string
    email: string
}

interface Product {
    name: string,
    unitPrice: number
}

type CartAction = {
    type: string
    payload: Product
}

interface Cart {
    items: CartItem[]
    quantity: number
    totalAmount: number
}
interface CartItem {
    product: Product
    quantity: number
    totalPrice: number
}