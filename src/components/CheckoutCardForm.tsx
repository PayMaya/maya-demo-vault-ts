import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Dispatch } from "redux"
import { payWithVaultedCardThunk } from "../thunks/payment";

interface VaultedCardCheckoutForm extends EventTarget {
    card: { value: string }
}

export function CheckoutCardForm() {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId!);
    const cart:Cart = useSelector((state:AppState) => state.cart);
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards)

    const dispatch: Dispatch<any> = useDispatch()

    const onCheckoutWithSavedCard = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as VaultedCardCheckoutForm

        dispatch(payWithVaultedCardThunk(mayaCustomerId,target.card.value, cart.totalAmount))
    }

    return (
        <form className="checkout-form" onSubmit={(event) => {onCheckoutWithSavedCard(event)}}>
            <div className="checkout-card-list">
                { cards.map((card,index) => {
                    return (
                        <div className="checkout-card" key={index}>
                            <input className="checkout-card-input" type="radio" value={card.cardTokenId} name="card"/>
                            <div className="card-info">
                                <div className='card-type'>
                                    <p> {card.cardType.toUpperCase()} </p>
                                </div>
                                <div className='card-number'>
                                    <p> {`${card.first6}*****${card.last4}`} </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button type="submit" className="btn green large">Checkout</button>
        </form>
    )
}