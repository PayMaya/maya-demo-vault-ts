import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from '../thunks/card';
import VaultedCard from './VaultedCard';

function VaultedCardList() {
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards)
    const defaultCard: string = useSelector((state: AppState) => state.defaultCard)
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId!)

    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(getCardsThunk(mayaCustomerId))
    }, [defaultCard]) // eslint-disable-line react-hooks/exhaustive-deps

    if (cards.length === 0) {
        return (
            <div className="cards-header">
                <p>There are no cards saved.</p>
            </div>
        )
    } else {
        return (
            <>
                <div className="cards-header">
                    <p>Type</p>
                    <p>Number</p>
                    <p>Status</p>
                </div>
                {cards.map(function (card, index) {
                    return (
                        <VaultedCard key={index} {...card} />
                    )
                })}
            </>
        )
    }
}

export default VaultedCardList