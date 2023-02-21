import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { CheckoutCard } from "./CheckoutCard"

export function CheckoutCardsList() {
    const cards: CardDetails[] = useSelector((state: AppState) => state.cards)
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)

    const defaultCard = cards.find((card) => card.default);

    const [selectedCard, setSelectedCard] = useState(defaultCard?.cardTokenId);
    function onChooseCard(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSelectedCard(event.target.value);
    }
    return (
        <>
            <div className="checkout-cards-container" onChange={onChooseCard} >
            {cards.map(function (card, index) {
                return (
                    <CheckoutCard key={index} {...card} />
                )
            })}
            {/* <div className="add-new-card-checkout">
                <input type="radio" id="new-card" value="0" name="card"/>
                <label htmlFor="new-card">Use a different card</label>
            </div>
            { selectedCard === "0" && <p> Hello!! </p> } */}
            </div>
        </>
    )
}