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
    const payload: CreateCardPaymentPayload = {
        redirectPath: ''
    }

    switch (result) {
        case 'PAYMENT_SUCCESS':
            payload.redirectPath = `/purchase/success/?id=${requestReferenceNumber}`
            dispatch(paymentSuccessful(payload));
            break;
        case 'PAYMENT_FAILED':
            payload.redirectPath = `/purchase/failed/?id=${requestReferenceNumber}`
            dispatch(paymentFailed(payload));
            break;
        case 'PAYMENT_CANCELLED':
            payload.redirectPath =`/purchase/canceled/?id=${requestReferenceNumber}`
            dispatch(paymentCancelled(payload));
            break;
        default:
            break;
    }
}
