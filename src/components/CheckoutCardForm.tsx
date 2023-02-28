import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Dispatch } from "redux"
import { payWithVaultedCardThunk } from "../thunks/payment";

interface VaultedCardCheckoutHtmlForm extends EventTarget {
    card: { value: string }
}

export function CheckoutCardForm() {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId!);
    const cart:Cart = useSelector((state:AppState) => state.cart);
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards)

    const dispatch: Dispatch<any> = useDispatch()

    const onCheckoutWithSavedCard = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const form = event.target as VaultedCardCheckoutHtmlForm;

        dispatch(payWithVaultedCardThunk(mayaCustomerId, form.card.value, cart.totalAmount))
    }

    return (
        <div className="checkout-cards-container">
            { cards.length > 0 ? <form className="checkout-form" onSubmit={(event) => {onCheckoutWithSavedCard(event)}}>
                <div className="checkout-card-list">
                    { renderCardList(cards) }
                </div>
                <button type="submit" className="btn green large">Checkout</button>
            </form> : <p className="no-cards">No Cards Saved</p>}
            
        </div>
    )
}

function renderCardList(cards: CardDetails[]) {
    return cards.map((card,index) => {
        return (
            <div className="checkout-card" key={index}>
                <input className="checkout-card-input" type="radio" value={card.cardTokenId} name="card" id={`input-${index}`} defaultChecked={card.default}/>
                <div className="card-info">
                    <div className='card-type'>
                        <label htmlFor={`input-${index}`}> {card.cardType.toUpperCase()} </label>
                    </div>
                    <div className='card-number'>
                        <p> {`${card.first6}*****${card.last4}`} </p>
                    </div>
                </div>
            </div>
        )
    });
}