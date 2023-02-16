import { getCardsFailed, getCardsSuccessful, updateCardFailed, updateCardSuccessful } from "../actions/card/actionCreators";
import { retrieveCards, updateCard } from "../services/cardService";

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

export const updateCardThunk = (id: string, cardTokenId: string) => {
    return async (dispatch: any) => {
        try {
            const res = await updateCard(id, cardTokenId)
            dispatch(updateCardSuccessful(res))
        } catch (err) {
            dispatch(updateCardFailed())
            console.log(err)
        }
    }
}