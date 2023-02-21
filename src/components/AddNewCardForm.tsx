import { Dispatch } from 'redux';
import { useDispatch, useSelector } from "react-redux"
import { createCardThunk, getCardsThunk } from "../thunks/card";

interface AddNewCardFormProps {
    onCloseModal: () => void
}

function AddNewCardForm ({ onCloseModal }: AddNewCardFormProps) {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)
    
    const dispatch: Dispatch<any> = useDispatch()

    const onAddCard = async (e: React.SyntheticEvent) => {
        e.preventDefault()
       
        const target = e.target as typeof e.target & {
            cardNumber: { value: string }
            expDate: { value: string }
            cvc: { value: string }
            isDefault: { checked: boolean }
        }

         // STEP 1: CREATE PAYMENT TOKEN REQUEST
        const paymentTokenReq: PaymentTokenRequest = {
            card: {
                number: target.cardNumber.value,
                expMonth: target.expDate.value.split('/')[0],
                expYear: `20${target.expDate.value.split('/')[1]}`,
                cvc: target.cvc.value
            }
        }
        const isDefault: boolean = target.isDefault.checked

        // STEP 2: CREATE CARD - PASS CUSTOMER ID AND FORM VALUES PARAMETERS
        dispatch(createCardThunk(mayaCustomerId, paymentTokenReq, isDefault))
        
        // STEP 3: REFRESH LIST OF CARDS
        dispatch(getCardsThunk(mayaCustomerId))

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