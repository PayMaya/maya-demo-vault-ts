import { createCardFailed, createCardSuccessful, getCardsFailed, getCardsSuccessful, makeCardDefaultFailed, makeCardDefaultSuccessful } from "../actions/card/actionCreators";
import { retrieveCards, makeCardDefault, createCard } from "../services/cardService";

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

export const createCardThunk = (customerId: string, req: CreateCardRequest) => {
    return async (dispatch: any) => {
        try {
            const res: CreatedCard = await createCard(customerId, req)
            dispatch(createCardSuccessful(res))
            window.location.href = res.verificationUrl
        } catch (err) {
            dispatch(createCardFailed())
            console.log(err)
        }
    }
}