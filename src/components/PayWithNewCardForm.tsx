import { Dispatch } from 'redux';
import { useDispatch, useSelector } from "react-redux"
import { payWithNewCardThunk } from "../thunks/card";

interface AddCardDetailsHtmlForm extends EventTarget {
    cardNumber: { value: string }
    expDate: { value: string }
    cvc: { value: string }
    isDefault: { checked: boolean }
    saveCard: { checked: boolean }
}

function PayWithNewCardForm () {
    const currentUser: User = useSelector((state: AppState) => state.currentUser)
    const cart:Cart = useSelector((state:AppState) => state.cart);

    const dispatch: Dispatch<any> = useDispatch()

    const onAddCard = async (e: React.SyntheticEvent) => {
        e.preventDefault()
       
        const form = e.target as AddCardDetailsHtmlForm

        // STEP 1: COLLECT FORM VALUES
        const newCardDetails: NewCardDetails = {
            number: form.cardNumber.value,
            expMonth: form.expDate.value.split('/')[0],
            expYear: `20${form.expDate.value.split('/')[1]}`,
            cvc: form.cvc.value,
            isDefault: form.isDefault.checked
        }

        // STEP 2: CREATE CARD - PASS NEW CARD DETAILS AS PARAMETER
        dispatch(payWithNewCardThunk(currentUser, newCardDetails, form.saveCard.checked, cart.totalAmount))
    }

    return (
        <form className="add-new-card-form" onSubmit={(e: React.SyntheticEvent) => onAddCard(e)}>
            <input type="number" name="cardNumber" placeholder="Card number" maxLength={16} />
            <input type="text" name="expDate" placeholder="Date (MM/YY)" maxLength={5} />
            <input type="number" name="cvc" placeholder="CVC" maxLength={3}/>
            <input type="checkbox" id="isDefault" name="isDefault" />
            <label htmlFor='isDefault'> Set as default </label>
            <br/>
            <input type="checkbox" id="saveCard" name="saveCard" />
            <label htmlFor='saveCard'> Remember this card </label>
                <button type="submit" className="btn green">Checkout</button>
        </form>
   )
}

export default PayWithNewCardForm