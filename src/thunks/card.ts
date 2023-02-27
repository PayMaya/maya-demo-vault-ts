import { createCardFailed, createCardSuccessful, getCardsFailed, getCardsSuccessful, makeCardDefaultFailed, makeCardDefaultSuccessful } from "../actions/card/actionCreators";
import { createCustomerFailed, createCustomerSuccesful } from "../actions/customer/actionCreators";
import { createPaymentTokenSuccesful } from "../actions/payment/actionCreators";
import { retrieveCards, makeCardDefault, createCard } from "../services/cardService";
import { createCustomer } from "../services/customerService";
import { createPaymentToken } from "../services/paymentService";

export const getCardsThunk = (customerId: string) => {
    return async (dispatch: any) => {
        try {
            const res = await retrieveCards(customerId)
            dispatch(getCardsSuccessful(res))
        } catch (err) {
            dispatch(getCardsFailed())
            console.log(err)
        }
    }
}

export const makeCardDefaultThunk = (customerId: string, cardTokenId: string) => {
    return async (dispatch: any) => {
        try {
            const res = await makeCardDefault(customerId, cardTokenId)
            dispatch(makeCardDefaultSuccessful(res))
        } catch (err) {
            dispatch(makeCardDefaultFailed())
            console.log(err)
        }
    }
}

export const createCardThunk = (currentUser: User, newCardDetails: NewCardDetails) => {
    return async (dispatch: any) => {
        let { mayaCustomerId } = currentUser
        try {
            // STEP 1: IF NO MAYA CUSTOMER ID, CREATE CUSTOMER
            if(!mayaCustomerId) {
                try {
                    const newCustomer: Customer = await createCustomer(currentUser)
                    mayaCustomerId = newCustomer.id
                    dispatch(createCustomerSuccesful(newCustomer))
                } catch (err) {
                    dispatch(createCustomerFailed())
                    console.log(err)
                }
            }

            // STEP 2: CREATE PAYMENT TOKEN
            const paymentTokenRes: PaymentTokenResponse = await createPaymentToken(newCardDetails)
            dispatch(createPaymentTokenSuccesful(paymentTokenRes))

            // STEP 3: CREATE CARD 
            // pass customer id, payment token id, and default flag as parameters
            const { isDefault } = newCardDetails
            const res: CreatedCard = await createCard(mayaCustomerId!, paymentTokenRes.paymentTokenId, isDefault)
            dispatch(createCardSuccessful(res))

            // redirect to verification link
            window.location.href = res.verificationUrl
        } catch (err) {
            dispatch(createCardFailed())
            console.log(err)
        }
    }
}