import { createCardFailed, createCardSuccessful, getCardsFailed, getCardsSuccessful, makeCardDefaultFailed, makeCardDefaultSuccessful } from "../actions/card/actionCreators";
import { createPaymentTokenSuccesful } from "../actions/payment/actionCreators";
import { retrieveCards, makeCardDefault, createCard } from "../services/cardService";
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

export const createCardThunk = (customerId: string, paymentTokenReq: PaymentTokenRequest, isDefault: boolean) => {
    return async (dispatch: any) => {
        try {
            // create payment token
            const paymentTokenRes: PaymentTokenResponse = await createPaymentToken(paymentTokenReq)
            dispatch(createPaymentTokenSuccesful(paymentTokenRes))

            // create card (pass customer id, payment token id, and default flag as parameters)
            const res: CreatedCard = await createCard(customerId, paymentTokenRes.paymentTokenId, isDefault)
            dispatch(createCardSuccessful(res))

            // redirect to verification link
            window.location.href = res.verificationUrl
        } catch (err) {
            dispatch(createCardFailed())
            console.log(err)
        }
    }
}