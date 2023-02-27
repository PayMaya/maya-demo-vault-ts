import { createPaymentTokenSuccesful, createPaymentTokenFailed, paymentSuccessful, paymentFailed, paymentCancelled } from "../actions/payment/actionCreators";
import { createPaymentToken, createCardPayment } from "../services/paymentService";
import { Dispatch } from "redux";

export function createPaymentTokenThunk (newCardDetails: NewCardDetails) {
    return async (dispatch: any) => {
        try {
            const res: PaymentTokenResponse = await createPaymentToken(newCardDetails)
            dispatch(createPaymentTokenSuccesful(res))
        } catch (err) {
            dispatch(createPaymentTokenFailed())
            console.log(err)
        }
    }
}

export function payWithVaultedCardThunk(customerId:string, cardTokenId:string, totalAmount:number) {
    return async (dispatch:Dispatch) => {
        try {
            const { requestReferenceNumber, cardPayment } = await createCardPayment(customerId,cardTokenId,totalAmount);
            processPaymentResult(cardPayment.status,requestReferenceNumber, dispatch);
        } catch (err) {
            console.log(err);
        }
    }
}

function processPaymentResult(result:string, requestReferenceNumber:string, dispatch:Dispatch) {
    switch (result) {
        case 'PAYMENT_SUCCESS':
            dispatch(paymentSuccessful(`/purchase/success/?id=${requestReferenceNumber}`));
            break;
        case 'PAYMENT_FAILED':
            dispatch(paymentFailed(`/purchase/failed/?id=${requestReferenceNumber}`));
            break;
        case 'PAYMENT_CANCELLED':
            dispatch(paymentCancelled(`/purchase/canceled/?id=${requestReferenceNumber}`));
            break;
        default:
            break;
    }
}
