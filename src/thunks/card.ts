import { getCardsFailed, getCardsSuccessful, makeCardDefaultFailed, makeCardDefaultSuccessful } from "../actions/card/actionCreators";
import { retrieveCards, makeCardDefault } from "../services/cardService";

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