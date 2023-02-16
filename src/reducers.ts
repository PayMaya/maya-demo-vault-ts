import * as cardActionTypes from "./actions/card/actionTypes"
import * as cartActionTypes from "./actions/cart/actionTypes"

const initCards = {
  list: [],
  count: 0
}
const cards = (state: Cards = initCards, action: GetCardsAction): Cards => {
    switch (action.type) {
        case cardActionTypes.GET_CARDS_SUCCESSFUL:
          const { payload } = action 
          const newCards: Cards = {
            list: payload,
            count: payload.length
          }
          return newCards
        default:
          return state
    }
}

const initCart: Cart = {
  items: [],
  quantity: 0,
  totalAmount: 0
}

const cart = (state: Cart = initCart, action: CartAction): Cart => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const addedProduct: Product = action.payload
      const updatedCart: Cart = {
        ...state,
        items: state.items.map(item => {
          if (item.product.name === addedProduct.name) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return { ...item }
          }
        }),
      }

      // if item not yet in cart
      if (!state.items.some(item => item.product.name === addedProduct.name)) {
        updatedCart.items.push({ 
          product: addedProduct, 
          quantity: 1, 
          totalPrice: addedProduct.unitPrice 
        })
      }

      // calculate totals
      updatedCart.items.forEach(item => item.totalPrice = item.quantity * item.product.unitPrice)
      updatedCart.quantity = updatedCart.items.map(item => item.quantity).reduce((a, b) => a + b, 0)
      updatedCart.totalAmount = updatedCart.items.map(items => items.totalPrice).reduce((a, b) => a + b, 0)
      
      return updatedCart
    case cartActionTypes.CLEAR_CART:
      return initCart
    default:
      return state
  }
}

const defaultUser: User = {
    firstName: 'Anya',
    lastName: 'Forger',
    email: 'anyaforger@test.com',
    mayaCustomerId: '5b3739ea-759d-47a2-b30c-9f5e2fb2faff'
  }
  const currentUser = (state: User = defaultUser, action: CartAction): User => {
    return state
  }

export { cards, currentUser, cart }