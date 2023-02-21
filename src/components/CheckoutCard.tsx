import Card from "./Card";

export function CheckoutCard({cardType, first6, last4, cardTokenId}: CardDetails) {
    return (
        <div className="checkout-card-list">
            <input type="radio" value={cardTokenId} name="card"/>
            <div className="card-info">
                <div className='card-type'>
                    <p> {cardType.toUpperCase()} </p>
                </div>
                <div className='card-number'>
                    <p> {`${first6}*****${last4}`} </p>
                </div>
            </div>
        </div>
   )
}