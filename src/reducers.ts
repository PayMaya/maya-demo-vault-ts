import * as cardActionTypes from "./actions/card/actionTypes"
import * as cartActionTypes from "./actions/cart/actionTypes"
import * as customerActionTypes from "./actions/customer/actionTypes"
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
    case paymentActionTypes.PAYMENT_SUCESSFUL:
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
  mayaCustomerId: null
}
const currentUser = (state: User = defaultUser, action: any): User => {
  switch (action.type) {
    case customerActionTypes.CREATE_CUSTOMER_SUCCESSFUL:
      const { payload } = action
      const updatedUser = { ...defaultUser, mayaCustomerId: payload.id }
      return updatedUser
    default:
      return state
  }
}

const postPaymentRedirectUrl = (state: string | null = null, action: CreateCardPaymentAction): string | null => {
  const { payload } = action
  switch (action.type) {
    case paymentActionTypes.PAYMENT_SUCESSFUL:
    case paymentActionTypes.PAYMENT_FAILED:
    case paymentActionTypes.PAYMENT_CANCELLED:
      return payload
    case paymentActionTypes.PAYMENT_CLEARED:
      return null
    default:
      return state
  }
}

export { cards, paymentTokenId, currentUser, cart, postPaymentRedirectUrl }