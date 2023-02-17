import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
// import { createPaymentTokenThunk } from "../thunks/payment";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { createCardThunk, getCardsThunk } from "../thunks/card";
import { hideAddNewCardModal } from "../actions/ui/addNewCardModal";
import { createPaymentToken } from '../services/paymentService';
import { createPaymentTokenSuccesful } from '../actions/payment/actionCreators';

function AddNewCardForm () {
    const mayaCustomerId: string = useSelector((state: AppState) => state.currentUser.mayaCustomerId)
    // const paymentTokenId: string = useSelector((state: AppState) => state.paymentTokenId)
    
    const dispatch: Dispatch<any> = useDispatch()

    const onAddCard = async (e: React.SyntheticEvent) => {
        e.preventDefault()
       
        const target = e.target as typeof e.target & {
            cardNumber: { value: string }
            expDate: { value: string }
            cvc: { value: string }
        }

         // STEP 1: CREATE PAYMENT TOKEN
        const paymentTokenReq: PaymentTokenRequest = {
            card: {
                number: target.cardNumber.value,
                expMonth: target.expDate.value.split('/')[0],
                expYear: `20${target.expDate.value.split('/')[1]}`,
                cvc: target.cvc.value
            }
        }
        const paymentToken: PaymentTokenResponse = await createPaymentToken(paymentTokenReq)
        dispatch(createPaymentTokenSuccesful(paymentToken))
        // dispatch(createPaymentTokenThunk(paymentTokenReq))

        // STEP 2: CREATE CARD USING PAYMENT TOKEN ID
        const createCardReq: CreateCardRequest = {
            paymentTokenId: paymentToken.paymentTokenId,
            isDefault: true,
            requestReferenceNumber: uuidv4()
        }
        console.log(createCardReq)
        dispatch(createCardThunk(mayaCustomerId, createCardReq))
        
        // STEP 3: REFRESH LIST OF CARDS
        dispatch(getCardsThunk(mayaCustomerId))

        // CLOSE MODAL
        dispatch(hideAddNewCardModal())
    }

    return (
        <form className="credit-card-form" onSubmit={(e: React.SyntheticEvent) => onAddCard(e)}>
            <input type="number" name="cardNumber" placeholder="Card number" maxLength={16} />
            <input type="text" name="expDate" placeholder="Date (MM/YY)" maxLength={5} />
            <input type="number" name="cvc" placeholder="CVC" maxLength={3}/>
            <button type="submit" className="btn green">Save</button>
        </form>
   )
}

export default AddNewCardForm