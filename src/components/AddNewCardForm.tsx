import { Dispatch } from 'redux';
import { useDispatch, useSelector } from "react-redux"
import { createCardThunk } from "../thunks/card";

interface AddNewCardFormProps {
    onCloseModal: () => void
}

interface AddNewCardHtmlForm extends EventTarget {
    cardNumber: { value: string }
    expDate: { value: string }
    cvc: { value: string }
    isDefault: { checked: boolean }
}

function AddNewCardForm ({ onCloseModal }: AddNewCardFormProps) {
    const currentUser: User = useSelector((state: AppState) => state.currentUser)
    
    const dispatch: Dispatch<any> = useDispatch()

    const onAddCard = async (e: React.SyntheticEvent) => {
        e.preventDefault()
       
        const form = e.target as AddNewCardHtmlForm

        // STEP 1: COLLECT FORM VALUES
        const newCardDetails: NewCardDetails = {
            number: form.cardNumber.value,
            expMonth: form.expDate.value.split('/')[0],
            expYear: `20${form.expDate.value.split('/')[1]}`,
            cvc: form.cvc.value,
            isDefault: form.isDefault.checked
        }

        // STEP 2: CREATE CARD - PASS NEW CARD DETAILS AS PARAMETER
        dispatch(createCardThunk(currentUser, newCardDetails))

        onCloseModal()
    }

    return (
        <form className="add-new-card-form" onSubmit={(e: React.SyntheticEvent) => onAddCard(e)}>
            <input type="number" name="cardNumber" placeholder="Card number" maxLength={16} />
            <input type="text" name="expDate" placeholder="Date (MM/YY)" maxLength={5} />
            <input type="number" name="cvc" placeholder="CVC" maxLength={3}/>
            <input type="checkbox" id="isDefault" name="isDefault" />
            <label htmlFor='isDefault'> Set as default </label>
                <button type="submit" className="btn green">Save</button>
        </form>
   )
}

export default AddNewCardForm