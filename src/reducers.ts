import * as cardActionTypes from "./actions/card/actionTypes"
import * as cartActionTypes from "./actions/cart/actionTypes"
import * as paymentActionTypes from "./actions/payment/actionTypes"

const cards = (state: CardDetails[] = [], action: GetCardsAction): CardDetails[] => {
    switch (action.type) {
        case cardActionTypes.GET_CARDS_SUCCESSFUL:
          const { payload } = action 
          payload.reverse()
          const cardsList = payload.filter((card: CardDetails) => card.state === 'VERIFIED')
          return cardsList
        case cardActionTypes.MAKE_CARD_DEFAULT_SUCCESSFUL:
          const { payload: defaultCard } = action
          const updatedCards = state.map((card) => card.cardTokenId === defaultCard.cardTokenId ? defaultCard : card);
          return updatedCards 
        default:
          return state
    }
}

const paymentTokenId = (state: string = "", action: CreatePaymentTokenAction): string => {
  switch (action.type) {
    case paymentActionTypes.CREATE_PAYMENT_TOKEN_SUCCESSFUL:
      const { payload } = action
      return payload.paymentTokenId
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

export { cards, paymentTokenId, currentUser, cart }