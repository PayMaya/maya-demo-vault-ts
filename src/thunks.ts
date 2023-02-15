import { getCards } from "./actions";
import { retrieveCards } from "./services/cardService";

export const getCardsThunk = (id: string) => {
    return async (dispatch: any) => {
        try {
            const res = await retrieveCards(id)
            dispatch(getCards(res))
        } catch (err) {
            console.log(err)
        }
    }
}