import { useSelector } from "react-redux"

export function CheckoutCardForm() {
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards)

    return (
        <form className="checkout-form" onSubmit={() => {}}>
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
            <button type="submit" className="btn green">Checkout</button>
        </form>
    )
}