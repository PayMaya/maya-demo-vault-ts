import { useSelector } from 'react-redux';
import CreditCard from './CreditCard';

function CreditCardList() {
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards.list)

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
                        <div key={index}>
                            <CreditCard card={card} />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default CreditCardList