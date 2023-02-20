import { createCardFailed, createCardSuccessful, getCardsFailed, getCardsSuccessful, makeCardDefaultFailed, makeCardDefaultSuccessful } from "../actions/card/actionCreators";
import { retrieveCards, makeCardDefault, createCard } from "../services/cardService";

export const getCardsThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
            const res = await retrieveCards(id)
            dispatch(getCardsSuccessful(res))
        } catch (err) {
            dispatch(getCardsFailed())
            console.log(err)
        }
    }
}

export const makeCardDefaultThunk = (id: string, cardTokenId: string) => {
    return async (dispatch: any) => {
        try {
            const res = await makeCardDefault(id, cardTokenId)
            dispatch(makeCardDefaultSuccessful(res))
        } catch (err) {
            dispatch(makeCardDefaultFailed())
            console.log(err)
        }
    }
}

export const createCardThunk = (id: string, req: CreateCardRequest) => {
    return async (dispatch: any) => {
        try {
            const res: CreatedCard = await createCard(id, req)
            dispatch(createCardSuccessful(res))
            window.location.href = res.verificationUrl
        } catch (err) {
            dispatch(createCardFailed())
            console.log(err)
        }
    }
}