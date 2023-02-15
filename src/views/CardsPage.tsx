import { Dispatch } from 'redux';
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCardsThunk } from '../thunks';

function CardsPage() {
    const cards: CardDetails[] = useSelector(
        (state: AppState) => state.cards,
    )
    const dispatch: Dispatch<any> = useDispatch()
        
    useEffect(() => {
        dispatch(getCardsThunk('5b3739ea-759d-47a2-b30c-9f5e2fb2faff'))
        console.log(cards)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (<p>CardsPage</p>)
}

export default CardsPage