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