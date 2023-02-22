import { createPaymentTokenSuccesful, createPaymentTokenFailed, paymentSuccessful, paymentFailed, paymentCancelled } from "../actions/payment/actionCreators";
import config from "../config";
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
    const redirectUrl = `${config.host_url}/purchase`;
    switch (result) {
        case 'PAYMENT_SUCCESS':
            window.location.href = `${redirectUrl}/success/?id=${requestReferenceNumber}`;
            dispatch(paymentSuccessful());
            break;
        case 'PAYMENT_FAILED':
            window.location.href = `${redirectUrl}/failed/?id=${requestReferenceNumber}`;
            dispatch(paymentFailed());
            break;
        case 'PAYMENT_CANCELLED':
            window.location.href = `${redirectUrl}/canceled/?id=${requestReferenceNumber}`;
            dispatch(paymentCancelled());
            break;
        default:
            break;
    }
}
